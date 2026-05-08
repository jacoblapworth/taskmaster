import type { TaskStatus } from "@/models/types"

import { Pill } from "./pill"
import { StatusIcon } from "./status-icon"

interface Props {
  status: TaskStatus
}

export function StatusPill({ status }: Props) {
  return (
    <Pill>
      <StatusIcon status={status} size="sm" />
    </Pill>
  )
}
