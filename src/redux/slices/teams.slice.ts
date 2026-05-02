import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import type { Team } from "@/models/types"

export const teamsAdapter = createEntityAdapter<Team>({
  sortComparer: (left, right) => left.name.localeCompare(right.name),
})

export const teams = createSlice({
  name: "teams",
  initialState: teamsAdapter.getInitialState(),
  reducers: {
    teamsAdded: (state, action: PayloadAction<Team[]>) => {
      teamsAdapter.addMany(state, action.payload)
    },
    teamAdded: (state, action: PayloadAction<Team>) => {
      teamsAdapter.addOne(state, action.payload)
    },
    teamUpdated: (state, action: PayloadAction<Update<Team, string>>) => {
      teamsAdapter.updateOne(state, action.payload)
    },
    teamRemoved: (state, action: PayloadAction<string>) => {
      teamsAdapter.removeOne(state, action.payload)
    },
    teamsRemoved: (state, action: PayloadAction<string[]>) => {
      teamsAdapter.removeMany(state, action.payload)
    },
    teamsCleared: (state) => {
      teamsAdapter.removeAll(state)
    },
  },
})

export const {
  teamsAdded,
  teamAdded,
  teamUpdated,
  teamRemoved,
  teamsRemoved,
  teamsCleared,
} = teams.actions

export const teamsReducer = teams.reducer
