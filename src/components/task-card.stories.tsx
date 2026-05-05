import preview from "@/storybook/preview"

import { TaskCard } from "./task-card"

const sampleTask = {
  id: "11111111-1111-4111-8111-111111111111",
  projectId: "22222222-2222-4222-8222-222222222222",
  title: "Wire drag-and-drop",
  description: "Allow cards to move between status columns.",
  status: "TODO" as const,
  createdAt: "2026-05-04T09:00:00.000Z",
  updatedAt: "2026-05-04T09:00:00.000Z",
}

const meta = preview.meta({
  title: "Components/TaskCard",
  component: TaskCard,
})

export const Todo = meta.story({
  args: {
    task: sampleTask,
    index: 0,
    column: "TODO",
    sortable: false,
  },
})

export const InProgress = meta.story({
  args: {
    task: {
      ...sampleTask,
      status: "IN_PROGRESS",
    },
    index: 0,
    column: "IN_PROGRESS",
    sortable: false,
  },
})

export const Done = meta.story({
  args: {
    task: {
      ...sampleTask,
      status: "DONE",
      completedAt: "2026-05-04T09:30:00.000Z",
    },
    index: 0,
    column: "DONE",
    sortable: false,
  },
})
