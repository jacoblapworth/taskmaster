"use client"

import { Heading } from "@ariakit/react"
import { useSortable } from "@dnd-kit/react/sortable"
import NextLink from "next/link"

import type { Task, TaskStatus } from "@/models/types"
import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"
import { HStack, VStack } from "@/styled/jsx"

import { Card } from "./card"
import { Pill } from "./pill"
import { StatusIconMenu } from "./status-icon-menu"

interface Props {
  task: Task
  index: number
  column: TaskStatus
  sortable?: boolean
  showProject?: boolean
  onStatusChange?: (status: TaskStatus) => void
}

export function TaskCard({
  column,
  index,
  showProject,
  sortable = true,
  task,
  onStatusChange,
}: Props) {
  const { isDragging, ref } = useSortable({
    id: task.id,
    index,
    type: "item",
    accept: "item",
    group: column,
    disabled: !sortable,
  })

  const project = useAppSelector((state) =>
    showProject
      ? projectSelectors.selectById(state, task.projectId)
      : undefined,
  )

  return (
    <Card ref={ref} isDragging={isDragging} isSortable={sortable}>
      <HStack alignItems="start">
        <StatusIconMenu status={task.status} onChange={onStatusChange} />
        <VStack gap="1" alignItems="start">
          <Heading>{task.title}</Heading>
          {project && (
            <NextLink href={`/projects/${project.id}`}>
              <Pill>{project.name}</Pill>
            </NextLink>
          )}
        </VStack>
      </HStack>
    </Card>
  )
}
