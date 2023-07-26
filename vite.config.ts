import { defineConfig, splitVendorChunkPlugin } from "vite";
import liveReload from "vite-plugin-live-reload";
import path from "path";
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
    plugins: [
        liveReload([path.resolve(__dirname, "./resources/views/**/*.pug"),path.resolve(__dirname,"./resources/ts/**/.ts")]),
        splitVendorChunkPlugin(),
    ],
    root: "resources",
    base:"/",
    resolve: {
        // RESOURCES ALIAS
        alias: {
            "~": path.resolve(__dirname, "resources", "ts"),
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
        // watch: {
        //     usePolling: true,
        // },
    },
});
