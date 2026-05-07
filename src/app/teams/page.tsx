import { PageCard } from "@/components/page-card"
import { PageContent } from "@/components/page-content"
import { PageHeader } from "@/components/page-header"

export default function Page(props: PageProps<"/teams">) {
  return (
    <PageCard>
      <PageHeader>Teams</PageHeader>
      <PageContent></PageContent>
    </PageCard>
  )
}
