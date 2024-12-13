import js from "@eslint/js";
import configfileRules from "./fragments/configfile.mjs";
import ignoreRules from "./fragments/ignore.mjs";
import { generateImportConfig } from "./fragments/import.mjs";
import promiseRules from "./fragments/promise.mjs";
import stylisticRules from "./fragments/stylistic.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  // Base configuration for JavaScript
  js.configs.recommended,

  // Plugin: import-x
  ...generateImportConfig(),

  // Plugin: promise
  ...promiseRules,

  // Plugin: stylistic
  //  + Stylistic/Generic rules
  ...stylisticRules.configs,

  // Configuration for config files
  configfileRules,

  // Ignore files
  ignoreRules,
];

export default configs;
