import { createSelector } from "@reduxjs/toolkit"

import {
  TaskStatuses,
  type OrganisationWithTeams,
  type Project,
  type Task,
  type TaskStatus,
  type TasksFilter,
} from "@/models/types"
import { organisationsAdapter } from "@/redux/slices/organisations.slice"
import { projectsAdapter } from "@/redux/slices/projects.slice"
import { tasksAdapter } from "@/redux/slices/tasks.slice"
import { teamsAdapter } from "@/redux/slices/teams.slice"
import { usersAdapter } from "@/redux/slices/users.slice"
import type { RootState } from "@/redux/store"

function compareTasks(left: Task, right: Task) {
  const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER
  const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER

  if (leftOrder !== rightOrder) {
    return leftOrder - rightOrder
  }

  const createdAtComparison = left.createdAt.localeCompare(right.createdAt)

  if (createdAtComparison !== 0) {
    return createdAtComparison
  }

  return left.id.localeCompare(right.id)
}

function createEmptyTaskGroups(): Record<TaskStatus, Task[]> {
  return {
    TODO: [],
    IN_PROGRESS: [],
    BLOCKED: [],
    DONE: [],
  }
}

const selectOrganisationsState = (state: RootState) => state.organisations
const selectTeamsState = (state: RootState) => state.teams
const selectUsersState = (state: RootState) => state.users
const selectProjectsState = (state: RootState) => state.projects
const selectTasksState = (state: RootState) => state.tasks

export const organisationSelectors = organisationsAdapter.getSelectors(
  selectOrganisationsState,
)
export const teamSelectors = teamsAdapter.getSelectors(selectTeamsState)
export const userSelectors = usersAdapter.getSelectors(selectUsersState)
export const projectSelectors =
  projectsAdapter.getSelectors(selectProjectsState)
export const taskSelectors = tasksAdapter.getSelectors(selectTasksState)

export const selectTeamsByOrganisationId = createSelector(
  [
    teamSelectors.selectAll,
    (_state: RootState, organisationId: string) => organisationId,
  ],
  (teams, organisationId) =>
    teams.filter((team) => team.organisationId === organisationId),
)

export const selectProjectsByTeamId = createSelector(
  [projectSelectors.selectAll, (_state: RootState, teamId: string) => teamId],
  (projects, teamId) => projects.filter((project) => project.teamId === teamId),
)

export const selectUsersByTeamId = createSelector(
  [userSelectors.selectAll, (_state: RootState, teamId: string) => teamId],
  (users, teamId) => users.filter((user) => user.teamId === teamId),
)

export const selectTasksByProjectId = createSelector(
  [
    taskSelectors.selectAll,
    (_state: RootState, projectId: string) => projectId,
  ],
  (tasks, projectId) => tasks.filter((task) => task.projectId === projectId),
)

export const selectTasksByUserId = createSelector(
  [taskSelectors.selectAll, (_state: RootState, userId: string) => userId],
  (tasks, userId) => tasks.filter((task) => task.assigneeId === userId),
)

function groupTasksByStatus(tasks: Task[]): Record<TaskStatus, Task[]> {
  const groupedTasks = createEmptyTaskGroups()
  for (const task of tasks) {
    groupedTasks[task.status].push(task)
  }
  for (const status of TaskStatuses) {
    groupedTasks[status].sort(compareTasks)
  }
  return groupedTasks
}

export const selectTasksByProjectIdGroupedByStatus = createSelector(
  [selectTasksByProjectId],
  (tasks) => {
    return groupTasksByStatus(tasks)
  },
)

export const selectTasksByFilterGroupedByStatus = createSelector(
  [
    taskSelectors.selectAll,
    (_state: RootState, filter: TasksFilter) => filter.projectId,
    (_state: RootState, filter: TasksFilter) => filter.assigneeId,
  ],
  (tasks, projectId, assigneeId) => {
    const filtered = tasks.filter(
      (task) =>
        (!projectId || task.projectId === projectId) &&
        (!assigneeId || task.assigneeId === assigneeId),
    )
    return groupTasksByStatus(filtered)
  },
)

export const selectOrganisationTree = createSelector(
  [
    organisationSelectors.selectAll,
    teamSelectors.selectAll,
    userSelectors.selectAll,
    projectSelectors.selectAll,
    taskSelectors.selectAll,
  ],
  (organisations, teams, users, projects, tasks): OrganisationWithTeams[] => {
    const tasksByProjectId = new Map<string, typeof tasks>()
    const projectsByTeamId = new Map<string, typeof projects>()
    const usersByTeamId = new Map<string, typeof users>()
    const teamsByOrganisationId = new Map<string, typeof teams>()

    for (const task of tasks) {
      const group = tasksByProjectId.get(task.projectId) ?? []
      group.push(task)
      tasksByProjectId.set(task.projectId, group)
    }

    for (const project of projects) {
      const group = projectsByTeamId.get(project.teamId) ?? []
      group.push(project)
      projectsByTeamId.set(project.teamId, group)
    }

    for (const user of users) {
      const group = usersByTeamId.get(user.teamId) ?? []
      group.push(user)
      usersByTeamId.set(user.teamId, group)
    }

    for (const team of teams) {
      const group = teamsByOrganisationId.get(team.organisationId) ?? []
      group.push(team)
      teamsByOrganisationId.set(team.organisationId, group)
    }

    return organisations.map((organisation) => ({
      ...organisation,
      teams: (teamsByOrganisationId.get(organisation.id) ?? []).map((team) => ({
        ...team,
        users: usersByTeamId.get(team.id) ?? [],
        projects: (projectsByTeamId.get(team.id) ?? []).map((project) => ({
          ...project,
          tasks: tasksByProjectId.get(project.id) ?? [],
        })),
      })),
    }))
  },
)

export const selectHierarchySummary = createSelector(
  [
    organisationSelectors.selectTotal,
    teamSelectors.selectTotal,
    projectSelectors.selectTotal,
    taskSelectors.selectTotal,
  ],
  (organisations, teams, projects, tasks) => ({
    organisations,
    teams,
    projects,
    tasks,
  }),
)

export interface BurndownPoint {
  date: string
  remaining: number
  ideal: number
}

function toDateKey(isoString: string): string {
  return isoString.slice(0, 10)
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

function formatLabel(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00Z`)
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

function computeBurndown(tasks: Task[], project: Project): BurndownPoint[] {
  if (tasks.length === 0) return []

  const startStr = toDateKey(
    tasks.reduce(
      (min, t) => (t.createdAt < min ? t.createdAt : min),
      tasks[0].createdAt,
    ),
  )
  const endStr = project.dueDate
    ? toDateKey(project.dueDate)
    : toDateKey(new Date().toISOString())
  const todayStr = toDateKey(new Date().toISOString())
  const effectiveEnd = endStr > todayStr ? todayStr : endStr

  const points: BurndownPoint[] = []
  const total = tasks.length

  let cursor = startStr
  let day = 0
  const totalDays = Math.max(
    1,
    Math.round(
      (new Date(`${endStr}T00:00:00Z`).getTime() -
        new Date(`${startStr}T00:00:00Z`).getTime()) /
        86_400_000,
    ),
  )

  while (cursor <= effectiveEnd) {
    const created = tasks.filter((t) => toDateKey(t.createdAt) <= cursor).length
    const completed = tasks.filter(
      (t) => t.completedAt && toDateKey(t.completedAt) <= cursor,
    ).length
    const remaining = created - completed
    const ideal = Math.round(total * (1 - day / totalDays))

    points.push({ date: formatLabel(cursor), remaining, ideal })

    cursor = addDays(cursor, 1)
    day++
  }

  return points
}

export const selectBurndownByProjectId = createSelector(
  [
    selectTasksByProjectId,
    (state: RootState, projectId: string) =>
      projectSelectors.selectById(state, projectId),
  ],
  (tasks, project): BurndownPoint[] => {
    if (!project) return []
    return computeBurndown(tasks, project)
  },
)
