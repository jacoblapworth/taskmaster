import NextLink from "next/link"

import { styled } from "@/styled/jsx"

export const NavL2Item = styled(NextLink, {
  base: {
    color: "text.secondary",
    borderRadius: "md",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    _hover: {
      backgroundColor: "background.secondary",
    },
  },
  variants: {
    isActive: {
      true: {
        color: "text.primary",
        backgroundColor: "background.secondary",
      },
    },
  },
})
