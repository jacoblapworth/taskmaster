import { styled } from "@/styled/jsx"

export const PageCard = styled("div", {
  base: {
    flexGrow: 1,
    display: "grid",
    gridTemplateAreas: "'header' 'content'",
    gridTemplateRows: "auto 1fr",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "background.secondary",
    border: "tertiary",
    borderRadius: "3xl",
    padding: "4",
    overflow: "hidden",
    gap: "4",
    "& > *:not(header)": {
      gridArea: "content",
    },
  },
})
