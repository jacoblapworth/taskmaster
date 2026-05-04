import { styled } from "@/styled/jsx"

export const Button = styled("button", {
  base: {
    display: "inline-flex",
    borderRadius: "full",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "surface.primary",
        color: "text.inverse",
      },
      secondary: {
        backgroundColor: "surface.secondary",
        color: "text.primary",
      },
    },
  },
})
