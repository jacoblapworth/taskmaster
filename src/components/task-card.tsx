import type { TaskStatus } from "@/models/types"

import { Card } from "./card"

interface Props {
  status?: TaskStatus
}

export function TaskCard({ status = "TODO" }: Props) {
  return <Card>status: {status}</Card>
}
