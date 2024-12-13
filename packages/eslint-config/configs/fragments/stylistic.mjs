import stylistic from "@stylistic/eslint-plugin";

/** @type {import("eslint").Linter.Config[]} */
const configs = [
  // Plugin: stylistic
  stylistic.configs["recommended-flat"],

  // Stylistic rules
  {
    name: "somni - stylistic",
    rules: {
      // Stylistic - warnings
      "@stylistic/no-multi-spaces": [ "warn", { ignoreEOLComments: true } ],

      // Stylistic - errors
      "@stylistic/array-bracket-spacing": [ "error", "always" ],
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
      "@stylistic/member-delimiter-style": [ "error", {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      } ],
    },
  },

  // ESLint built-in rules
  {
    name: "somni - eslint builtin",
    rules: {
      // ESLint - off
      "new-cap": "off",
      "no-duplicate-imports": "off",  // Use `import-x/no-duplicates` instead

      // ESLint - errors
      "constructor-super": "error",
      "no-class-assign": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-this-before-super": "error",
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "object-shorthand": [ "error", "always", { avoidQuotes: true } ],
      "prefer-const": [ "error", { destructuring: "all" } ],
      "prefer-numeric-literals": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "eqeqeq": [ "error", "always", { null: "ignore" } ],
      "quote-props": [ "error", "consistent-as-needed", { unnecessary: false } ],
      "arrow-body-style": [ "error", "as-needed", { requireReturnForObjectLiteral: true } ],
      "semi-spacing": [ "error", {
        before: false,
        after: true,
      } ],
      "no-var": "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      "func-style": [ "error", "declaration", { allowArrowFunctions: true } ],
      "curly": [ "error", "all" ],
      "camelcase": [ "error", { properties: "always" } ],
      "valid-typeof": "error",
      "unicode-bom": [ "error", "never" ],

      // ESLint - warnings that are could be intentional
      "no-cond-assign": "warn",
      "no-useless-assignment": "warn",
      "no-invalid-this": "warn",
      "yoda": [ "warn", "never", { exceptRange: true } ],
    },
  },
];

/** @type {import("eslint").Linter.Config[]} */
const additionalConfigsForTs = [
  {
    rules: {
      "@typescript-eslint/array-type": [ "warn", {
        default: "array-simple",
      } ],

      // no-useless-constructor
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
    },
  },
];

export default {
  configs,
  additionalConfigsForTs,
};
