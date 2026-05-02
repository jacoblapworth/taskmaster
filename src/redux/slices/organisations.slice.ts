import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import type { Organisation } from "@/models/types"

export const organisationsAdapter = createEntityAdapter<Organisation>({
  sortComparer: (left, right) => left.name.localeCompare(right.name),
})

export const organisations = createSlice({
  name: "organisations",
  initialState: organisationsAdapter.getInitialState(),
  reducers: {
    organisationsAdded: (state, action: PayloadAction<Organisation[]>) => {
      organisationsAdapter.addMany(state, action.payload)
    },
    organisationAdded: (state, action: PayloadAction<Organisation>) => {
      organisationsAdapter.addOne(state, action.payload)
    },
    organisationUpdated: (
      state,
      action: PayloadAction<Update<Organisation, string>>,
    ) => {
      organisationsAdapter.updateOne(state, action.payload)
    },
    organisationRemoved: (state, action: PayloadAction<string>) => {
      organisationsAdapter.removeOne(state, action.payload)
    },
    organisationsRemoved: (state, action: PayloadAction<string[]>) => {
      organisationsAdapter.removeMany(state, action.payload)
    },
    organisationsCleared: (state) => {
      organisationsAdapter.removeAll(state)
    },
  },
})

export const {
  organisationsAdded,
  organisationAdded,
  organisationUpdated,
  organisationRemoved,
  organisationsRemoved,
  organisationsCleared,
} = organisations.actions

export const organisationsReducer = organisations.reducer
