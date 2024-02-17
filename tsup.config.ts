import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  bundle: false,
  entry: ["src/cli.ts", "src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: false,
  target: "esnext",
  outDir: "dist",
});
