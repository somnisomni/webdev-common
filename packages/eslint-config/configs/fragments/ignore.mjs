/** @type {import("eslint").Linter.Config} */
const config = {
  name: "somni - global ignores",
  ignores: [
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/.output/**",
    "**/.cache/**",
    "**/.git/**",
    "**/.pnpm/**",
    "**/.yarn/**",
    "**/.nuxt/**",
  ],
};

export default config;
