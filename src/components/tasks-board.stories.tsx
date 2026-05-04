import preview from "@/storybook/preview"

import { TasksBoard } from "./tasks-board"

const meta = preview.meta({
  title: "Components/TasksBoard",
  component: TasksBoard,
})

export const Primary = meta.story({
  args: {},
})
