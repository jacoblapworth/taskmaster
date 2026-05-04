import preview from "@/storybook/preview"

import { TaskCard } from "./task-card"

const meta = preview.meta({
  title: "Components/TaskCard",
  component: TaskCard,
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

export const Done = meta.story({
  args: {
    status: "DONE",
  },
})
