"use client"

import { useSortable } from "@dnd-kit/react/sortable"

import type { Task, TaskStatus } from "@/models/types"

import { Card } from "./card"

interface Props {
  task: Task
  index: number
  column: TaskStatus
  sortable?: boolean
}

export function TaskCard({ column, index, sortable = true, task }: Props) {
  const { isDragging, ref } = useSortable({
    id: task.id,
    index,
    type: "item",
    accept: "item",
    group: column,
    disabled: !sortable,
  })

  return (
    <div
      ref={ref}
      style={{
        cursor: sortable ? "grab" : "default",
        opacity: isDragging ? 0.6 : 1,
      }}
    >
      <Card>
        <strong>{task.title}</strong>
        {task.description ? <p>{task.description}</p> : null}
        <small>status: {task.status}</small>
      </Card>
    </div>
  )
}
