"use client"

import type { ReactNode } from "react"
import { Provider as ReduxProvider } from "react-redux"

import { store } from "@/redux/store"

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
