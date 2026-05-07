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

export const SingleProject = meta.story({
  name: "Single project",
  args: {
    filter: { projectId: store.getState().projects.ids[0] as string },
  },
})

export const AllTasks = meta.story({
  name: "All tasks (multi-project)",
  args: {
    filter: {},
  },
})
