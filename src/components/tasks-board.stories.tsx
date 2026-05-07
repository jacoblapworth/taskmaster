import { Provider } from "react-redux"

import { store } from "@/redux/store"
import preview from "@/storybook/preview"

import { TasksBoard } from "./tasks-board"

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
