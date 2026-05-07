"use client"

import type { Route } from "next"
import { useSelectedLayoutSegment } from "next/navigation"

import { NavL2 } from "@/components/nav-l2"
import { NavL2Item } from "@/components/nav-l2-item"
import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"

export default function Layout({ children }: LayoutProps<"/projects">) {
  const selected = useSelectedLayoutSegment()
  const projects = useAppSelector(projectSelectors.selectAll)
  return (
    <>
      <NavL2>
        {projects.map(({ id, name }) => (
          <NavL2Item
            key={id}
            href={`/projects/${id}` as Route}
            isActive={selected === id}
          >
            {name}
          </NavL2Item>
        ))}
      </NavL2>
      {children}
    </>
  )
}
