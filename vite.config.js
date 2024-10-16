import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
  },

  resolve: {
    alias: [
      {
        find: '@pages', 
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@shared', 
        replacement: path.resolve(__dirname, 'src/shared'),
      },
      {
        find: '@widgets', 
        replacement: path.resolve(__dirname, 'src/widgets')
      }
    ]
  }
  

})
