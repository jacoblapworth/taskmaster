"use client"

import { useTheme } from "@wrksz/themes/client"
// import { MoonIcon, SunIcon } from "lucide-react"
import { useCallback } from "react"

type ThemeValue = "light" | "dark"

const map = {
  light: {
    // icon: <MoonIcon suppressHydrationWarning />,
    value: "dark",
  },
  dark: {
    // icon: <SunIcon suppressHydrationWarning />,
    value: "light",
  },
} as const

export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { value } = map[(theme as ThemeValue) ?? "dark"]
  const toggle = useCallback(() => {
    setTheme(value)
  }, [setTheme, value])

  return {
    toggle,

    value,
  }
}
