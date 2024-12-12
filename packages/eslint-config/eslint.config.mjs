import js from "./configs/js.mjs";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...js,
  {
    rules: {
      "import-x/extensions": [ "error", "always" ],
    },
  },
];
