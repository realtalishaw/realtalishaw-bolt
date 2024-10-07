import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_CONTENTFUL_SPACE_ID': JSON.stringify(process.env.VITE_CONTENTFUL_SPACE_ID),
    'import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.VITE_CONTENTFUL_ACCESS_TOKEN),
  },
})