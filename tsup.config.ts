import { defineConfig } from "tsup";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import { moveFiles } from "./scripts/mv";

export default defineConfig({
  esbuildPlugins: [NodeModulesPolyfillPlugin()],
  clean: true,
  dts: true,
  bundle: true,
  entry: ["src/cli.ts", "src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: false,
  target: "esnext",
  outDir: "dist",
  onSuccess: async () => {
    moveFiles();
  },
});
