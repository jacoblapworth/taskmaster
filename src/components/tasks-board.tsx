"use client"

import { move } from "@dnd-kit/helpers"
import { DragDropProvider } from "@dnd-kit/react"
import { useEffect, useMemo, useRef, useState } from "react"

import { TaskStatuses, type Task, type TaskStatus } from "@/models/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectTasksByProjectIdGroupedByStatus,
  taskSelectors,
} from "@/redux/selectors"
import { projectTasksReordered } from "@/redux/slices/tasks.slice"
import { styled } from "@/styled/jsx"

import { TasksColumn } from "./tasks-column"

const Container = styled("div", {
  base: {
    "--column-width": "340px",
    display: "grid",
    gap: "2",
    gridAutoFlow: "column",
    gridAutoColumns: "[minmax(var(--column-width), 1fr)]",
    backgroundColor: "background.primary",
    border: "tertiary",
    borderRadius: "2xl",
    padding: "2",
    overflow: "auto",
    overscrollBehavior: "contain",
  },
})

interface Props {
  projectId?: string
}

function createEmptyTaskGroups(): Record<TaskStatus, Task[]> {
  return {
    TODO: [],
    IN_PROGRESS: [],
    BLOCKED: [],
    DONE: [],
  }
}

export function TasksBoard({ projectId }: Props) {
  const dispatch = useAppDispatch()

  const groupedTasks = useAppSelector((state) =>
    projectId
      ? selectTasksByProjectIdGroupedByStatus(state, projectId)
      : createEmptyTaskGroups(),
  )
  const tasksById = useAppSelector(taskSelectors.selectEntities)
  const groupedTaskIds = useMemo<Record<TaskStatus, string[]>>(
    () => ({
      TODO: groupedTasks.TODO.map((task) => task.id),
      IN_PROGRESS: groupedTasks.IN_PROGRESS.map((task) => task.id),
      BLOCKED: groupedTasks.BLOCKED.map((task) => task.id),
      DONE: groupedTasks.DONE.map((task) => task.id),
    }),
    [groupedTasks],
  )
  const [items, setItems] =
    useState<Record<TaskStatus, string[]>>(groupedTaskIds)
  const previousItems = useRef(groupedTaskIds)
  const draggingRef = useRef(false)
  const itemsRef = useRef(items)

  useEffect(() => {
    if (!draggingRef.current) {
      setItems(groupedTaskIds)
      previousItems.current = groupedTaskIds
    }
  }, [groupedTaskIds])

  useEffect(() => {
    itemsRef.current = items
  }, [items])

  if (!projectId) {
    return <Container>No project found.</Container>
  }

  return (
    <DragDropProvider
      onDragStart={() => {
        draggingRef.current = true
        previousItems.current = itemsRef.current
      }}
      onDragOver={(event) => {
        const { source } = event.operation

        if (source?.type !== "item") {
          return
        }

        setItems((currentItems) => move(currentItems, event))
      }}
      onDragEnd={(event) => {
        draggingRef.current = false

        if (event.canceled) {
          setItems(previousItems.current)
          return
        }

        dispatch(
          projectTasksReordered({
            projectId: projectId,
            columns: itemsRef.current,
          }),
        )
      }}
    >
      <Container>
        {TaskStatuses.map((status) => {
          const tasks = items[status]
            .map((taskId) => tasksById[taskId])
            .filter((task): task is Task => task !== undefined)

          return <TasksColumn key={status} status={status} tasks={tasks} />
        })}
      </Container>
    </DragDropProvider>
  )
}
