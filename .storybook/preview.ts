import addonDocs from "@storybook/addon-docs"
import addonThemes, { withThemeByClassName } from "@storybook/addon-themes"
import { definePreview } from "@storybook/nextjs-vite"

import "../src/app/index.css"

export default definePreview({
  addons: [addonDocs(), addonThemes()],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: "dark",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
  ],
})
