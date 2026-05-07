import { Provider } from "react-redux"

import { store } from "@/redux/store"
import preview from "@/storybook/preview"

import { ProgressCard } from "./progress-card"

const sampleBurndown = [
  { date: "Jan 2", remaining: 3, ideal: 11 },
  { date: "Jan 22", remaining: 3, ideal: 9 },
  { date: "Feb 18", remaining: 2, ideal: 7 },
  { date: "Mar 3", remaining: 1, ideal: 5 },
  { date: "Apr 1", remaining: 1, ideal: 3 },
  { date: "May 7", remaining: 7, ideal: 1 },
]

const meta = preview.meta({
  title: "Components/ProgressCard",
  component: ProgressCard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ maxWidth: 535 }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
})

export const Default = meta.story({
  args: {
    statusCounts: {
      TODO: 4,
      IN_PROGRESS: 2,
      BLOCKED: 1,
      DONE: 3,
    },
    burndown: sampleBurndown,
  },
})

export const AllDone = meta.story({
  args: {
    statusCounts: {
      TODO: 0,
      IN_PROGRESS: 0,
      BLOCKED: 0,
      DONE: 10,
    },
    burndown: [
      { date: "Jan 1", remaining: 10, ideal: 10 },
      { date: "Feb 1", remaining: 7, ideal: 7 },
      { date: "Mar 1", remaining: 4, ideal: 4 },
      { date: "Apr 1", remaining: 2, ideal: 2 },
      { date: "May 1", remaining: 0, ideal: 0 },
    ],
  },
})

export const Blocked = meta.story({
  args: {
    statusCounts: {
      TODO: 8,
      IN_PROGRESS: 2,
      BLOCKED: 3,
      DONE: 1,
    },
    burndown: [
      { date: "Jan 1", remaining: 14, ideal: 14 },
      { date: "Feb 1", remaining: 14, ideal: 10 },
      { date: "Mar 1", remaining: 14, ideal: 7 },
      { date: "Apr 1", remaining: 13, ideal: 4 },
      { date: "May 7", remaining: 13, ideal: 1 },
    ],
  },
})

export const Empty = meta.story({
  args: {
    statusCounts: {
      TODO: 0,
      IN_PROGRESS: 0,
      BLOCKED: 0,
      DONE: 0,
    },
    burndown: [],
  },
})
