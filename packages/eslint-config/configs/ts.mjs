import importX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";
import { JS_FILE_GLOBS, TS_FILE_GLOBS } from "./common/globs.mjs";
import configfileRules from "./fragments/configfile.mjs";
import ignoreRules from "./fragments/ignore.mjs";
import importRules from "./fragments/import.mjs";
import stylisticRules from "./fragments/stylistic.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  // Base configuration for TypeScript
  {
    files: TS_FILE_GLOBS,
    ...tseslint.configs.strict,
  },

  // Plugin: import-x
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,

  // Import rules
  importRules,

  // Plugin: stylistic
  //  + Stylistic/Generic rules
  stylisticRules,

  // Configuration for config files
  configfileRules,

  // Ignore files
  ignoreRules,
);

export default configs;
