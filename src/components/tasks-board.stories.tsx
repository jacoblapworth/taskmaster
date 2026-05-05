import { Provider } from "react-redux"

import { store } from "@/redux/store"
import { ensureDemoData } from "@/redux/thunks"
import preview from "@/storybook/preview"

import { TasksBoard } from "./tasks-board"

store.dispatch(ensureDemoData())

const meta = preview.meta({
  title: "Components/TasksBoard",
  component: TasksBoard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
})

export const Primary = meta.story({
  args: {},
})
