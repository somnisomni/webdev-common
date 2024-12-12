import vue from "eslint-plugin-vue";
import ts from "./ts.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  ...ts,
  ...vue.configs["flat/strongly-recommended"],
];

export default configs;
