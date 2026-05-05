import { Avatar } from "./avatar"
import { Menu, MenuButton, MenuItem, MenuProvider } from "./menu"
import { useThemeToggle } from "./theme-toggle"

export function SettingsMenu() {
  const { toggle, icon } = useThemeToggle()
  return (
    <MenuProvider>
      <MenuButton _hover={{ opacity: 0.8 }}>
        <Avatar
          src={"https://picsum.photos/id/237/256/256"}
          size="md"
          alt="Profile photo"
          shape="circle"
        />
      </MenuButton>
      <Menu gutter={8}>
        <MenuItem onClick={toggle}>
          {icon}
          Toggle theme
        </MenuItem>
      </Menu>
    </MenuProvider>
  )
}
