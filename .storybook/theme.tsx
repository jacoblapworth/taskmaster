import { ClientThemeProvider } from "@wrksz/themes/client"
import type { DecoratorFunction } from "storybook/internal/csf"

import { DEFAULT_THEME } from "@/constants"

export function withThemeProvider(): DecoratorFunction {
  return (Story) => (
    <ClientThemeProvider
      defaultTheme={DEFAULT_THEME}
      themes={["light", "dark"]}
      attribute="class"
      storage="cookie"
    >
      <Story />
    </ClientThemeProvider>
  )
}
