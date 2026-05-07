import { defineSemanticTokens } from "@pandacss/dev"

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      DEFAULT: {
        value: "{colors.background.primary}",
      },
      primary: {
        value: {
          base: "{colors.zinc.50}",
          _dark: "{colors.zinc.900}",
        },
      },
      secondary: {
        value: {
          base: "{colors.white}",
          _dark: "{colors.zinc.950}",
        },
      },
      overlay: {
        value: {
          base: "oklch(0% 0 0 / 0.5)",
          _dark: "oklch(0% 0 0 / 0.5)",
        },
      },
    },
    surface: {
      DEFAULT: {
        value: "{colors.surface.primary}",
      },
      primary: {
        DEFAULT: {
          value: {
            base: "{colors.zinc.950}",
            _dark: "{colors.white}",
          },
        },
        hover: {
          value: {
            base: "{colors.zinc.950}",
            _dark: "{colors.zinc.200}",
          },
        },
      },
      secondary: {
        DEFAULT: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.zinc.800}",
          },
        },
        active: {
          value: {
            base: "{colors.zinc.200}",
            _dark: "{colors.zinc.800}",
          },
        },
        hover: {
          value: {
            base: "{colors.zinc.100}",
            _dark: "{colors.zinc.800}",
          },
        },
      },
      tertiary: {
        DEFAULT: {
          value: {
            base: "{colors.zinc.100}",
            _dark: "{colors.zinc.950}",
          },
        },
        active: {
          value: {
            base: "{colors.zinc.200}",
            _dark: "{colors.zinc.800}",
          },
        },
        hover: {
          value: {
            base: "{colors.zinc.100}",
            _dark: "{colors.zinc.800}",
          },
        },
      },
      quaternary: {
        value: {
          base: "{colors.zinc.200}",
          _dark: "{colors.zinc.950}",
        },
      },
      positive: {
        value: {
          base: "{colors.emerald.100}",
          _dark: "{colors.emerald.950}",
        },
      },
      negative: {
        value: {
          base: "{colors.red.100}",
          _dark: "{colors.red.950}",
        },
      },
      warning: {
        value: {
          base: "{colors.amber.100}",
          _dark: "{colors.amber.950}",
        },
      },
      info: {
        value: {
          base: "{colors.violet.100}",
          _dark: "{colors.violet.950}",
        },
      },
    },
    text: {
      DEFAULT: {
        value: "{colors.text.primary}",
      },
      primary: {
        value: {
          base: "{colors.zinc.900}",
          _dark: "{colors.zinc.50}",
        },
      },
      secondary: {
        value: {
          base: "{colors.zinc.700}",
          _dark: "{colors.zinc.200}",
        },
      },
      tertiary: {
        value: {
          base: "{colors.zinc.500}",
          _dark: "{colors.zinc.400}",
        },
      },
      inverse: {
        value: {
          base: "{colors.zinc.50}",
          _dark: "{colors.zinc.950}",
        },
      },
      placeholder: {
        value: "{colors.text.tertiary}",
      },
      positive: {
        value: {
          base: "{colors.emerald.600}",
          _dark: "{colors.emerald.500}",
        },
      },
      negative: {
        value: {
          base: "{colors.red.600}",
          _dark: "{colors.red.500}",
        },
      },
      warning: {
        value: {
          base: "{colors.amber.600}",
          _dark: "{colors.amber.500}",
        },
      },
      info: {
        value: {
          base: "{colors.violet.600}",
          _dark: "{colors.violet.500}",
        },
      },
    },
    icon: {
      DEFAULT: {
        value: "{colors.icon.primary}",
      },
      primary: {
        value: {
          base: "{colors.zinc.900}",
          _dark: "{colors.zinc.50}",
        },
      },
      secondary: {
        value: {
          base: "{colors.text.secondary}",
          _dark: "{colors.text.secondary}",
        },
      },
      tertiary: {
        value: {
          base: "{colors.zinc.400}",
          _dark: "{colors.zinc.500}",
        },
      },
      placeholder: {
        value: "{colors.text.tertiary}",
      },
      positive: {
        value: {
          base: "{colors.emerald.600}",
          _dark: "{colors.emerald.500}",
        },
      },
      negative: {
        value: {
          base: "{colors.red.600}",
          _dark: "{colors.red.500}",
        },
      },
      warning: {
        value: {
          base: "{colors.amber.600}",
          _dark: "{colors.amber.500}",
        },
      },
      info: {
        value: {
          base: "{colors.violet.600}",
          _dark: "{colors.violet.500}",
        },
      },
    },
    border: {
      DEFAULT: {
        value: "{colors.border.primary}",
      },
      primary: {
        value: {
          base: "{colors.white}",
          _dark: "{colors.black}",
        },
      },
      secondary: {
        value: {
          base: "{colors.zinc.200}",
          _dark: "{colors.zinc.600}",
        },
      },
      tertiary: {
        value: {
          base: "{colors.zinc.100}",
          _dark: "{colors.zinc.800}",
        },
      },
      positive: {
        value: {
          base: "{colors.emerald.300}",
          _dark: "{colors.emerald.700}",
        },
      },
      negative: {
        value: {
          base: "{colors.red.300}",
          _dark: "{colors.red.700}",
        },
      },
      warning: {
        value: {
          base: "{colors.amber.300}",
          _dark: "{colors.amber.700}",
        },
      },
      info: {
        value: {
          base: "{colors.violet.300}",
          _dark: "{colors.violet.700}",
        },
      },
    },
  },

  borders: {
    primary: {
      value: "{borderWidths.sm} solid {colors.border.primary}",
    },
    secondary: {
      value: "{borderWidths.sm} solid {colors.border.secondary}",
    },
    tertiary: {
      value: "{borderWidths.sm} solid {colors.border.tertiary}",
    },
    positive: {
      value: "{borderWidths.sm} solid {colors.border.positive}",
    },
    negative: {
      value: "{borderWidths.sm} solid {colors.border.negative}",
    },
    warning: {
      value: "{borderWidths.sm} solid {colors.border.warning}",
    },
    info: {
      value: "{borderWidths.sm} solid {colors.border.info}",
    },
  },

  zIndex: {
    dropdown: { value: 200 },
    modal: { value: 400 },
    popover: { value: 600 },
    tooltip: { value: 800 },
  },
})
