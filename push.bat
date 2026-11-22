@echo off
title Push Tamil Nadu to GitHub
color 0E

echo ===================================================================
echo   PUSHING TAMIL NADU TO GITHUB
echo   Repository: https://shresthasrii@github.com/shresthasrii/India_INC_TN.git
echo ===================================================================
echo.

cd /d "%~dp0"

echo [INFO] Running: git push -u origin main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================================
    echo [SUCCESS] Successfully pushed Tamil Nadu to GitHub!
    echo ===================================================================
) else (
    echo.
    echo ===================================================================
    echo [NOTE] If a GitHub sign-in window or prompt appeared, please sign in
    echo with your GitHub account (shresthasrii) or configure your remote repository URL:
    echo   git remote add origin https://shresthasrii@github.com/shresthasrii/India_INC_TN.git
    echo ===================================================================
)

echo.
pause
