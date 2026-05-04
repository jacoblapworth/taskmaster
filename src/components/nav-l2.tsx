import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 0,
    minWidth: "[300px]",
    alignItems: "stretch",
    backgroundColor: "background.secondary",
    border: "tertiary",
    borderRadius: "3xl",
    padding: "2",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    textStyle: "heading.md",
    padding: "2",
  },
})

interface Props {
  children?: ReactNode
}

export function NavL2({ children }: Props) {
  return (
    <Container>
      <Header>Projects</Header>
      {children}
    </Container>
  )
}
