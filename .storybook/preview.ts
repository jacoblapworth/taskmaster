import addonDocs from "@storybook/addon-docs"
import addonThemes, { withThemeByClassName } from "@storybook/addon-themes"
import { definePreview } from "@storybook/nextjs-vite"

import "../src/app/index.css"

export default definePreview({
  addons: [addonDocs(), addonThemes()],

  decorators: [
    withThemeByClassName({
      defaultTheme: "Dark",
      themes: {
        Liht: "light",
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
