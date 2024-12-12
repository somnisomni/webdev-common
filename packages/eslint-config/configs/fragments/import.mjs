/** @type {import("eslint").Linter.Config} */
const config = {
  name: "somni - import-x",
  rules: {
    "import/namespace": "off",
    "import/named": "off",
    "import-x/order": [ "error", {
      groups: [ "type", "builtin", "external", "internal", "parent", "sibling", "index", "object" ],
    } ],
    "import-x/first": "error",
    "import-x/newline-after-import": "error",
    "import-x/exports-last": "error",
  },
};

export default config;
