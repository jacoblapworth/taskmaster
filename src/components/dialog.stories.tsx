import { useArgs } from "storybook/preview-api"
import { expect, fn, userEvent, within } from "storybook/test"

import preview from "@/storybook/preview"
import { Box } from "@/styled/jsx"

import { Button } from "./button"
import { Dialog as Component } from "./dialog"

const meta = preview.meta({
  title: "Components/Dialog",
  component: Component,
  args: {
    children: <Box padding="4">Dialog</Box>,
    open: false,
    onClose: fn(),
    portal: false,
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs()

    return (
      <>
        <Button onClick={fn(() => updateArgs({ open: true }))}>Open</Button>
        <Component
          {...args}
          open={open}
          onClose={fn(() => updateArgs({ open: false }))}
        />
      </>
    )
  },
})

export const Open = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole("button", { name: /open/i })
    await userEvent.click(button)

    const dialog = await canvas.findByRole("dialog")
    await expect(dialog).toBeVisible()
  },
})
