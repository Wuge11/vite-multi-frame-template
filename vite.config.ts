import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    react()
  ],
  resolve: {
    alias: [
      // @/xxx => src/xxx
      { find: /@\//, replacement: pathResolve('src') + '/' },
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }
    ]
  },
  root: 'src/pages/',
  publicDir: pathResolve('./public'),
  build: {
    outDir: pathResolve('dist'),
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        vuePage: pathResolve('src/pages/vuePage/index.html'),
        reactPage: pathResolve('src/pages/reactPage/index.html')
      }
    }
  }
})