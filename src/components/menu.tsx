import * as Ariakit from "@ariakit/react"

import { cva } from "@/styled/css"
import { styled } from "@/styled/jsx"

export const MenuProvider = Ariakit.MenuProvider

export const Menu = styled(
  Ariakit.Menu,
  {
    base: {
      position: "relative",
      zIndex: "popover",
      display: "flex",
      maxHeight: "var(--popover-available-height)",
      minWidth: "[180px]",
      flexDirection: "column",
      overflowX: "visible",
      overflowY: "auto",
      overscrollBehavior: "contain",
      borderRadius: "lg",
      borderWidth: "sm",
      borderStyle: "solid",
      borderColor: "border",
      backgroundColor: "background.primary",
      padding: "1",
      color: "text.primary",
      boxShadow: "md",
      outline: "none",
    },
  },
  {
    defaultProps: {
      gutter: 8,
    },
  },
)

export const menuItemStyles = cva({
  base: {
    display: "flex",
    scrollMargin: "2",
    alignItems: "center",
    gap: "2",
    borderRadius: "md",
    padding: "2",
    outline: "none !important",
    cursor: "pointer",

    _hover: {
      backgroundColor: "surface.hover",
    },

    _activeItem: {
      backgroundColor: "surface.active",
    },
  },
  variants: {
    sentiment: {
      negative: {
        color: "text.negative",
      },
    },
  },
})

export const MenuItem = styled(Ariakit.MenuItem, menuItemStyles)
export const MenuItemCheckbox = styled(Ariakit.MenuItemCheckbox, menuItemStyles)
export const MenuItemRadio = styled(Ariakit.MenuItemRadio, menuItemStyles)

export const MenuItemCheck = styled(Ariakit.MenuItemCheck, {
  base: {
    color: "icon.primary",
  },
})

export const MenuButton = styled(Ariakit.MenuButton, {
  base: {
    cursor: "pointer",
  },
})

export const MenuSeparator = styled(Ariakit.MenuSeparator, {
  base: {
    marginBlock: "2",
    color: "border.primary",
  },
})
