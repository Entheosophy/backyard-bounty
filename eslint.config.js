// /Users/entheos/Documents/Backyard Bounty/eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/**", ".next/**", "out/**", "dist/**", "coverage/**"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_|^Component$", varsIgnorePattern: "^[A-Z_]" },
      ],
    },
  },
];
