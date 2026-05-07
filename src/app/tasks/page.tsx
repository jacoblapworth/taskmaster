import { Link } from "@/components/link"
import { PageCard } from "@/components/page-card"
import { PageHeader } from "@/components/page-header"
import { TasksBoard } from "@/components/tasks-board"

export default function Page(props: PageProps<"/tasks">) {
  return (
    <PageCard>
      <PageHeader>
        Your tasks
        <Link href="/tasks/new" variant="primary">
          New Task
        </Link>
      </PageHeader>
      <TasksBoard />
    </PageCard>
  )
}
