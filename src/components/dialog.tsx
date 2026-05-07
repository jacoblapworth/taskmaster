import * as Ariakit from "@ariakit/react"
import { XIcon } from "lucide-react"

import { cva } from "@/styled/css"
import { styled } from "@/styled/jsx"

export const DialogBackdrop = styled("div", {
  base: {
    position: "fixed",
    inset: "0",
    zIndex: 100,
    backgroundColor: "background/50",
    opacity: 0,
    transitionProperty: "[opacity, backdrop-filter]",
    transitionTimingFunction: "[cubic-bezier(0.4, 0, 0.2, 1)]",
    transitionDuration: "[150ms]",
    backdropFilter: "[blur(0)]",

    _enter: {
      opacity: 1,
      backdropFilter: "[blur(4px)]",
    },

    _exit: {
      opacity: 1,
      transform: "[scale(1)]",
    },
  },
})

export const dialogStyles = cva({
  base: {
    "--inset": "2rem",
    position: "fixed",
    inset: "var(--inset)",
    zIndex: 800,
    margin: "auto",
    display: "flex",
    // height: "fit-content",
    maxHeight: "[calc(100dvh - var(--inset) * 2)]",
    maxWidth: "[80vw]",
    transformOrigin: "center",
    opacity: 0,
    transitionProperty: "[all]",
    transitionTimingFunction: "[cubic-bezier(0.4, 0, 0.2, 1)]",
    transitionDuration: "[100ms]",
    transform: "scale(0.95)",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    gap: "1",
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: "2xl",
    backgroundColor: "surface.secondary",
    boxShadow: `[
      inset 0 0 0 1px token(colors.border),
      0 25px 30px -10px rgb(0 0 0 / 0.75);
  ]`,

    _enter: {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  variants: {
    size: {
      sm: {
        maxWidth: "[400px]",
      },
      md: {
        maxWidth: "[600px]",
      },
      lg: {
        maxWidth: "[80vw]",
        minHeight: "[80vh]",
        smDown: {
          "--inset": "0",
          width: "full",
          height: "full",
          minWidth: "full",
          // borderRadius: "none",
        },
      },
    },
  },
})

export const Dialog = styled(Ariakit.Dialog, dialogStyles, {
  defaultProps: {
    backdrop: <DialogBackdrop />,
  },
})

export const DialogDismiss = styled(
  Ariakit.DialogDismiss,
  {
    base: {
      cursor: "pointer",
      borderRadius: "full",
      padding: "2",
      backdropFilter: "auto",
      backdropBlur: "sm",
      color: "icon.primary",
      backgroundColor: "background/10",
      _hover: {
        backgroundColor: "background/20",
      },
    },
  },
  {
    defaultProps: {
      "aria-label": "Close",
      children: <XIcon />,
    },
  },
)
