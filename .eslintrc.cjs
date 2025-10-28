module.exports = {
  env: { browser: true, es2023: true },
  extends: ["eslint:recommended"],
  parserOptions: { sourceType: "module" },
  rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] },
};
