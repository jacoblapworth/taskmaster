import { createSelector } from "@reduxjs/toolkit"

import {
  TaskStatuses,
  type OrganisationWithTeams,
  type Task,
  type TaskStatus,
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

export const selectTasksByProjectIdGroupedByStatus = createSelector(
  [selectTasksByProjectId],
  (tasks) => {
    const groupedTasks = createEmptyTaskGroups()

    console.log({ groupedTasks })

    for (const task of tasks) {
      console.log({ task })
      groupedTasks[task.status].push(task)
    }

    for (const status of TaskStatuses) {
      groupedTasks[status].sort(compareTasks)
    }

    return groupedTasks
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
