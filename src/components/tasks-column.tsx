"use client"

import { useDroppable } from "@dnd-kit/react"
import { useTranslations } from "next-intl"

import type { Task, TaskStatus } from "@/models/types"
import { Box, HStack, styled } from "@/styled/jsx"

import { StatusIcon } from "./status-icon"
import { TaskCard } from "./task-card"

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
    backgroundColor: "background.secondary",
    padding: "2",
    borderRadius: "xl",
    scrollSnapAlign: "start",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    paddingInline: "2",
    gap: "3",
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
  const t = useTranslations("task")
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
        <HStack alignItems="center" gap="2">
          <StatusIcon status={status} />
          {t(`status.${status}`)}
        </HStack>
        <Box
          borderRadius="2xl"
          backgroundColor="surface.secondary"
          paddingInline="2"
          color="text.secondary"
        >
          {tasks.length}
        </Box>
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
