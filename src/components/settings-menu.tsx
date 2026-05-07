import profile from "@/public/profile-jacob.jpeg"

import { Avatar } from "./avatar"
import { Menu, MenuButton, MenuItem, MenuProvider } from "./menu"
import { useThemeToggle } from "./theme-toggle"

export function SettingsMenu() {
  const { toggle, icon } = useThemeToggle()
  return (
    <MenuProvider placement="right">
      <MenuButton _hover={{ opacity: 0.8 }}>
        <Avatar src={profile} size="md" alt="Profile photo" shape="circle" />
      </MenuButton>
      <Menu gutter={12}>
        <MenuItem onClick={toggle}>
          {icon}
          Toggle theme
        </MenuItem>
      </Menu>
    </MenuProvider>
  )
}
