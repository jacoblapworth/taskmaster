import { demoHierarchy } from "@/redux/demo-data"
import {
  organisationSelectors,
  selectProjectsByTeamId,
  selectTasksByProjectId,
  selectTeamsByOrganisationId,
  selectUsersByTeamId,
} from "@/redux/selectors"
import {
  organisationRemoved,
  organisationsAdded,
  organisationsCleared,
} from "@/redux/slices/organisations.slice"
import {
  projectRemoved,
  projectsAdded,
  projectsCleared,
} from "@/redux/slices/projects.slice"
import {
  tasksAdded,
  tasksCleared,
  tasksRemoved,
} from "@/redux/slices/tasks.slice"
import {
  teamRemoved,
  teamsAdded,
  teamsCleared,
} from "@/redux/slices/teams.slice"
import {
  usersAdded,
  usersCleared,
  usersRemoved,
} from "@/redux/slices/users.slice"
import type { AppThunk, RootState } from "@/redux/store"

function hasSeedData(state: RootState) {
  return organisationSelectors.selectTotal(state) > 0
}

export const ensureDemoData = (): AppThunk => (dispatch, getState) => {
  if (hasSeedData(getState())) {
    return
  }

  dispatch(organisationsAdded(demoHierarchy.organisations))
  dispatch(teamsAdded(demoHierarchy.teams))
  dispatch(usersAdded(demoHierarchy.users))
  dispatch(projectsAdded(demoHierarchy.projects))
  dispatch(tasksAdded(demoHierarchy.tasks))
}

export const resetDemoData = (): AppThunk => (dispatch) => {
  dispatch(tasksCleared())
  dispatch(projectsCleared())
  dispatch(usersCleared())
  dispatch(teamsCleared())
  dispatch(organisationsCleared())
  dispatch(ensureDemoData())
}

export const deleteProjectCascade =
  (projectId: string): AppThunk =>
  (dispatch, getState) => {
    const state = getState()
    const taskIds = selectTasksByProjectId(state, projectId).map(
      (task) => task.id,
    )

    if (taskIds.length > 0) {
      dispatch(tasksRemoved(taskIds))
    }

    dispatch(projectRemoved(projectId))
  }

export const deleteTeamCascade =
  (teamId: string): AppThunk =>
  (dispatch, getState) => {
    const state = getState()
    const userIds = selectUsersByTeamId(state, teamId).map((user) => user.id)
    const projectIds = selectProjectsByTeamId(state, teamId).map(
      (project) => project.id,
    )

    if (userIds.length > 0) {
      dispatch(usersRemoved(userIds))
    }

    for (const projectId of projectIds) {
      dispatch(deleteProjectCascade(projectId))
    }

    dispatch(teamRemoved(teamId))
  }

export const deleteOrganisationCascade =
  (organisationId: string): AppThunk =>
  (dispatch, getState) => {
    const state = getState()
    const teamIds = selectTeamsByOrganisationId(state, organisationId).map(
      (team) => team.id,
    )

    for (const teamId of teamIds) {
      dispatch(deleteTeamCascade(teamId))
    }

    dispatch(organisationRemoved(organisationId))
  }
