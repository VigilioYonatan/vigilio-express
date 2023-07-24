// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "vite";
import liveReload from "vite-plugin-live-reload";
import path from "path";
import vue from "@vitejs/plugin-vue";
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        liveReload([path.resolve(__dirname, "views/**/*.pug")]),
        splitVendorChunkPlugin(),
        vue(),
        viteCompression(),
    ],
    root: "src",
    base: "/",
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src"),
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    build: {
        outDir: path.resolve(__dirname, "..", "server", "public","dist"),
        emptyOutDir: true,
        manifest: true,
        // assetsDir: "dist",
        rollupOptions: {
            input: path.resolve(__dirname, "src", "main.ts")
        },
    },
    server: {
        strictPort: true,
        port: 3000,
        host: true,
        // watch: {
        //     usePolling: true,
        // },
    },
});
