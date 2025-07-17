import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/OS_Jukebox/', // 👈 MUST match your GitHub repo name
  plugins: [react()],
})
