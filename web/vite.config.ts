import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import path from 'path';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve('src') + '/',
      }
  ]
  },
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: path => path.replace("/api", "")
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";'
      }
    }
  }
})


