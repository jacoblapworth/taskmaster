import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
  type Update,
} from "@reduxjs/toolkit"

import type { User } from "@/models/types"

export const usersAdapter = createEntityAdapter<User>({
  sortComparer: (left, right) => left.name.localeCompare(right.name),
})

export const users = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    usersAdded: (state, action: PayloadAction<User[]>) => {
      usersAdapter.addMany(state, action.payload)
    },
    userAdded: (state, action: PayloadAction<User>) => {
      usersAdapter.addOne(state, action.payload)
    },
    userUpdated: (state, action: PayloadAction<Update<User, string>>) => {
      usersAdapter.updateOne(state, action.payload)
    },
    userRemoved: (state, action: PayloadAction<string>) => {
      usersAdapter.removeOne(state, action.payload)
    },
    usersRemoved: (state, action: PayloadAction<string[]>) => {
      usersAdapter.removeMany(state, action.payload)
    },
    usersCleared: (state) => {
      usersAdapter.removeAll(state)
    },
  },
})

export const {
  usersAdded,
  userAdded,
  userUpdated,
  userRemoved,
  usersRemoved,
  usersCleared,
} = users.actions

export const usersReducer = users.reducer
