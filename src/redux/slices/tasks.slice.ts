import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import type { Task } from "@/models/types"

export const tasksAdapter = createEntityAdapter<Task>({
  sortComparer: (left, right) => left.createdAt.localeCompare(right.createdAt),
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
  taskRemoved,
  tasksRemoved,
  tasksCleared,
} = tasks.actions

export const tasksReducer = tasks.reducer
