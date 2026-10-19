import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Must match the GitHub repository name for a project Pages site.
const repoName = 'ahmads-portfolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
})
