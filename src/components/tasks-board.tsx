"use client"

import { move } from "@dnd-kit/helpers"
import { DragDropProvider } from "@dnd-kit/react"
import { useEffect, useMemo, useRef, useState } from "react"

import { TaskStatuses, type Task, type TaskStatus, type TasksFilter } from "@/models/types"
import { useAppDispatch, useAppSelector, useTasksFilter } from "@/redux/hooks"
import { taskSelectors } from "@/redux/selectors"
import { taskUpdated, projectTasksReordered } from "@/redux/slices/tasks.slice"
import { styled } from "@/styled/jsx"

import { TasksColumn } from "./tasks-column"

const Container = styled("div", {
  base: {
    "--column-min-width": "340px",
    "--column-max-width": "400px",
    display: "grid",
    gap: "2",
    gridAutoFlow: "column",
    gridAutoColumns:
      "[minmax(var(--column-min-width), var(--column-max-width))]",
    backgroundColor: "background.primary",
    border: "tertiary",
    borderRadius: "2xl",
    padding: "2",
    overflow: "auto",
    overscrollBehavior: "contain",
    flexGrow: 1,
    scrollbarColor: "[{colors.surface.secondary} transparent]",
    scrollSnapType: "[x mandatory]",
    scrollPadding: "2",
  },
})

interface Props {
  filter: TasksFilter
}

export function TasksBoard({ filter }: Props) {
  const dispatch = useAppDispatch()

  const groupedTasks = useTasksFilter(filter)
  const tasksById = useAppSelector(taskSelectors.selectEntities)

  const isSingleProject = !!filter.projectId

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

  return (
    <Container>
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

          if (isSingleProject) {
            dispatch(
              projectTasksReordered({
                projectId: filter.projectId!,
                columns: itemsRef.current,
              }),
            )
          } else {
            const timestamp = new Date().toISOString()
            const prevStatusMap: Record<string, TaskStatus> = {}
            for (const status of TaskStatuses) {
              for (const taskId of previousItems.current[status]) {
                prevStatusMap[taskId] = status
              }
            }
            for (const status of TaskStatuses) {
              for (const taskId of itemsRef.current[status]) {
                if (prevStatusMap[taskId] !== undefined && prevStatusMap[taskId] !== status) {
                  const task = tasksById[taskId]
                  if (task) {
                    dispatch(
                      taskUpdated({
                        id: taskId,
                        changes: {
                          status,
                          updatedAt: timestamp,
                          completedAt:
                            status === "DONE"
                              ? (task.completedAt ?? timestamp)
                              : undefined,
                        },
                      }),
                    )
                  }
                }
              }
            }
          }
        }}
      >
        {TaskStatuses.map((status) => {
          const tasks = items[status]
            .map((taskId) => tasksById[taskId])
            .filter((task): task is Task => task !== undefined)

          return (
            <TasksColumn
              key={status}
              status={status}
              tasks={tasks}
              showProject={!isSingleProject}
            />
          )
        })}
      </DragDropProvider>
    </Container>
  )
}
