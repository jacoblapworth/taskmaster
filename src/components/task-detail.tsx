import type { Task } from "@/models/types"
import { VStack } from "@/styled/jsx"

interface Props {
  task: Task
}

export function TaskDetail({ task }: Props) {
  return (
    <VStack>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Assignee ID: {task.assigneeId}</p>
      <p>Due Date: {task.dueDate}</p>
    </VStack>
  )
}
