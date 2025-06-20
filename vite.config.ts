import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import VitePluginFonts from "vite-plugin-fonts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        VitePluginFonts({
            google: {
                families: [
                    {
                        name: 'Quicksand',
                        styles: 'wght@300;400;500;600;700',
                    },
                ],
                display: 'swap',
                preconnect: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }

})
