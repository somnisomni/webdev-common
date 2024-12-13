/** @type {import("eslint").Linter.Config} */
const config = {
  name: "somni - global ignores",
  ignores: [
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/output/**",
    "**/.output/**",
    "**/temp/**",
    "**/.temp/**",
    "**/.cache/**",
    "**/.git/**",
    "**/.pnpm/**",
    "**/.yarn/**",
    "**/.nuxt/**",

    // ESLint seems like not correctly parsing conditional(?) pattern,
    // so we need to ignore all files that contains `vite.config.(m|c)?(t|j)s.timestamp`
    "**/vite.config.js.timestamp*",
    "**/vite.config.ts.timestamp*",
    "**/vite.config.mjs.timestamp*",
    "**/vite.config.cjs.timestamp*",
    "**/vite.config.mts.timestamp*",
    "**/vite.config.cts.timestamp*",
  ],
};

export default config;
