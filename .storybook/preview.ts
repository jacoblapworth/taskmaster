import addonDocs from "@storybook/addon-docs"
import addonThemes, { withThemeByClassName } from "@storybook/addon-themes"
import { definePreview } from "@storybook/nextjs-vite"

import { withReduxProvider } from "./redux"
import { withThemeProvider } from "./theme"

import "../src/app/index.css"

export default definePreview({
  addons: [addonDocs(), addonThemes()],
  decorators: [
    withReduxProvider(),
    withThemeProvider(),
    withThemeByClassName({
      defaultTheme: "Dark",
      themes: {
        Light: "light",
        Dark: "dark",
      },
    }),
  ],
  tags: ["autodocs"],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
})
