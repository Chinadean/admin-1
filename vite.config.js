import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), eslintPlugin()],
})
