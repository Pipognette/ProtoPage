import { defineConfig } from 'vite';

// VITE_BASE_PATH is injected by the deploy workflow as /{branch}/{app}/ so
// assets resolve correctly under GitHub Pages. Falls back to '/' for local dev.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
});
