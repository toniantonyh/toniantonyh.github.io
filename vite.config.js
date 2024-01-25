import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
// import mkcert from 'vite-plugin-mkcert'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/liuweiGL/vite-plugin-mkcert
    // mkcert(),
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-') && tag !== 'router-link'
        }
      }
    }),
    svgLoader({
      svgo: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
