"use client"

import { Heading } from "@ariakit/react"
import { useSortable } from "@dnd-kit/react/sortable"

import type { Task, TaskStatus } from "@/models/types"
import { HStack, styled } from "@/styled/jsx"

import { Card } from "./card"
import { StatusIcon } from "./status-icon"

const Description = styled("p", {
  base: {
    textStyle: "body.sm",
    color: "text.secondary",
  },
})

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
    <Card ref={ref} isDragging={isDragging} isSortable={sortable}>
      <HStack alignItems="start">
        <StatusIcon status={task.status} size="sm" />
        <Heading>{task.title}</Heading>
      </HStack>
    </Card>
  )
}
