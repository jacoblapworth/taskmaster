"use client"

import { useAppSelector } from "@/redux/hooks"
import {
  selectBurndownByProjectId,
  selectTasksByProjectIdGroupedByStatus,
} from "@/redux/selectors"

import { ProgressCard } from "./progress-card"

interface Props {
  projectId: string
}

export function ProjectProgressCard({ projectId }: Props) {
  const grouped = useAppSelector((state) =>
    selectTasksByProjectIdGroupedByStatus(state, projectId),
  )
  const burndown = useAppSelector((state) =>
    selectBurndownByProjectId(state, projectId),
  )

  const statusCounts = {
    TODO: grouped.TODO.length,
    IN_PROGRESS: grouped.IN_PROGRESS.length,
    BLOCKED: grouped.BLOCKED.length,
    DONE: grouped.DONE.length,
  }

  return <ProgressCard statusCounts={statusCounts} burndown={burndown} />
}
