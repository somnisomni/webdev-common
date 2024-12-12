import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import shopify from "@shopify/eslint-plugin";
import globals from "globals";
import importX from "eslint-plugin-import-x";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  // Base configuration for JavaScript
  js.configs.recommended,

  // Plugin: shopify
  ...shopify.configs.esnext,

  // Plugin: import-x
  importX.flatConfigs.recommended,

  // Import rules
  {
    name: "somni - import-x rules",
    rules: {
      "import/namespace": "off",
      "import/named": "off",
      "import/order": [ "error", {
        groups: [ "type", "builtin", "external", "internal", "parent", "sibling", "index", "object" ],
      } ],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/exports-last": "error",
    },
  },

  // Plugin: stylistic
  {
    plugins: { "@stylistic": stylistic },
  },

  // General + stylistic rules
  {
    name: "somni - general + stylistic rules",
    rules: {
      // ESLint
      "array-bracket-spacing": [ "error", "always" ],
      "eqeqeq": [ "error", "always", { null: "ignore" } ],
      "quote-props": [ "error", "consistent-as-needed", { unnecessary: false } ],
      "arrow-body-style": [ "error", "as-needed" ],
      "semi-spacing": [ "error", {
        before: false,
        after: true,
      } ],

      // Babel
      "@babel/object-curly-spacing": [ "error", "always" ],

      // Stylistic
      "@stylistic/object-curly-spacing": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2, {
        SwitchCase: 1,
        VariableDeclarator: "first",
        FunctionDeclaration: { parameters: "first" },
        FunctionExpression: { parameters: "first" },
        CallExpression: { arguments: "first" },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ignoredNodes: [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
        ],
      } ],
      "@stylistic/keyword-spacing": [ "error", {
        before: true,
        after: true,
        overrides: {
          if: { after: false },
          for: { after: false },
          while: { after: false },
          switch: { after: false },
          with: { after: false },
          catch: { after: false },
        },
      } ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/quotes": [ "error", "double" ],
      "@stylistic/block-spacing": [ "error", "always" ],
      "@stylistic/brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
      "@stylistic/space-before-blocks": [ "error", "always" ],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/comma-dangle": [ "error", "always-multiline" ],
    },
  },

  // Configuration for config files
  {
    files: [ "*.config.(m|c)?(t|j)s" ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.builtin,
      },
    },
  },
];

export default configs;
