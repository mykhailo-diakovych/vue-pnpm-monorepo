import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // we alias to the lib's source files in dev
      // so we don't need to rebuild the lib over and over again
      '@logiware/ui':
        process.env.NODE_ENV === 'production'
          ? '@logiware/ui'
          : '@logiware/ui/src/main.ts',
    },
    dedupe: ['vue'],
  },
})
