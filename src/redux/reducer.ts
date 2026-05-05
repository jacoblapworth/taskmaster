import { combineReducers } from "@reduxjs/toolkit"

import { organisations } from "@/redux/slices/organisations.slice"
import { projects } from "@/redux/slices/projects.slice"
import { tasks } from "@/redux/slices/tasks.slice"
import { teams } from "@/redux/slices/teams.slice"
import { users } from "@/redux/slices/users.slice"

export const reducer = combineReducers({
  [organisations.reducerPath]: organisations.reducer,
  [teams.reducerPath]: teams.reducer,
  [users.reducerPath]: users.reducer,
  [projects.reducerPath]: projects.reducer,
  [tasks.reducerPath]: tasks.reducer,
})
