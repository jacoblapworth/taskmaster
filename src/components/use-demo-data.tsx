"use client"

import { useEffect } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { ensureDemoData } from "@/redux/thunks"

export function useDemoData() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(ensureDemoData())
  }, [dispatch])
}

export function DemoDataHydrator() {
  useDemoData()

  return null
}
