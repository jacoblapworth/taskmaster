import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"
import type { StyledVariantProps } from "@/styled/types"

const PillRoot = styled("div", {
  base: {
    display: "inline-flex",
    textStyle: "body.sm",
    flexDirection: "row",
    alignItems: "center",
    gap: "2",
    borderRadius: "full",
    paddingInline: "2",
    paddingBlock: "1",
    borderWidth: "sm",
    borderStyle: "solid",
  },
  variants: {
    sentiment: {
      neutral: {
        backgroundColor: "surface.secondary",
        borderColor: "border.secondary",
        color: "text.secondary",
      },
      positive: {
        backgroundColor: "surface.positive",
        borderColor: "border.positive",
        color: "text.positive",
      },
      warning: {
        backgroundColor: "surface.warning",
        borderColor: "border.warning",
        color: "text.warning",
      },
      negative: {
        backgroundColor: "surface.negative",
        borderColor: "border.negative",
        color: "text.negative",
      },
      info: {
        backgroundColor: "surface.info",
        borderColor: "border.info",
        color: "text.info",
      },
    },
    isInteractive: {
      true: {
        cursor: "pointer",
        _hover: {
          backgroundColor: "surface.tertiary",
        },
      },
    },
  },
  defaultVariants: {
    sentiment: "neutral",
  },
})

const PillLabel = styled("span", {
  base: {
    lineHeight: "[1]",
    whiteSpace: "nowrap",
  },
})

type Variants = StyledVariantProps<typeof PillRoot>

interface Props extends Variants {
  icon?: ReactNode
  children?: ReactNode
}

export function Pill({
  sentiment = "neutral",
  icon,
  children,
  ...props
}: Props) {
  return (
    <PillRoot sentiment={sentiment} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </PillRoot>
  )
}
