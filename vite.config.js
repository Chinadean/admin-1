import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), eslintPlugin()],
})
