import preview from "@/storybook/preview"

import { Avatar } from "./avatar"

const meta = preview.meta({
  title: "Components/Avatar",
  component: Avatar,
  args: {
    alt: "Profile photo",
  },
})

export const Default = meta.story()

export const WithImage = meta.story({
  args: {
    src: "https://picsum.photos/id/237/256/256",
  },
})

export const Small = meta.story({
  args: {
    size: "sm",
    src: "https://picsum.photos/id/237/256/256",
  },
})

export const Medium = meta.story({
  args: {
    size: "md",
    src: "https://picsum.photos/id/237/256/256",
  },
})

export const Large = meta.story({
  args: {
    size: "lg",
    src: "https://picsum.photos/id/237/256/256",
  },
})

export const Circle = meta.story({
  args: {
    shape: "circle",
    src: "https://picsum.photos/id/237/256/256",
  },
})

export const Square = meta.story({
  args: {
    shape: "square",
    src: "https://picsum.photos/id/237/256/256",
  },
})
