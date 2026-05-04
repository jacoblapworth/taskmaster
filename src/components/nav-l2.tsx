import { styled } from "@/styled/jsx"

const Container = styled("div", {
  base: {
    display: "flex",
    flexGrow: 0,
    minWidth: "[300px]",
    alignItems: "flex-start",
    backgroundColor: "background.secondary",
    border: "tertiary",
    borderRadius: "3xl",
    padding: "4",
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
  },
})

export function NavL2() {
  return (
    <Container>
      <Header>Projects</Header>
    </Container>
  )
}
