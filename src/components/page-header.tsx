import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"

const Header = styled("header", {
  base: {
    textStyle: "heading.lg",
    padding: "4",
    borderBlockEnd: "tertiary",
    marginInline: "-4",
    marginBlockStart: "-4",
    gridArea: "header",
  },
})

interface Props {
  children: ReactNode
}

export function PageHeader({ children }: Props) {
  return <Header>{children}</Header>
}
