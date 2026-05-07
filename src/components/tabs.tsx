import * as Ariakit from "@ariakit/react"

import { styled } from "@/styled/jsx"

export const TabProvider = Ariakit.TabProvider

export const TabList = styled(Ariakit.TabList, {
  base: {
    display: "flex",
  },
})

export const Tab = styled(Ariakit.Tab, {
  base: {
    display: "flex",
  },
})
