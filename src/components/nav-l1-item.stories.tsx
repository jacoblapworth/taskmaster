import preview from "@/storybook/preview"

import { CheckmarkCircleFill } from "./icons/checkmark-circle-fill"
import { NavL1Item } from "./nav-l1-item"

const meta = preview.meta({
  title: "Components/NavL1Item",
  component: NavL1Item,
  args: {
    href: "#" as any,
    children: <CheckmarkCircleFill />,
  },
})

export const Primary = meta.story({
  args: {},
})
