import {
  combineReducers,
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { organisations } from "@/redux/slices/organisations.slice"
import { projects } from "@/redux/slices/projects.slice"
import { tasks } from "@/redux/slices/tasks.slice"
import { teams } from "@/redux/slices/teams.slice"

const rootReducer = combineReducers({
  [organisations.reducerPath]: organisations.reducer,
  [teams.reducerPath]: teams.reducer,
  [projects.reducerPath]: projects.reducer,
  [tasks.reducerPath]: tasks.reducer,
})

const reducer = persistReducer(
  {
    key: "root",
    storage,
    version: 1,
  },
  rootReducer,
)

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
