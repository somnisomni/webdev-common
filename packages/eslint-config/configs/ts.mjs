import tseslint from "typescript-eslint";
import importX from "eslint-plugin-import-x";
import importRules from "./fragments/import.mjs";
import stylisticRules from "./fragments/stylistic.mjs";
import configfileRules from "./fragments/configfile.mjs";
import ignoreRules from "./fragments/ignore.mjs";

/** @type {import("eslint").Linter.Config[]} */
const configs = tseslint.config(
  // Base configuration for TypeScript
  tseslint.configs.strictTypeChecked,

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

/**
 * @param {string} tsconfigRootDir
 * @returns {import("eslint").Linter.Config[]}
 */
function generateTsLintConfig(tsconfigRootDir) {
  return [
    ...configs,
    {
      files: [ "**/*.(m|c)?ts" ],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
    },
    {
      files: [ "**/*.(m|c)?js" ],
      ...tseslint.configs.disableTypeChecked,
    },
  ];
}

export { generateTsLintConfig };
