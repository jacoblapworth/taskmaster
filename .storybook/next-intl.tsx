import { NextIntlClientProvider } from "next-intl"
import defaultMessages from "@/messages/en.json"
import type { DecoratorFunction } from "storybook/internal/csf"

export function withNextIntl(): DecoratorFunction {
  return (Story) => (
    <NextIntlClientProvider locale="en" messages={defaultMessages}>
      <Story />
    </NextIntlClientProvider>
  )
}
