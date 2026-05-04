import preview from "@/storybook/preview"

import { TaskCard } from "./task-card"

const meta = preview.meta({
  title: "Components/TaskCard",
  component: TaskCard,
})

export const Primary = meta.story({
  args: {
    status: "todo",
  },
})
