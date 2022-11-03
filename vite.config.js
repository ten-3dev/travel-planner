import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import envCompatible from 'vite-plugin-env-compatible'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
// https://vitejs.dev/config/

// dns.setDefaultResultOrder('verbatim')

// export default defineConfig({
//   envPrefix: 'REACT_APP_',
//   plugins: [
//       react(),
//       envCompatible(),
//   ],
//   server: {
//       open: true,
//       port: 3000
//     },
//   define: {
//   'process.env': process.env
//   },
// })
export default ({mode})=>{
  const env = {...process.env,...loadEnv(mode,process.cwd(),'')};

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
          KAKAO_MAP_API:env.VITE_KAKAO_MAP_API_KEY
        }
      }),
      //VitePluginHtmlEnv()
    ],
    server:{
      port:3000,
      open:true,
    },
    define:{
      'process.env':{...env,...loadEnv(mode, process.cwd())},
    }
  })
}
