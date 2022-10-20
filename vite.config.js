import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
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
      ViteEjsPlugin((viteconfig)=>{
        return {
          root:viteconfig.root,
          KAKAO_MAP_API:process.env.VITE_KAKAO_MAP_API_KEY
        }
      }),
      //VitePluginHtmlEnv()
    ],
    server:{
      port:3000,
    },
    define:{
      'process.env':{...process.env,...loadEnv(mode, process.cwd())},
    }
  })
}