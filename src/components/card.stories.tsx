import preview from "@/storybook/preview"

import { Card } from "./card"

const meta = preview.meta({
  title: "Components/Card",
  component: Card,
  args: {
    children: "This is a card",
  },
})

export const Primary = meta.story({})
