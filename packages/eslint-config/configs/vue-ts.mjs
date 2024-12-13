import vue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import ts from "./ts.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  ...ts,
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

export default configs;
