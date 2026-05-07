import { PageCard } from "@/components/page-card"
import { PageHeader } from "@/components/page-header"
import { TasksBoard } from "@/components/tasks-board"

export default async function Page(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params

  return (
    <PageCard>
      <PageHeader />
      <TasksBoard projectId={id} />
    </PageCard>
  )
}
