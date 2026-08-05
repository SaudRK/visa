import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // One-off Node utilities (content generators, image optimisation). They run
    // directly via `node`, outside the bundler, so CommonJS `require()` is
    // correct there and the app's TS/ESM rules do not apply.
    "scripts/**",
  ]),
]);

export default eslintConfig;
