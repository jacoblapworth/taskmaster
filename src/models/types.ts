import { z } from "zod"

export const DateTime = z.iso.datetime()

export const TaskStatus = z.enum(["TODO", "IN_PROGRESS", "BLOCKED", "DONE"])
export const TaskStatuses = TaskStatus.options

export const Organisation = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
})

export const Team = z.object({
  id: z.uuid(),
  organisationId: z.uuid(),
  name: z.string(),
})

export function createTeam(data: Omit<z.infer<typeof Team>, "id">) {
  return {
    id: crypto.randomUUID(),
    ...data,
  }
}

export const User = z.object({
  id: z.uuid(),
  teamId: z.uuid(),
  name: z.string(),
  email: z.email(),
})

export function createUser(data: Omit<z.infer<typeof User>, "id">) {
  return {
    id: crypto.randomUUID(),
    ...data,
  }
}

export const Project = z.object({
  id: z.uuid(),
  teamId: z.uuid(),
  name: z.string(),
  description: z.string().optional(),
  dueDate: DateTime.optional(),
})

export function createProject(data: Omit<z.infer<typeof Project>, "id">) {
  return {
    id: crypto.randomUUID(),
    ...data,
  }
}

export const Task = z.object({
  id: z.uuid(),
  projectId: z.uuid(),
  title: z.string(),
  description: z.string().optional(),
  status: TaskStatus,
  assigneeId: z.uuid().optional(),
  dueDate: DateTime.optional(),
  order: z.number().int().nonnegative().optional(),
  createdAt: DateTime,
  updatedAt: DateTime,
  completedAt: DateTime.optional(),
})

export function createTask(
  data: Omit<z.infer<typeof Task>, "id" | "createdAt" | "updatedAt">,
) {
  const timestamp = new Date().toISOString()
  return {
    id: crypto.randomUUID(),
    createdAt: timestamp,
    updatedAt: timestamp,
    ...data,
  }
}

export const TodoHierarchy = z.object({
  organisations: z.array(Organisation),
  teams: z.array(Team),
  users: z.array(User),
  projects: z.array(Project),
  tasks: z.array(Task),
})

export const ProjectWithTasks = Project.extend({
  tasks: z.array(Task),
})

export const TeamWithProjects = Team.extend({
  users: z.array(User),
  projects: z.array(ProjectWithTasks),
})

export const OrganisationWithTeams = Organisation.extend({
  teams: z.array(TeamWithProjects),
})

export type TaskStatus = z.infer<typeof TaskStatus>
export type Organisation = z.infer<typeof Organisation>
export type Team = z.infer<typeof Team>
export type User = z.infer<typeof User>
export type Project = z.infer<typeof Project>
export type Task = z.infer<typeof Task>
export type TodoHierarchy = z.infer<typeof TodoHierarchy>
export type ProjectWithTasks = z.infer<typeof ProjectWithTasks>
export type TeamWithProjects = z.infer<typeof TeamWithProjects>
export type OrganisationWithTeams = z.infer<typeof OrganisationWithTeams>
