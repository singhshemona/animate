module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020, 
      sourceType: "module",
      ecmaFeatures: {
        "jsx": true
      } 
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint", 
      "plugin:prettier/recommended" // Make sure this is always the last configuration in the extends array.
    ],
    rules: {
      "no-useless-concat": 0,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/no-var-requires": 0
    }
  };