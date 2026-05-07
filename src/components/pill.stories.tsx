import preview from "@/storybook/preview"
import { styled } from "@/styled/jsx"

import { Pill } from "./pill"

const StoryStack = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    justifyContent: "flex-start",
    minWidth: "0",
  },
})

const meta = preview.meta({
  title: "Components/Pill",
  component: Pill,
  args: {
    children: "label",
    sentiment: "neutral",
  },
  argTypes: {
    sentiment: {
      control: "inline-radio",
      options: ["neutral", "positive", "warning", "negative", "info"],
    },
  },
})

export const Primary = meta.story({
  args: {},
})

export const Sentiments = meta.story({
  render: () => (
    <StoryStack>
      <Pill sentiment="neutral">label</Pill>
      <Pill sentiment="positive">label</Pill>
      <Pill sentiment="info">label</Pill>
      <Pill sentiment="warning">label</Pill>
      <Pill sentiment="negative">label</Pill>
    </StoryStack>
  ),
})

export const WithoutIcon = meta.story({
  args: {
    showIcon: false,
  },
})

export const IconOnly = meta.story({
  args: {
    showLabel: false,
    children: "",
  },
})
