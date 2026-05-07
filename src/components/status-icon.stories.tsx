import preview from "@/storybook/preview"

import { StatusIcon } from "./status-icon"

const meta = preview.meta({
  title: "Components/StatusIcon",
  component: StatusIcon,
  args: {
    status: "TODO",
  },
})

export const Todo = meta.story({
  args: {
    status: "TODO",
  },
})

export const InProgress = meta.story({
  args: {
    status: "IN_PROGRESS",
  },
})

export const Blocked = meta.story({
  args: {
    status: "BLOCKED",
  },
})

export const Done = meta.story({
  args: {
    status: "DONE",
  },
})
