import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['express'],
    }
  },

  resolve: {
    alias: [
      {
        find: 'buffer',
        replacement: 'buffer/'
      },
      {
        find: 'util',
        replacement: 'util/'
      },
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
      },
      {
        find: '@entities', 
        replacement: path.resolve(__dirname, 'src/entities')
      }
    ]
  },
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['express', 'send'],
    include: ['buffer', 'util'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
})
