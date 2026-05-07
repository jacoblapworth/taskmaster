import NextLink from "next/link"

import { styled } from "@/styled/jsx"

export const NavL1Item = styled(NextLink, {
  base: {
    color: "icon.secondary",
    borderRadius: "full",
    cursor: "pointer",
    width: "[32px]",
    height: "[32px]",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    _hover: {
      backgroundColor: "surface.hover",
    },
  },
  variants: {
    isActive: {
      true: {
        color: "icon.primary",
        backgroundColor: "surface.active",
      },
    },
  },
})
