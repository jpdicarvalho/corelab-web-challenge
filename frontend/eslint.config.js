import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "max-len": ["warn", { code: 80, ignoreUrls: true }], // Limite de caracteres por linha
      "no-multiple-empty-lines": ["error", { "max": 1 }], // Evita múltiplas linhas vazias
      "indent": ["error", 2], // Força indentação de 2 espaços
      "comma-dangle": ["error", "always-multiline"], // Vírgula no final de objetos e arrays
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Evita variáveis não usadas
      "eqeqeq": ["error", "always"], // Obriga uso de "===" ao invés de "=="
      "react/self-closing-comp": "error", // Fecha automaticamente tags vazias (ex: <img />)
    },
  },
];
