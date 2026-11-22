# Deployment Guide — Tamil Nadu: A Land of Living Stories

This project is built with **React Router v8**, **Vite**, **Tailwind CSS v4**, and **@agent-native/core**.

---

## 1. Local Run
- **Double-click:** `run.bat` (inside `Tamil Nadu` folder or `run_tamilnadu.bat` from `ARHIA`)
- Runs database migrations, frees port 8080 if needed, and starts the development server at `http://localhost:8080`.

---

## 2. Deploying to Vercel

The project is pre-configured with `vercel.json` and React Router prerendering for zero-config Vercel deployment:

### Configuration Details
- **Build Command:** `pnpm run build`
- **Output Directory:** `build/client`
- **Clean URLs:** `true`
- **Single Page App Routing:** Rewrites `/(.*)` to `/index.html`

### Option A: Via GitHub (Recommended)
1. Create a GitHub repository (e.g. `India_INC_TN`):
   ```bash
   git remote add origin https://github.com/shresthasrii/India_INC_TN.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Vercel will automatically read `vercel.json` and detect:
   - **Framework Preset:** Vite / Other
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `build/client`
5. Click **Deploy**.

### Option B: Via Vercel CLI
From this folder, run:
```bash
npx vercel
```
Follow the interactive prompts to link and deploy the project.
For production:
```bash
npx vercel --prod
```

---

## 3. Environment Variables (Optional)
If deploying with a live backend / Postgres database:
- `AUTH_DISABLED`: `true` (to bypass user authentication)
- `DATABASE_URL`: Connection string to persistent Postgres (Neon, Supabase, etc.)
- `BETTER_AUTH_SECRET`: Random 32-character hex string (`openssl rand -hex 32`)
