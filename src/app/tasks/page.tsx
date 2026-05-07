import { PageCard } from "@/components/page-card"
import { PageHeader } from "@/components/page-header"

export default function Page(props: PageProps<"/tasks">) {
  return (
    <PageCard>
      <PageHeader>Your tasks</PageHeader>
    </PageCard>
  )
}
