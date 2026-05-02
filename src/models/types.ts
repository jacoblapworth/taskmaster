import { z } from "zod"

export const TaskStatus = z.enum(["todo", "in_progress", "done"])

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

export const Project = z.object({
  id: z.uuid(),
  teamId: z.uuid(),
  name: z.string(),
  description: z.string().optional(),
})

export const Task = z.object({
  id: z.uuid(),
  projectId: z.uuid(),
  title: z.string(),
  description: z.string().optional(),
  status: TaskStatus,
  assignee: z.string().optional(),
  dueDate: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const TodoHierarchy = z.object({
  organisations: z.array(Organisation),
  teams: z.array(Team),
  projects: z.array(Project),
  tasks: z.array(Task),
})

export const ProjectWithTasks = Project.extend({
  tasks: z.array(Task),
})

export const TeamWithProjects = Team.extend({
  projects: z.array(ProjectWithTasks),
})

export const OrganisationWithTeams = Organisation.extend({
  teams: z.array(TeamWithProjects),
})

export type TaskStatus = z.infer<typeof TaskStatus>
export type Organisation = z.infer<typeof Organisation>
export type Team = z.infer<typeof Team>
export type Project = z.infer<typeof Project>
export type Task = z.infer<typeof Task>
export type TodoHierarchy = z.infer<typeof TodoHierarchy>
export type ProjectWithTasks = z.infer<typeof ProjectWithTasks>
export type TeamWithProjects = z.infer<typeof TeamWithProjects>
export type OrganisationWithTeams = z.infer<typeof OrganisationWithTeams>
