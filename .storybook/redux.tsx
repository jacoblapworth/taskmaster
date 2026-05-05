import { Provider } from "react-redux"
import type { DecoratorFunction } from "storybook/internal/types"

import { mockStore } from "@/redux/store.mock"

export function withReduxProvider(): DecoratorFunction {
  return (Story) => (
    <Provider store={mockStore}>
      <Story />
    </Provider>
  )
}
