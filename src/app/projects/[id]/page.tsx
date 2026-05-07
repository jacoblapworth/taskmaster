"use client"

import { notFound } from "next/navigation"
import { use } from "react"

import { PageCard } from "@/components/page-card"
import { PageHeader } from "@/components/page-header"
import { TasksBoard } from "@/components/tasks-board"
import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"

export default function Page({ params }: PageProps<"/projects/[id]">) {
  const { id } = use(params)

  const project = useAppSelector((state) =>
    projectSelectors.selectById(state, id),
  )

  if (!project) {
    notFound()
  }

  return (
    <PageCard>
      <PageHeader>Project {project.name}</PageHeader>
      <TasksBoard projectId={id} />
    </PageCard>
  )
}
