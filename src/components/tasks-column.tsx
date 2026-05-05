"use client"

import { useDroppable } from "@dnd-kit/react"

import type { Task, TaskStatus } from "@/models/types"
import { styled } from "@/styled/jsx"

import { TaskCard } from "./task-card"

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
    backgroundColor: "background.secondary",
    padding: "2",
    borderRadius: "xl",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
  },
})

const Column = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
})

interface Props {
  status: TaskStatus
  tasks: Task[]
  droppable?: boolean
}

export function TasksColumn({ droppable = true, status, tasks }: Props) {
  const { isDropTarget, ref } = useDroppable({
    id: status,
    type: "column",
    accept: "item",
    disabled: !droppable,
  })

  return (
    <Container
      ref={ref}
      style={
        isDropTarget
          ? { boxShadow: "inset 0 0 0 1px var(--colors-border-secondary)" }
          : undefined
      }
    >
      <Header>
        {status} ({tasks.length})
      </Header>
      <Column>
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            index={index}
            column={status}
            sortable={droppable}
          />
        ))}
      </Column>
    </Container>
  )
}
