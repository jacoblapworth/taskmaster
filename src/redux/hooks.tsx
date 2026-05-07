"use client"

import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux"

import type { TasksFilter } from "@/models/types"
import { selectTasksByFilterGroupedByStatus } from "@/redux/selectors"
import type { AppDispatch, RootState } from "@/redux/store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useTasksFilter(filter: TasksFilter) {
  return useAppSelector((state) =>
    selectTasksByFilterGroupedByStatus(state, filter),
  )
}
