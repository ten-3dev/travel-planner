import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

// https://vitejs.dev/config/
export default ({mode})=>{
  process.env = {...process.env,...loadEnv(mode, process.cwd())};

  return defineConfig({
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      ViteEjsPlugin()
    ],
  })
}