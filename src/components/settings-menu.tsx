import { Menu, MenuButton, MenuItem, MenuProvider } from "./menu"
import { useThemeToggle } from "./theme-toggle"

export function SettingsMenu() {
  const { toggle } = useThemeToggle()
  return (
    <MenuProvider>
      <MenuButton _hover={{ opacity: 0.8 }}>
        {/* <Avatar
          src={userImageUrl}
          size="sm"
          alt="Profile photo"
          shape="circle"
        /> */}
      </MenuButton>
      <Menu gutter={8} portal>
        <MenuItem onClick={toggle}>
          {/* {icon} */}
          Toggle theme
        </MenuItem>
      </Menu>
    </MenuProvider>
  )
}
