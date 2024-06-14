import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import CopyPlugin from 'copy-webpack-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "./"
})
