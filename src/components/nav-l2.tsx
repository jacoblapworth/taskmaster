import type { ReactNode } from "react"

import { styled, VStack } from "@/styled/jsx"

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
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    textStyle: "heading.lg",
    padding: "4",
  },
})

interface Props {
  children?: ReactNode
}

export function NavL2({ children }: Props) {
  return (
    <Container>
      <Header>Projects</Header>
      <VStack alignItems="stretch" gap="1" padding="2">
        {children}
      </VStack>
    </Container>
  )
}
