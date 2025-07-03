import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs"],
    outDir: "dist/cjs",
    target: "es2020"
})