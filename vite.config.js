import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from 'dns'
import envCompatible from 'vite-plugin-env-compatible'


dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    envPrefix: 'REACT_APP_',
    plugins: [
        react(),
        envCompatible(),
    ],
    server: {
        open: true,
        port: 3000
      },
    define: {
    'process.env': process.env
    },


})


