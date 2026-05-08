"use client"

import { redirect } from "next/navigation"

import { useAppSelector } from "@/redux/hooks"

export default function Page(_props: PageProps<"/projects">) {
  const project = useAppSelector((state) => state.projects.ids[0])
  return redirect(`/projects/${project}`)
}
