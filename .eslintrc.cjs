const path = require("path");
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  extends: ["plugin:vue/recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: path.resolve(__dirname, "./tsconfig.json"),
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".vue"],
  },
});
