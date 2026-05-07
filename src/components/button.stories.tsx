import preview from "@/storybook/preview"

import { Button } from "./button"

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
  },
})

export const Primary = meta.story({})

export const Secondary = meta.story({
  args: {
    variant: "secondary",
  },
})

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
})

export const LongText = meta.story({
  args: {
    children: "This is a button with a very long label",
  },
})
