import importX from "eslint-plugin-import-x";

/** @type {import("eslint").Linter.Config} */
const appendConfig = {
  name: "somni - import-x",
  rules: {
    // Off
    "import/namespace": "off",
    "import/named": "off",
    "import-x/no-rename-default": "off",

    // Warnings
    "import-x/order": [ "warn", {
      "groups": [ "type", "builtin", "external", "internal", "parent", "sibling", "index", "object" ],
      "newlines-between": "never",
      "alphabetize": {
        order: "asc",
        caseInsensitive: false,
      },
    } ],
    "import-x/consistent-type-specifier-style": [ "warn", "prefer-top-level" ],

    // Errors
    "import-x/exports-last": "warn",
    "import-x/first": "error",
    "import-x/newline-after-import": "error",
    "import-x/no-deprecated": "error",
    "import-x/no-empty-named-blocks": "error",
    "import-x/no-mutable-exports": "error",
    "import-x/no-extraneous-dependencies": "error",
    "import-x/no-absolute-path": "error",
    "import-x/no-self-import": "error",

    // no-duplicates
    "no-duplicate-imports": "off",  // Disable ESLint's rule
    "import-x/no-duplicates": [ "error", { "prefer-inline": false } ],
  },
};

/**
 * @param {boolean} ts
 * @returns {import("eslint").Linter.Config[]}
 */
function generateImportConfig(ts = false) {
  return [
    // Plugin
    importX.flatConfigs.recommended,
    (ts ? importX.flatConfigs.typescript : { }),

    // Config
    appendConfig,
  ];
}

export { generateImportConfig };
