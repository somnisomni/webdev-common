import vue from "eslint-plugin-vue";
import ts from "./ts";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  ...ts,
  ...vue.configs["flat/strongly-recommended"],
];

export default configs;
