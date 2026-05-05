import { configureStore } from "@reduxjs/toolkit"

import { reducer } from "./reducer"

export const mockStore = configureStore({
  reducer,
})
