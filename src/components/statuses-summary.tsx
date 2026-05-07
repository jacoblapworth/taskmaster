import { TaskStatuses, type TaskStatus } from "@/models/types"
import { styled } from "@/styled/jsx"

import { StatusIcon } from "./status-icon"

const Container = styled("div", {
  base: {
    display: "flex",
    gap: "4",
    alignItems: "center",
  },
})

const StatusItem = styled("div", {
  base: {
    display: "flex",
    gap: "1",
    alignItems: "center",
  },
})

const StatusCount = styled("span", {
  base: {
    textStyle: "body.sm",
    color: "text.secondary",
  },
})

interface Props {
  statusCounts: Record<TaskStatus, number>
}

export function StatusesSummary({ statusCounts }: Props) {
  return (
    <Container>
      {TaskStatuses.map((status) => (
        <StatusItem key={status}>
          <StatusIcon status={status} size="sm" />
          <StatusCount>{statusCounts[status]}</StatusCount>
        </StatusItem>
      ))}
    </Container>
  )
}
