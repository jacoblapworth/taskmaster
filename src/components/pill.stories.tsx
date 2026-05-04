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
    label: "label",
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
      <Pill sentiment="neutral" label="label" />
      <Pill sentiment="positive" label="label" />
      <Pill sentiment="info" label="label" />
      <Pill sentiment="warning" label="label" />
      <Pill sentiment="negative" label="label" />
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
    label: "",
  },
})
