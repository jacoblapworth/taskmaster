import { useTranslations } from "next-intl"

import { TaskStatuses, type TaskStatus } from "@/models/types"

import {
  Menu,
  MenuButton,
  MenuItemCheck,
  MenuItemRadio,
  MenuProvider,
} from "./menu"
import { Pill } from "./pill"
import { StatusIcon } from "./status-icon"

// const PillButton = styled(MenuButton, {
//   base: {
//     display: "inline-flex",
//     borderRadius: "full",
//     minHeight: "6",
//     paddingInline: "2",
//     alignItems: "center",
//     borderWidth: "sm",
//     borderStyle: "solid",
//     borderColor: "border.secondary",
//     backgroundColor: "surface.secondary",
//     color: "text.primary",
//     textStyle: "body.sm",
//     cursor: "pointer",
//     _hover: {
//       backgroundColor: "surface.tertiary",
//     },
//   },
// })

interface Props {
  status: TaskStatus
  onChange?: (status: TaskStatus) => void
}

export function StatusPillMenu({ status, onChange }: Props) {
  const t = useTranslations("task")

  return (
    <MenuProvider
      defaultValues={{ status }}
      setValues={({ status }) => onChange?.(status)}
    >
      <MenuButton render={<Pill isInteractive />}>
        <StatusIcon status={status} size="sm" />
        {t(`status.${status}`)}
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
