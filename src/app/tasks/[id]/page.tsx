import { use } from "react"

import { TaskDetail } from "@/components/task-detail"
import { useAppSelector } from "@/redux/hooks"
import { taskSelectors } from "@/redux/selectors"

export default function Page({ params }: PageProps<"/tasks/[id]">) {
  const { id } = use(params)

  const task = useAppSelector((state) => taskSelectors.selectById(state, id))
  return <TaskDetail task={task} />
}
