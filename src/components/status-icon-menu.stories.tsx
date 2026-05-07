import preview from "@/storybook/preview"

import { StatusIconMenu } from "./status-icon-menu"

const meta = preview.meta({
  title: "Components/StatusIconMenu",
  component: StatusIconMenu,
  args: {
    status: "TODO",
  },
})

export const Todo = meta.story({
  args: {
    status: "TODO",
  },
})
