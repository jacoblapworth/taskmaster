import { NavL2 } from "@/components/nav-l2"

export default function Layout({ children }: LayoutProps<"/projects">) {
  return (
    <>
      <NavL2></NavL2>
      {children}
    </>
  )
}
