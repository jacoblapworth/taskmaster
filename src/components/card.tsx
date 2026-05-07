import { styled } from "@/styled/jsx"

export const Card = styled("div", {
  base: {
    borderRadius: "lg",
    border: "secondary",
    backgroundColor: "surface.secondary",
    padding: "4",
  },
  variants: {
    isSortable: {
      true: {
        cursor: "grab",
      },
    },
    isDragging: {
      true: {
        opacity: 0.6,
      },
    },
  },
})
