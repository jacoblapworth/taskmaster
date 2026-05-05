import preview from "@/storybook/preview"

import { TasksColumn } from "./tasks-column"

const sampleTasks = [
  {
    id: "33333333-3333-4333-8333-333333333331",
    projectId: "44444444-4444-4444-8444-444444444444",
    title: "Add sortable cards",
    status: "TODO" as const,
    order: 0,
    createdAt: "2026-05-04T09:00:00.000Z",
    updatedAt: "2026-05-04T09:00:00.000Z",
  },
  {
    id: "33333333-3333-4333-8333-333333333332",
    projectId: "44444444-4444-4444-8444-444444444444",
    title: "Support empty drop targets",
    status: "TODO" as const,
    order: 1,
    createdAt: "2026-05-04T09:10:00.000Z",
    updatedAt: "2026-05-04T09:10:00.000Z",
  },
]

const meta = preview.meta({
  title: "Components/TasksColumn",
  component: TasksColumn,
})

export const Primary = meta.story({
  args: {
    status: "TODO",
    tasks: sampleTasks,
    droppable: false,
  },
})
