import { defineConfig } from "@pandacss/dev"

import { globalCss } from "@/styles/globals"
import { theme } from "@/styles/theme"

export default defineConfig({
  jsxFramework: "react",
  preflight: true,
  shorthands: false,
  strictTokens: true,
  strictPropertyValues: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  globalCss,
  theme: {
    extend: theme,
  },
  conditions: {
    extend: {
      activeItem: "&[data-active-item]",
      enter: "&[data-enter]",
      exit: "&[data-exit]",
    },
  },
  outdir: ".styled",
  importMap: "styled",
})
