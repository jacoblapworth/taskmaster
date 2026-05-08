import { Link } from "@/components/link"
import { PageCard } from "@/components/page-card"
import { PageContent } from "@/components/page-content"
import { PageHeader } from "@/components/page-header"
import { TasksBoard } from "@/components/tasks-board"

export default function Page(_props: PageProps<"/tasks">) {
  return (
    <PageCard>
      <PageHeader>
        Your tasks
        <Link href="/tasks/new" variant="primary">
          New Task
        </Link>
      </PageHeader>
      <PageContent>
        <TasksBoard />
      </PageContent>
    </PageCard>
  )
}
