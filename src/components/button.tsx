import { cva } from "@/styled/css"
import { styled } from "@/styled/jsx"

export const ButtonStyles = cva({
  base: {
    display: "inline-flex",
    borderRadius: "full",
    cursor: "pointer",
    alignItems: "center",
    minHeight: "8",
    paddingInline: "4",
    textStyle: "body.md",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "surface.primary",
        color: "text.inverse",
        _hover: {
          backgroundColor: "surface.primary.hover",
        },
      },
      secondary: {
        backgroundColor: "surface.secondary",
        color: "text.primary",
        _hover: {
          backgroundColor: "surface.secondary.hover",
        },
      },
    },
  },
})

export const Button = styled("button", ButtonStyles)
