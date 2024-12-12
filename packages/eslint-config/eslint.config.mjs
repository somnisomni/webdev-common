/* eslint-disable import/extensions */
import js from "./configs/js.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  ...js,
];

export default configs;
