import { useAppSelector } from "@/redux/hooks"
import { projectSelectors } from "@/redux/selectors"

import { Menu, MenuButton, MenuItemRadio, MenuProvider } from "./menu"
import { Pill } from "./pill"

interface Props {
  projectId: string
  onChange: (projectId: string) => void
}

export function ProjectPillMenu({ projectId, onChange }: Props) {
  const projects = useAppSelector((state) => projectSelectors.selectAll(state))
  const project = useAppSelector((state) =>
    projectSelectors.selectById(state, projectId),
  )
  return (
    <MenuProvider defaultValues={{ project: projectId }}>
      <MenuButton render={<Pill />}>
        {project?.name || "Choose project"}
      </MenuButton>
      <Menu>
        {projects.map(({ id, name }) => (
          <MenuItemRadio
            key={id}
            value={id}
            name="project"
            checked={id === projectId}
            onChange={() => onChange(id)}
          >
            {name}
          </MenuItemRadio>
        ))}
      </Menu>
    </MenuProvider>
  )
}
