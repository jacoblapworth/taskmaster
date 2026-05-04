import type { ExtendableTheme } from "@pandacss/types"

import { tokens } from "./primitives"
import { semanticTokens } from "./semantic"

export const theme: ExtendableTheme = {
  tokens,
  semanticTokens,
}
