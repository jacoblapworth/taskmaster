"use client"

import { useSelectedLayoutSegment } from "next/navigation"

import { Divider, styled } from "@/styled/jsx"

import { CheckmarkCircleFill } from "./icons/checkmark-circle-fill"
import { CircleDottedAndCircle } from "./icons/circle-dotted-and-circle"
import { Clipboard } from "./icons/clipboard"
import { NavL1Item } from "./nav-l1-item"
import { SettingsMenu } from "./settings-menu"

const Container = styled("nav", {
  base: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    alignItems: "flex-start",
    // justifyContent: "space-between",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    backgroundColor: "background.secondary",
    borderRadius: "full",
    padding: "[8px]",
    border: "tertiary",
  },
})

const Ul = styled("ul", {
  base: {
    display: "flex",
    flexDirection: { base: "row", md: "column" },
    gap: "2",
  },
})

const Li = styled("li", {
  base: {
    listStyle: "none",
    padding: "0",
    display: "inline",
    // padding: "1rem",
    height: "[32px]",
  },
})

const navConfig = [
  {
    id: "tasks",
    label: "Tasks",
    href: "/tasks",
    icon: <CheckmarkCircleFill />,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: <Clipboard />,
  },
  {
    id: "teams",
    label: "Teams",
    href: "/teams",
    icon: <CircleDottedAndCircle />,
  },
] as const

export function Nav() {
  const selected = useSelectedLayoutSegment()
  console.log({ selected })
  return (
    <Container>
      <Ul>
        {navConfig.map(({ id, href, icon }) => (
          <Li key={id}>
            <NavL1Item href={href} isActive={selected?.startsWith(id)}>
              {icon}
            </NavL1Item>
          </Li>
        ))}
        <Divider
          orientation={{ base: "horizontal", md: "vertical" }}
          borderColor="border.tertiary"
        />

        <Li>
          <SettingsMenu />
        </Li>
      </Ul>
    </Container>
  )
}
