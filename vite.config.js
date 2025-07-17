import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/OS_Jukebox/', // 👈 must match your GitHub repo name
  plugins: [react()],
})