"use client"

import { Heading } from "@ariakit/react"
import { useSortable } from "@dnd-kit/react/sortable"
import NextLink from "next/link"

import type { Task, TaskStatus } from "@/models/types"
import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"
import { HStack, VStack, styled } from "@/styled/jsx"

import { Card } from "./card"
import { Pill } from "./pill"
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
  showProject?: boolean
}

export function TaskCard({
  column,
  index,
  showProject,
  sortable = true,
  task,
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
        <StatusIcon status={task.status} size="md" />
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
