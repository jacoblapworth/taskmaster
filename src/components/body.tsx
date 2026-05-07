import { styled } from "@/styled/jsx"

export const Body = styled("body", {
  base: {
    backgroundColor: "background.primary",
    color: "text.primary",
    overscrollBehavior: "none",
    overflow: "hidden",
    justifyContent: "stretch",
    alignItems: "stretch",
    display: "flex",
    flexDirection: { base: "column-reverse", md: "row" },
    columnGap: "2",
    rowGap: "2",
    padding: { base: "2", md: "4" },
    height: "[100dvh]",
  },
})
