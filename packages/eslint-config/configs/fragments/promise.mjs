import promise from "eslint-plugin-promise";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  // Plugin
  promise.configs["flat/recommended"],

  // Config
  {
    name: "somni - promise",
    rules: {
      // Errors
      "promise/param-names": "error",
      "promise/prefer-await-to-then": "error",
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-catch": "error",
      "promise/no-nesting": "error",
      "promise/no-return-wrap": "error",

      // Warnings that are could be intentional
      "promise/no-multiple-resolved": "warn",
    },
  },
];

export default configs;
