"use client"

import type { Route } from "next"

import { NavL2 } from "@/components/nav-l2"
import { NavL2Item } from "@/components/nav-l2-item"
import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"

export default function Layout({ children }: LayoutProps<"/projects">) {
  const projects = useAppSelector(projectSelectors.selectAll)
  return (
    <>
      <NavL2>
        {projects.map(({ id, name }) => (
          <NavL2Item key={id} href={`/projects/${id}` as Route}>
            {name}
          </NavL2Item>
        ))}
      </NavL2>
      {children}
    </>
  )
}
