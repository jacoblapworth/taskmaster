import type { TodoHierarchy } from "@/models/types"

const timestamp = "2026-05-02T09:00:00.000Z"

const organisationId = "10f8d2b8-3f91-4f27-8b8d-3f4c1a6f2d10"
const platformTeamId = "8a5d7e1a-1f4e-4ac7-9f3d-2d69f6f0e201"
const designOpsTeamId = "f4b16db5-b6f1-41ab-8a86-d0b6e53d2f02"
const taskmasterProjectId = "a6f3d8e9-5f5a-4a80-9079-8c5b8ff4c303"
const designSystemProjectId = "b2f4e6c1-8b59-41f7-b9d0-5a4d9a7c5404"
const storeTaskId = "c9e1a9d2-90df-43d1-81b6-6c4e12f6a505"
const cascadeTaskId = "d0b6f2a7-2b27-4f2e-9d88-b73d9a2e9606"
const auditTaskId = "e7c5a4b1-6d8c-4d95-b9a7-1c3e4f5a8707"

export const demoHierarchy: TodoHierarchy = {
  organisations: [
    {
      id: organisationId,
      name: "Product Studio",
      description: "Cross-functional product delivery for client work.",
    },
  ],
  teams: [
    {
      id: platformTeamId,
      organisationId,
      name: "Platform",
    },
    {
      id: designOpsTeamId,
      organisationId,
      name: "Design Ops",
    },
  ],
  projects: [
    {
      id: taskmasterProjectId,
      teamId: platformTeamId,
      name: "Taskmaster App",
      description: "Build the initial task hierarchy and state layer.",
    },
    {
      id: designSystemProjectId,
      teamId: designOpsTeamId,
      name: "Design System Refresh",
      description: "Align reusable UI primitives and tokens.",
    },
  ],
  tasks: [
    {
      id: storeTaskId,
      projectId: taskmasterProjectId,
      title: "Wire the persisted Redux store",
      description: "Connect adapter slices and typed hooks.",
      status: "done",
      assignee: "Ava",
      dueDate: "2026-05-05",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: cascadeTaskId,
      projectId: taskmasterProjectId,
      title: "Add shared cascade thunks",
      description: "Keep cross-slice delete orchestration out of reducers.",
      status: "in_progress",
      assignee: "Milo",
      dueDate: "2026-05-07",
      createdAt: timestamp,
      updatedAt: timestamp,
    },
    {
      id: auditTaskId,
      projectId: designSystemProjectId,
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
