import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "unicorn", "react", "jsdoc", "node", "oxc", "import"],
  categories: {
    correctness: "error",
  },
  rules: {
    "typescript/no-unused-vars": "warn",
  },
  env: {
    builtin: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
