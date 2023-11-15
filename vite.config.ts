import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import {resolve} from "pathe";
import dts from "vite-plugin-dts";
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // entry: path.resolve(__dirname, "index.ts"),
            // name: "custom-components",
            // fileName: (format) => `index.${format}.js`,
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CustomComponents',
            // the proper extensions will be added
            fileName: 'custom-components',
            formats: ['es', 'cjs', 'umd', 'iife']
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        libInjectCss(),
        dts({
            insertTypesEntry: true,
        })
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
