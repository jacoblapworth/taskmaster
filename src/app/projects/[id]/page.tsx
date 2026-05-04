import { PageCard } from "@/components/page-card"
import { TasksBoard } from "@/components/tasks-board"

export default function Page(props: PageProps<"/projects/[id]">) {
  return (
    <PageCard>
      <TasksBoard />
    </PageCard>
  )
}
