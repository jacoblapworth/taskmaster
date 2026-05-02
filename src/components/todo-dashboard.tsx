"use client"

import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  organisationSelectors,
  selectHierarchySummary,
  selectOrganisationTree,
} from "@/redux/selectors"
import {
  deleteProjectCascade,
  ensureDemoData,
  resetDemoData,
} from "@/redux/thunks"

const statusLabel = {
  todo: "To do",
  in_progress: "In progress",
  done: "Done",
} as const

export function TodoDashboard() {
  const dispatch = useAppDispatch()
  const hierarchy = useAppSelector(selectOrganisationTree)
  const summary = useAppSelector(selectHierarchySummary)
  const firstProjectId = useAppSelector((state) =>
    state.projects.ids.length > 0 ? String(state.projects.ids[0]) : null,
  )
  const organisationTotal = useAppSelector(organisationSelectors.selectTotal)

  useEffect(() => {
    if (organisationTotal === 0) {
      dispatch(ensureDemoData())
    }
  }, [dispatch, organisationTotal])

  return (
    <div className="flex flex-1 bg-stone-100 text-stone-950">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10 lg:px-10">
        <section className="rounded-4xl bg-white p-8 shadow-[0_24px_80px_rgba(28,25,23,0.08)] ring-1 ring-stone-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Redux Toolkit Hierarchy
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                Organisation, team, project, and task state is live.
              </h1>
              <p className="text-base leading-7 text-stone-600 sm:text-lg">
                Each entity is normalized with an RTK entity adapter, while
                shared thunks coordinate cascade deletes across the hierarchy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-950"
                type="button"
                onClick={() => dispatch(resetDemoData())}
              >
                Reset demo data
              </button>
              <button
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-400"
                type="button"
                disabled={firstProjectId === null}
                onClick={() => {
                  if (firstProjectId) {
                    dispatch(deleteProjectCascade(firstProjectId))
                  }
                }}
              >
                Delete first project cascade
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Organisations" value={summary.organisations} />
          <MetricCard label="Teams" value={summary.teams} />
          <MetricCard label="Projects" value={summary.projects} />
          <MetricCard label="Tasks" value={summary.tasks} />
        </section>

        <section className="grid gap-6">
          {hierarchy.map((organisation) => (
            <article
              key={organisation.id}
              className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(28,25,23,0.06)] ring-1 ring-stone-200"
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-stone-200 pb-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
                      {organisation.name}
                    </h2>
                    {organisation.description ? (
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
                        {organisation.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                    {organisation.teams.length} teams
                  </span>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {organisation.teams.map((team) => (
                  <section
                    key={team.id}
                    className="rounded-3xl bg-stone-50 p-5 ring-1 ring-stone-200"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-stone-900">
                        {team.name}
                      </h3>
                      <span className="text-sm text-stone-500">
                        {team.projects.length} projects
                      </span>
                    </div>

                    <div className="grid gap-4">
                      {team.projects.map((project) => (
                        <div
                          key={project.id}
                          className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"
                        >
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                              <h4 className="font-semibold text-stone-950">
                                {project.name}
                              </h4>
                              {project.description ? (
                                <p className="mt-1 text-sm leading-6 text-stone-600">
                                  {project.description}
                                </p>
                              ) : null}
                            </div>
                            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                              {project.tasks.length} tasks
                            </span>
                          </div>

                          <ul className="grid gap-3">
                            {project.tasks.map((task) => (
                              <li
                                key={task.id}
                                className="rounded-2xl border border-stone-200 px-4 py-3"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="font-medium text-stone-900">
                                      {task.title}
                                    </p>
                                    {task.description ? (
                                      <p className="mt-1 text-sm leading-6 text-stone-600">
                                        {task.description}
                                      </p>
                                    ) : null}
                                  </div>
                                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
                                    {statusLabel[task.status]}
                                  </span>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.12em] text-stone-500">
                                  <span>{task.assignee ?? "Unassigned"}</span>
                                  <span>{task.dueDate ?? "No due date"}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

type MetricCardProps = {
  label: string
  value: number
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="rounded-3xl bg-stone-950 p-5 text-stone-50 shadow-[0_18px_40px_rgba(28,25,23,0.18)]">
      <p className="text-sm uppercase tracking-[0.2em] text-stone-300">
        {label}
      </p>
      <p className="mt-3 text-4xl font-semibold tracking-tight">{value}</p>
    </article>
  )
}
