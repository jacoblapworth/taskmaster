import { createSelector } from "@reduxjs/toolkit"

import type { OrganisationWithTeams } from "@/models/types"
import { organisationsAdapter } from "@/redux/slices/organisations.slice"
import { projectsAdapter } from "@/redux/slices/projects.slice"
import { tasksAdapter } from "@/redux/slices/tasks.slice"
import { teamsAdapter } from "@/redux/slices/teams.slice"
import type { RootState } from "@/redux/store"

const selectOrganisationsState = (state: RootState) => state.organisations
const selectTeamsState = (state: RootState) => state.teams
const selectProjectsState = (state: RootState) => state.projects
const selectTasksState = (state: RootState) => state.tasks

export const organisationSelectors = organisationsAdapter.getSelectors(
  selectOrganisationsState,
)
export const teamSelectors = teamsAdapter.getSelectors(selectTeamsState)
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

export const selectTasksByProjectId = createSelector(
  [
    taskSelectors.selectAll,
    (_state: RootState, projectId: string) => projectId,
  ],
  (tasks, projectId) => tasks.filter((task) => task.projectId === projectId),
)

export const selectOrganisationTree = createSelector(
  [
    organisationSelectors.selectAll,
    teamSelectors.selectAll,
    projectSelectors.selectAll,
    taskSelectors.selectAll,
  ],
  (organisations, teams, projects, tasks): OrganisationWithTeams[] => {
    const tasksByProjectId = new Map<string, typeof tasks>()
    const projectsByTeamId = new Map<string, typeof projects>()
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

    for (const team of teams) {
      const group = teamsByOrganisationId.get(team.organisationId) ?? []
      group.push(team)
      teamsByOrganisationId.set(team.organisationId, group)
    }

    return organisations.map((organisation) => ({
      ...organisation,
      teams: (teamsByOrganisationId.get(organisation.id) ?? []).map((team) => ({
        ...team,
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
