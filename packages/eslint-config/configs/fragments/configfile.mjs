import globals from "globals";

/** @type {import("eslint").Linter.Config} */
const config = {
  name: "somni - configfile",
  files: [ "*.config.(m|c)?(t|j)s", "**/*.config.(m|c)?(t|j)s" ],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.nodeBuiltin,
      ...globals.builtin,
    },
  },
  rules: {
    "import/no-anonymous-default-export": "off",
    "import-x/extensions": [ "error", "always" ],
  },
};

export default config;
