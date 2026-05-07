import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"

export type PillSentiment =
  | "neutral"
  | "positive"
  | "warning"
  | "negative"
  | "info"

interface Props {
  sentiment?: PillSentiment
  icon?: ReactNode
  children?: ReactNode
  showIcon?: boolean
  showLabel?: boolean
}

const PillRoot = styled("div", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    borderRadius: "full",
    paddingInline: "4",
    paddingBlock: "2",
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
  },
  defaultVariants: {
    sentiment: "neutral",
  },
})

const PillLabel = styled("span", {
  base: {
    textStyle: "body.sm",
    lineHeight: "[1]",
    whiteSpace: "nowrap",
  },
})

export function Pill({ sentiment = "neutral", icon, children }: Props) {
  return (
    <PillRoot sentiment={sentiment}>
      {icon && <span>{icon}</span>}
      {children && <PillLabel>{children}</PillLabel>}
    </PillRoot>
  )
}
