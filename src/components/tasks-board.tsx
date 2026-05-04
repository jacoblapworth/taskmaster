import type { ReactNode } from "react"

import { styled } from "@/styled/jsx"

import { TaskCard } from "./task-card"
import { TasksColumn } from "./tasks-column"

const Container = styled("div", {
  base: {
    display: "flex",
    gap: "2",
    backgroundColor: "background.primary",
    border: "tertiary",
    borderRadius: "2xl",
    padding: "2",
  },
})

interface Props {
  children?: ReactNode
}

export function TasksBoard({ children }: Props) {
  return (
    <Container>
      <TasksColumn>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </TasksColumn>
      <TasksColumn>
        <TaskCard />
        <TaskCard />
      </TasksColumn>
      <TasksColumn>
        <TaskCard />
        <TaskCard />
      </TasksColumn>
      <TasksColumn>
        <TaskCard />
        <TaskCard />
      </TasksColumn>
      {children}
    </Container>
  )
}
