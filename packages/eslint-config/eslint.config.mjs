import js from "./configs/js.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  ...js,
  {
    "import/extensions": "off",
  }
];

export default configs;
