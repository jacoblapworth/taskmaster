"use client"

import { notFound } from "next/navigation"
import { use } from "react"

import { Link } from "@/components/link"
import { PageCard } from "@/components/page-card"
import { PageContent } from "@/components/page-content"
import { PageHeader } from "@/components/page-header"
import { ProjectProgressCard } from "@/components/project-progress-card"
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
      <PageHeader>
        Project {project.name}
        <Link href={`/tasks/new?projectId=${id}`} variant="primary">
          New Task
        </Link>
      </PageHeader>
      <PageContent>
        <ProjectProgressCard projectId={id} />
        <TasksBoard filter={{ projectId: id }} />
      </PageContent>
    </PageCard>
  )
}
