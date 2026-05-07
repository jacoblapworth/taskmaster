import { styled } from "@/styled/jsx"

export const PageCard = styled("div", {
  base: {
    display: "grid",
    gridTemplateAreas: "'header' 'content'",
    flexDirection: "column",
    flexGrow: 0,
    alignItems: "flex-start",
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
