"use client"

import { useTheme } from "@wrksz/themes/client"
import {
  Moon,
  Sun,
  // Monitor
} from "lucide-react"
import { useCallback } from "react"

const map = {
  light: {
    icon: <Moon suppressHydrationWarning />,
    value: "dark",
  },
  dark: {
    icon: <Sun suppressHydrationWarning />,
    value: "light",
  },
  // system: {
  //   icon: <Monitor suppressHydrationWarning />,
  //   value: "system",
  // },
} as const

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { value, icon } = map[resolvedTheme ?? "light"]
  const toggle = useCallback(() => {
    setTheme(value)
  }, [setTheme, value])

  return {
    toggle,
    value,
    icon,
  }
}
