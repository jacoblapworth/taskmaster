import preview from "@/storybook/preview"

import { Nav } from "./nav"

const meta = preview.meta({
  title: "Components/Nav",
  component: Nav,
  args: {},
})

export const Primary = meta.story({})

export const Tasks = meta.story({
  parameters: {
    nextjs: {
      router: {
        pathname: "/tasks",
      },
    },
  },
})

export const Projects = meta.story({
  parameters: {
    nextjs: {
      router: {
        pathname: "/projects",
      },
    },
  },
})

export const Teams = meta.story({
  parameters: {
    nextjs: {
      router: {
        pathname: "/teams",
      },
    },
  },
})
