import { TaskStatuses, type TaskStatus } from "@/models/types"

import {
  Menu,
  MenuButton,
  MenuItemCheck,
  MenuItemCheckbox,
  MenuProvider,
} from "./menu"
import { StatusIcon } from "./status-icon"

interface Props {
  status: TaskStatus
}

export function StatusButton({ status }: Props) {
  return (
    <MenuProvider>
      <MenuButton>
        <StatusIcon status={status} />
      </MenuButton>
      <Menu>
        {TaskStatuses.map((status) => (
          <MenuItemCheckbox key={status} name={status}>
            <StatusIcon status={status} />
            {status}
            <MenuItemCheck />
          </MenuItemCheckbox>
        ))}
      </Menu>
    </MenuProvider>
  )
}
