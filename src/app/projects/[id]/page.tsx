import { PageCard } from "@/components/page-card"
import { TasksBoard } from "@/components/tasks-board"

export default async function Page(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params

  return (
    <PageCard>
      <TasksBoard projectId={id} />
    </PageCard>
  )
}
