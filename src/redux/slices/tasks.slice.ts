import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import { TaskStatuses, type Task, type TaskStatus } from "@/models/types"

interface ProjectTasksReorderedPayload {
  projectId: string
  columns: Record<TaskStatus, string[]>
}

export const tasksAdapter = createEntityAdapter<Task>({
  sortComparer: (left, right) => {
    const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    const createdAtComparison = left.createdAt.localeCompare(right.createdAt)

    if (createdAtComparison !== 0) {
      return createdAtComparison
    }

    return left.id.localeCompare(right.id)
  },
})

export const tasks = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    tasksAdded: (state, action: PayloadAction<Task[]>) => {
      tasksAdapter.addMany(state, action.payload)
    },
    taskAdded: (state, action: PayloadAction<Task>) => {
      tasksAdapter.addOne(state, action.payload)
    },
    taskUpdated: (state, action: PayloadAction<Update<Task, string>>) => {
      tasksAdapter.updateOne(state, action.payload)
    },
    projectTasksReordered: (
      state,
      action: PayloadAction<ProjectTasksReorderedPayload>,
    ) => {
      const { columns, projectId } = action.payload
      const timestamp = new Date().toISOString()

      for (const status of TaskStatuses) {
        const orderedTaskIds = columns[status]

        if (!orderedTaskIds) {
          continue
        }

        for (const [index, taskId] of orderedTaskIds.entries()) {
          const task = state.entities[taskId]

          if (!task || task.projectId !== projectId) {
            continue
          }

          task.status = status
          task.order = index
          task.updatedAt = timestamp

          if (status === "DONE") {
            task.completedAt ??= timestamp
          } else {
            task.completedAt = undefined
          }
        }
      }
    },
    taskRemoved: (state, action: PayloadAction<string>) => {
      tasksAdapter.removeOne(state, action.payload)
    },
    tasksRemoved: (state, action: PayloadAction<string[]>) => {
      tasksAdapter.removeMany(state, action.payload)
    },
    tasksCleared: (state) => {
      tasksAdapter.removeAll(state)
    },
  },
})

export const {
  tasksAdded,
  taskAdded,
  taskUpdated,
  projectTasksReordered,
  taskRemoved,
  tasksRemoved,
  tasksCleared,
} = tasks.actions

export const tasksReducer = tasks.reducer
