import type { ExtendableTheme } from "@pandacss/types"

import { tokens } from "./primitives"
import { semanticTokens } from "./semantic"
import { textStyles } from "./text"

export const theme: ExtendableTheme = {
  tokens,
  semanticTokens,
  textStyles,
}
