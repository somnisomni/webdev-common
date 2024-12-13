/** @type {import("eslint").Linter.Config} */
const config = {
  name: "somni - global ignores",
  ignores: [
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/(.)?output/**",
    "**/.cache/**",
    "**/.git/**",
    "**/.pnpm/**",
    "**/.yarn/**",
    "**/.nuxt/**",
    "**/vite.config.(m|c)?(t|j)s.timestamp*",
  ],
};

export default config;
