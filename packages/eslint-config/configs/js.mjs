import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import configfileRules from "./fragments/configfile.mjs";
import ignoreRules from "./fragments/ignore.mjs";
import importRules from "./fragments/import.mjs";
import stylisticRules from "./fragments/stylistic.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  // Base configuration for JavaScript
  js.configs.recommended,

  // Plugin: import-x
  importX.flatConfigs.recommended,

  // Import rules
  importRules,

  // Plugin: stylistic
  //  + Stylistic/Generic rules
  stylisticRules,

  // Configuration for config files
  configfileRules,

  // Ignore files
  ignoreRules,
];

export default configs;
