# Movie App (Frontend)

This is the frontend for a small Movie App built with React, TypeScript and Vite. It uses The Movie Database (TMDB) API to fetch popular movies and perform searches.

This README contains quick setup and run instructions, environment requirements, and a short overview of the project structure.

## Features

## Prerequisites

## Environment

Create a `.env` file at the project root (frontend folder) or set the following environment variable before running the app:

## Install

From the `frontend` folder run:

```powershell
# install dependencies
npm install
# or
pnpm install
# or
yarn
```

## Run (development)

```powershell
npm run dev
# or
pnpm dev
# or
yarn dev
```

This starts Vite's dev server with hot module replacement. Open the URL printed in the console (usually http://localhost:5173).

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Build & Preview

```powershell
npm run build
npm run preview
```

## Type check and lint

````js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    ```powershell
    # Type check (no emit)
    npx tsc --noEmit

    # Run eslint (if configured)
    npm run lint
    ```

    ## Project structure (important files)

    - `src/` — React source files
      - `main.tsx` — app entry
      - `App.tsx` — root component
      - `components/MovieCard.tsx` — movie card UI
      - `pages/Home.tsx` — main page (search + grid)
      - `services/api.ts` — TMDB API helpers
      - `css/` — styles

    ## Notes on API key and code

    - The app expects a TMDB API key available as `VITE_TMDB_API_KEY`. The `services/api.ts` module reads this env var via `import.meta.env`.
    - The TypeScript `api.ts` file exports typed helpers and a `Movie` interface used across the app.

    ## Troubleshooting

    - "Could not find declaration file for module '../services/api'": Ensure you removed or replaced any old `api.js` imports and import from `../services/api` (omit file extension). Also ensure the `api.ts` file exists and the project is using TypeScript.
    - If you see type errors after converting files, run `npx tsc --noEmit` to see the full list.

    ## Next steps / Improvements

    - Add pagination for popular/search results
    - Caching and optimistic UI updates
    - Add unit tests for components and API helpers

    ## License

    This project is for learning purposes.

    Enjoy building!
````
