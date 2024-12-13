import tseslint from "typescript-eslint";
import { TS_FILE_GLOBS } from "./common/globs.mjs";
import configfileRules from "./fragments/configfile.mjs";
import ignoreRules from "./fragments/ignore.mjs";
import { generateImportConfig } from "./fragments/import.mjs";
import promiseRules from "./fragments/promise.mjs";
import stylisticRules from "./fragments/stylistic.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  // Base configuration for TypeScript
  {
    files: TS_FILE_GLOBS,
    ...tseslint.configs.strict,
  },

  // Plugin: import-x
  ...generateImportConfig(true),

  // Plugin: promise
  ...promiseRules,

  // Plugin: stylistic
  //  + Stylistic/Generic rules
  stylisticRules,

  // Configuration for config files
  configfileRules,

  // Ignore files
  ignoreRules,
);

export default configs;
