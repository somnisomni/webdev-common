import tseslint from "typescript-eslint";
import importX from "eslint-plugin-import-x";
import shopify from "@shopify/eslint-plugin";
import js from "./js.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  // Base configuration for JavaScript
  js,

  // Base configuration for TypeScript
  // tseslint.configs.recommended,

  // Plugin: shopify
  ...shopify.configs.typescript,

  // Plugin: import-x
  importX.flatConfigs.typescript,
);

export default configs;
