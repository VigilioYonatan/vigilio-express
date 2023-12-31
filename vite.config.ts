import { defineConfig, splitVendorChunkPlugin } from "vite";
import liveReload from "vite-plugin-live-reload";
import vue from '@vitejs/plugin-vue'
import path from "path";
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
    plugins: [
        liveReload([path.resolve(__dirname, "./resources/views/**/*.ejs")]),
        splitVendorChunkPlugin(),
        vue()
    ],
    root: "resources",
    base:process.env.NODE_ENV === "production" ? "/dist/" : ".vite/dist/",
    resolve: {
        // RESOURCES ALIAS
        alias: {
            "~": path.resolve(__dirname, "resources", "ts"),
            "#": path.resolve(__dirname, "resources", "ts","services"),
            vue:"vue/dist/vue.esm-bundler.js"
        },
    },
    build: {
        outDir: path.resolve(__dirname, "public", "dist"),
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: path.resolve(__dirname, "resources", "ts", "main.ts"),
        },
    },
    server: {
        strictPort: true,
        port: Number(process.env.VITE_PORT),
        host: true,

    },
});
