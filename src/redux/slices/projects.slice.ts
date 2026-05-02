import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import type { Project } from "@/models/types"

export const projectsAdapter = createEntityAdapter<Project>({
  sortComparer: (left, right) => left.name.localeCompare(right.name),
})

export const projects = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState(),
  reducers: {
    projectsAdded: (state, action: PayloadAction<Project[]>) => {
      projectsAdapter.addMany(state, action.payload)
    },
    projectAdded: (state, action: PayloadAction<Project>) => {
      projectsAdapter.addOne(state, action.payload)
    },
    projectUpdated: (state, action: PayloadAction<Update<Project, string>>) => {
      projectsAdapter.updateOne(state, action.payload)
    },
    projectRemoved: (state, action: PayloadAction<string>) => {
      projectsAdapter.removeOne(state, action.payload)
    },
    projectsRemoved: (state, action: PayloadAction<string[]>) => {
      projectsAdapter.removeMany(state, action.payload)
    },
    projectsCleared: (state) => {
      projectsAdapter.removeAll(state)
    },
  },
})

export const {
  projectsAdded,
  projectAdded,
  projectUpdated,
  projectRemoved,
  projectsRemoved,
  projectsCleared,
} = projects.actions

export const projectsReducer = projects.reducer
