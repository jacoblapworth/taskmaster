import type { TaskStatus } from "@/models/types"
import { styled } from "@/styled/jsx"
import type { StyledVariantProps } from "@/styled/types"

import { CheckmarkCircleFill } from "./icons/checkmark-circle-fill"
import { CircleDotted } from "./icons/circle-dotted"
import { ExclamationMarkTriangleFill } from "./icons/exclamationmark-triangle-fill"
import { PlayCircle } from "./icons/play-circle"

const statusIconMap: Record<TaskStatus, React.FC> = {
  TODO: CircleDotted,
  IN_PROGRESS: PlayCircle,
  BLOCKED: ExclamationMarkTriangleFill,
  DONE: CheckmarkCircleFill,
}

const Container = styled("div", {
  base: {
    "& > svg": {
      width: "[100%]",
      height: "[100%]",
    },
  },
  variants: {
    status: {
      TODO: {
        color: "icon.secondary",
      },
      IN_PROGRESS: {
        color: "icon.info",
      },
      BLOCKED: {
        color: "icon.negative",
      },
      DONE: {
        color: "icon.positive",
      },
    },
    size: {
      sm: {
        width: "[16px]",
        height: "[16px]",
      },
      md: {
        width: "[24px]",
        height: "[24px]",
      },
      lg: {
        width: "[32px]",
        height: "[32px]",
      },
    },
  },
  defaultVariants: {
    size: "md",
    status: "TODO",
  },
})

type Variants = StyledVariantProps<typeof Container>

interface Props extends Variants {
  status: TaskStatus
}

export function StatusIcon({ status }: Props) {
  const Icon = statusIconMap[status]

  return (
    <Container status={status}>
      <Icon />
    </Container>
  )
}
