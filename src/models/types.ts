import { z } from "zod"

export const taskStatusSchema = z.enum(["todo", "in_progress", "done"])

export const organisationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
})

export const teamSchema = z.object({
  id: z.string(),
  organisationId: z.string(),
  name: z.string(),
})

export const projectSchema = z.object({
  id: z.string(),
  teamId: z.string(),
  name: z.string(),
  description: z.string().optional(),
})

export const taskSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: taskStatusSchema,
  assignee: z.string().optional(),
  dueDate: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const todoHierarchySchema = z.object({
  organisations: z.array(organisationSchema),
  teams: z.array(teamSchema),
  projects: z.array(projectSchema),
  tasks: z.array(taskSchema),
})

export const projectWithTasksSchema = projectSchema.extend({
  tasks: z.array(taskSchema),
})

export const teamWithProjectsSchema = teamSchema.extend({
  projects: z.array(projectWithTasksSchema),
})

export const organisationWithTeamsSchema = organisationSchema.extend({
  teams: z.array(teamWithProjectsSchema),
})

export type TaskStatus = z.infer<typeof taskStatusSchema>
export type Organisation = z.infer<typeof organisationSchema>
export type Team = z.infer<typeof teamSchema>
export type Project = z.infer<typeof projectSchema>
export type Task = z.infer<typeof taskSchema>
export type TodoHierarchy = z.infer<typeof todoHierarchySchema>
export type ProjectWithTasks = z.infer<typeof projectWithTasksSchema>
export type TeamWithProjects = z.infer<typeof teamWithProjectsSchema>
export type OrganisationWithTeams = z.infer<typeof organisationWithTeamsSchema>
