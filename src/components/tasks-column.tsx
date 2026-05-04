import type { ReactNode } from "react"

import type { TaskStatus } from "@/models/types"
import { styled } from "@/styled/jsx"

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
    backgroundColor: "background.secondary",
    padding: "2",
    borderRadius: "2xl",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
  },
})

const Column = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
})

interface Props {
  status?: TaskStatus
  count?: number
  children: ReactNode
}

export function TasksColumn({ children, count = 0, status = "TODO" }: Props) {
  return (
    <Container>
      <Header>
        {status} ({count})
      </Header>
      <Column>{children}</Column>
    </Container>
  )
}
