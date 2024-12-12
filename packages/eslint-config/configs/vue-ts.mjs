import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import globals from "globals";
import { generateTsLintConfig } from "./ts.mjs";

/** @type {import("eslint").Linter.Config[]} */
const appendConfigs = tseslint.config(
  ...vue.configs["flat/recommended"],
  {
    name: "somni - vue + typescript",
    files: [ "*.vue", "**/*.vue" ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
);

/**
 * @param {string} tsconfigRootDir
 * @returns {import("eslint").Linter.Config[]}
 */
function generateVueTsLintConfig(tsconfigRootDir) {
  return [
    ...generateTsLintConfig(tsconfigRootDir),
    ...appendConfigs,
  ];
}

export { generateVueTsLintConfig };
