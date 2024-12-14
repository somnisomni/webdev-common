import vue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import ts from "./ts.mjs";

const inlineElements = [
  // Got from https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/inline-non-void-elements.json
  "a",
  "abbr",
  "audio",
  "b",
  "bdi",
  "bdo",
  "canvas",
  "cite",
  "code",
  "data",
  "del",
  "dfn",
  "em",
  "i",
  "iframe",
  "ins",
  "kbd",
  "label",
  "map",
  "mark",
  "noscript",
  "object",
  "output",
  "picture",
  "q",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "svg",
  "time",
  "u",
  "var",
  "video",

  // Additional elements
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
];

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  // Extend TypeScript config
  ...ts,

  // Plugin: vue
  ...vue.configs["flat/recommended"],

  // Additional Vue config + rules
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
    rules: {
      // Vue - errors
      "vue/first-attribute-linebreak": [ "error", {
        singleline: "beside",
        multiline: "beside",
      } ],
      "vue/max-attributes-per-line": [ "error", {
        singleline: 1,
        multiline: 1,
      } ],
      "vue/html-closing-bracket-newline": [ "error", {
        singleline: "never",
        multiline: "never",
      } ],
      "vue/singleline-html-element-content-newline": [ "error", {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: inlineElements,
      } ],
      "vue/component-name-in-template-casing": [ "error", "PascalCase" ],

      // Enforce to use camelCase (no hyphenation) for attributes in Vue templates
      // ...because I decided to do that
      "vue/attribute-hyphenation": [ "error", "never" ],
      "vue/v-on-event-hyphenation": [ "error", "never" ],
    },
  },
);

export default configs;
