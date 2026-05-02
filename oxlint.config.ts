import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "unicorn", "react", "jsdoc", "node", "oxc", "import"],
  categories: {
    correctness: "error",
  },
  rules: {},
  env: {
    builtin: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
