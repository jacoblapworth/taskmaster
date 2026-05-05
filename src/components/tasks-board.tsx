"use client"

import { move } from "@dnd-kit/helpers"
import { DragDropProvider } from "@dnd-kit/react"
import { useEffect, useMemo, useRef, useState } from "react"

import { TaskStatuses, type Task, type TaskStatus } from "@/models/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  organisationSelectors,
  selectTasksByProjectIdGroupedByStatus,
  taskSelectors,
} from "@/redux/selectors"
import { projectTasksReordered } from "@/redux/slices/tasks.slice"
import { ensureDemoData } from "@/redux/thunks"
import { styled } from "@/styled/jsx"

import { TasksColumn } from "./tasks-column"

const Container = styled("div", {
  base: {
    display: "flex",
    gap: "2",
    backgroundColor: "background.primary",
    border: "tertiary",
    borderRadius: "2xl",
    padding: "2",
  },
})

interface Props {
  projectId?: string
}

function createEmptyTaskGroups(): Record<TaskStatus, Task[]> {
  return {
    TODO: [],
    IN_PROGRESS: [],
    DONE: [],
  }
}

export function TasksBoard({ projectId }: Props) {
  const dispatch = useAppDispatch()
  const organisationTotal = useAppSelector(organisationSelectors.selectTotal)
  const fallbackProjectId = useAppSelector((state) => {
    const firstProjectId = state.projects.ids[0]
    return firstProjectId ? String(firstProjectId) : null
  })
  const resolvedProjectId = projectId ?? fallbackProjectId
  const groupedTasks = useAppSelector((state) =>
    resolvedProjectId
      ? selectTasksByProjectIdGroupedByStatus(state, resolvedProjectId)
      : createEmptyTaskGroups(),
  )
  const tasksById = useAppSelector(taskSelectors.selectEntities)
  const groupedTaskIds = useMemo<Record<TaskStatus, string[]>>(
    () => ({
      TODO: groupedTasks.TODO.map((task) => task.id),
      IN_PROGRESS: groupedTasks.IN_PROGRESS.map((task) => task.id),
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
    if (organisationTotal === 0) {
      dispatch(ensureDemoData())
    }
  }, [dispatch, organisationTotal])

  useEffect(() => {
    if (!draggingRef.current) {
      setItems(groupedTaskIds)
      previousItems.current = groupedTaskIds
    }
  }, [groupedTaskIds])

  useEffect(() => {
    itemsRef.current = items
  }, [items])

  if (!resolvedProjectId) {
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
            projectId: resolvedProjectId,
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
