import type { TodoHierarchy } from "@/models/types"

const timestamp = "2026-05-02T09:00:00.000Z"

export const demoHierarchy: TodoHierarchy = {
  organisations: [
    {
      id: "org-product",
      name: "Product Studio",
      description: "Cross-functional product delivery for client work.",
    },
  ],
  teams: [
    {
      id: "team-platform",
      organisationId: "org-product",
      name: "Platform",
    },
    {
      id: "team-design",
      organisationId: "org-product",
      name: "Design Ops",
    },
  ],
  projects: [
    {
      id: "project-taskmaster",
      teamId: "team-platform",
      name: "Taskmaster App",
      description: "Build the initial task hierarchy and state layer.",
    },
    {
      id: "project-system",
      teamId: "team-design",
      name: "Design System Refresh",
      description: "Align reusable UI primitives and tokens.",
    },
  ],
  tasks: [
    {
      id: "task-store",
      projectId: "project-taskmaster",
      title: "Wire the persisted Redux store",
      description: "Connect adapter slices and typed hooks.",
      status: "done",
      assignee: "Ava",
      dueDate: "2026-05-05",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "task-cascade",
      projectId: "project-taskmaster",
      title: "Add shared cascade thunks",
      description: "Keep cross-slice delete orchestration out of reducers.",
      status: "in_progress",
      assignee: "Milo",
      dueDate: "2026-05-07",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: "task-audit",
      projectId: "project-system",
      title: "Audit component states",
      description: "Review interactive states before rollout.",
      status: "todo",
      assignee: "Rin",
      dueDate: "2026-05-10",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  ],
}
