@echo off
title "Tamil Nadu — A Land of Living Stories Runner"
color 0B

echo ===================================================================
echo   TAMIL NADU - A LAND OF LIVING STORIES RUNNER
echo ===================================================================
echo  Framework : @agent-native/core + React Router v8 + Tailwind CSS v4
echo  Database  : PGlite (Embedded Postgres)
echo  URL       : http://localhost:8080
echo ===================================================================
echo.

cd /d "%~dp0"

:: 1. Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js was not found in your system PATH!
    echo Please install Node.js v22 or higher from https://nodejs.org/ and try again.
    echo.
    pause
    exit /b 1
)

:: 2. Detect package manager (prefer pnpm)
set PKG_MGR=pnpm
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo [WARN] pnpm not found directly in PATH, checking corepack...
    where corepack >nul 2>nul
    if %errorlevel% equ 0 (
        call corepack enable
    ) else (
        set PKG_MGR=npm
    )
)
echo [OK] Using package manager: %PKG_MGR%

:: 3. Ensure .env exists with AUTH_DISABLED=true
if not exist ".env" (
    echo [INFO] Creating .env file from .env.example...
    if exist ".env.example" (
        copy /Y ".env.example" ".env" >nul
        echo AUTH_DISABLED=true>>".env"
        echo AGENT_NATIVE_DISABLE_AUTO_DEV_ACCOUNT=1>>".env"
    ) else (
        echo PING_MESSAGE=pong>".env"
        echo AUTH_DISABLED=true>>".env"
        echo AGENT_NATIVE_DISABLE_AUTO_DEV_ACCOUNT=1>>".env"
    )
)

:: Ensure postcss.config.mjs exists to prevent Tailwind v3 conflict from parent folder
if not exist "postcss.config.mjs" (
    echo export default { plugins: {} }; > "postcss.config.mjs"
)

:: 4. Ensure data\pglite directory exists
if not exist "data\pglite" (
    echo [INFO] Creating data\pglite directory for database...
    mkdir "data\pglite" 2>nul
)

:: 5. Install dependencies if node_modules is missing or broken
if not exist "node_modules\@agent-native\core\bin\agent-native.js" (
    echo [INFO] Dependencies missing or invalidated. Installing dependencies with %PKG_MGR%...
    call %PKG_MGR% install
    if %errorlevel% neq 0 (
        echo [ERROR] Dependency installation failed!
        pause
        exit /b 1
    )
)
node scripts\patch-core.mjs >nul 2>nul

:: 6. Run database migrations
echo [INFO] Applying database migrations...
call %PKG_MGR% run db:migrate

:: 7. Free port 8080 if an old listening process is lingering
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr ":8080" ^| findstr "LISTENING"') do (
    echo [INFO] Freeing port 8080 from process PID %%a...
    taskkill /F /PID %%a >nul 2>nul
)

:: 8. Schedule browser to open after 3 seconds
echo [INFO] Launching server and scheduling browser to open http://localhost:8080 ...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:8080"

:: 9. Run dev server in this window
echo.
echo ===================================================================
echo Server starting now at http://localhost:8080 ... Press Ctrl+C anytime to stop.
echo ===================================================================
echo.
call %PKG_MGR% run dev

pause
