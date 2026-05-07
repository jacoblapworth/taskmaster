import { styled } from "@/styled/jsx"

export const PageContent = styled("div", {
  base: {
    padding: "4",
    gridArea: "content",
    display: "flex",
    flexDirection: "column",
    width: "full",
    gap: "4",
    minWidth: "0",
    alignItems: "stretch",
    flexGrow: 1,
  },
})
