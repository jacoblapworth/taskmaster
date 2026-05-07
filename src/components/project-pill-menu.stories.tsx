import { fn } from "storybook/test"

import preview from "@/storybook/preview"

import { ProjectPillMenu } from "./project-pill-menu"

const meta = preview.meta({
  title: "Components/ProjectPillMenu",
  component: ProjectPillMenu,
})

export const Default = meta.story({
  args: {
    projectId: "a6f3d8e9-5f5a-4a80-9079-8c5b8ff4c303",
    onChange: fn(),
  },
})
