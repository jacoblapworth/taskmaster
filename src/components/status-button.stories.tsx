import preview from "@/storybook/preview"

import { StatusButton } from "./status-button"

const meta = preview.meta({
  title: "Components/StatusButton",
  component: StatusButton,
  args: {
    status: "TODO",
  },
})

export const Todo = meta.story({
  args: {
    status: "TODO",
  },
})
