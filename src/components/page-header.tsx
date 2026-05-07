import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"

const Header = styled("header", {
  base: {
    textStyle: "heading.lg",
    paddingInline: "4",
    paddingBlock: "3",
    borderBlockEnd: "tertiary",
    gridArea: "header",
    display: "grid",
    alignItems: "center",
    gridTemplateAreas: "'content actions'",
    gridTemplateColumns: "1fr auto",
  },
})

interface Props {
  children: ReactNode
}

export function PageHeader({ children }: Props) {
  return <Header>{children}</Header>
}
