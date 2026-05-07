"use client"

import { useRouter } from "next/navigation"

import { Dialog, DialogDismiss } from "@/components/dialog"
import { Box } from "@/styled/jsx"

export default function Page({ params }: PageProps<"/tasks/new">) {
  const router = useRouter()

  return (
    <Dialog open onClose={() => router.back()} size="md">
      <Box position="absolute" top="0" left="0" padding="2" zIndex="100">
        <DialogDismiss />
      </Box>
    </Dialog>
  )
}
