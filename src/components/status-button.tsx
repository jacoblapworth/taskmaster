import { useTranslations } from "next-intl"

import { TaskStatuses, type TaskStatus } from "@/models/types"

import {
  Menu,
  MenuButton,
  MenuItemCheck,
  MenuItemRadio,
  MenuProvider,
} from "./menu"
import { StatusIcon } from "./status-icon"

interface Props {
  status: TaskStatus
}

export function StatusButton({ status }: Props) {
  const t = useTranslations("task")

  return (
    <MenuProvider defaultValues={{ status }}>
      <MenuButton>
        <StatusIcon status={status} />
      </MenuButton>
      <Menu>
        {TaskStatuses.map((status) => (
          <MenuItemRadio key={status} name="status" value={status}>
            <StatusIcon status={status} />
            {t(`status.${status}`)}
            <MenuItemCheck />
          </MenuItemRadio>
        ))}
      </Menu>
    </MenuProvider>
  )
}
