import { ImageResponse } from "next/og"

import { CheckmarkCircleFill } from "@/components/icons/checkmark-circle-fill"
import { token } from "@/styled/tokens"

const icons = {
  "ico.ico": {
    size: 32,
    contentType: "image/x-icon",
  },
  "96.png": {
    size: 96,
    contentType: "image/png",
  },
  "180.png": {
    size: 180,
    contentType: "image/png",
  },
  "192.png": {
    size: 192,
    contentType: "image/png",
  },
  "512.png": {
    size: 512,
    contentType: "image/png",
  },
  "icon.svg": {
    size: 64,
    contentType: "image/svg+xml",
  },
} as const

export type IconId = keyof typeof icons

export function generateImageMetadata() {
  return Object.entries(icons).map(([id, { size, contentType }]) => ({
    id,
    size: {
      width: size,
      height: size,
    },
    contentType,
  }))
}

export default async function Icon(props: { id: Promise<IconId> }) {
  const id = await props.id
  const { size } = icons[id]

  return new ImageResponse(
    <div
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: token.var("colors.emerald.500"),
      }}
    >
      <CheckmarkCircleFill width={size} height={size} />
    </div>,
    {
      width: size,
      height: size,
      
    },
  )
}
