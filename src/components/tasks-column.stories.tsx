import preview from "@/storybook/preview"

import { TaskCard } from "./task-card"
import { TasksColumn } from "./tasks-column"

const meta = preview.meta({
  title: "Components/TasksColumn",
  component: TasksColumn,
})

export const Primary = meta.story({
  args: {
    children: (
      <>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </>
    ),
  },
})
