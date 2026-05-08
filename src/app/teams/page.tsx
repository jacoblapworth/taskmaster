import { Link } from "@/components/link"
import { PageCard } from "@/components/page-card"
import { PageContent } from "@/components/page-content"
import { PageHeader } from "@/components/page-header"

export default function Page(_props: PageProps<"/teams">) {
  return (
    <PageCard>
      <PageHeader>
        Teams
        <Link href="/teams/new">Create team</Link>
      </PageHeader>
      <PageContent></PageContent>
    </PageCard>
  )
}
