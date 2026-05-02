import { defineSemanticTokens, defineTokens } from "@pandacss/dev"

export const tokens = defineTokens({
  colors: {
    white: {
      DEFAULT: { value: "oklch(98.5% 0 0)" },
    },
    black: {
      DEFAULT: { value: "oklch(0% 0 0)" },
    },
    zinc: {
      50: { value: "oklch(98.5% 0 0)" },
      100: { value: "oklch(96.7% 0.001 286.375)" },
      200: { value: "oklch(92% 0.004 286.32)" },
      300: { value: "oklch(87.1% 0.006 286.286)" },
      400: { value: "oklch(70.5% 0.015 286.067)" },
      500: { value: "oklch(55.2% 0.016 285.938)" },
      600: { value: "oklch(44.2% 0.017 285.786)" },
      700: { value: "oklch(37% 0.013 285.805)" },
      800: { value: "oklch(27.4% 0.006 286.033)" },
      900: { value: "oklch(21% 0.006 285.885)" },
      950: { value: "oklch(14.1% 0.005 285.823)" },
    },
    violet: {
      50: { value: "oklch(96.9% 0.016 293.756)" },
      100: { value: "oklch(94.3% 0.029 294.588)" },
      200: { value: "oklch(89.4% 0.057 293.283)" },
      300: { value: "oklch(81.1% 0.111 293.571)" },
      400: { value: "oklch(70.2% 0.183 293.541)" },
      500: { value: "oklch(60.6% 0.25 292.717)" },
      600: { value: "oklch(54.1% 0.281 293.009)" },
      700: { value: "oklch(49.1% 0.27 292.581)" },
      800: { value: "oklch(43.2% 0.232 292.759)" },
      900: { value: "oklch(38% 0.189 293.745)" },
      950: { value: "oklch(28.3% 0.141 291.089)" },
    },
    amber: {
      50: { value: "oklch(98.7% 0.022 95.277)" },
      100: { value: "oklch(96.2% 0.059 95.617)" },
      200: { value: "oklch(92.4% 0.12 95.746)" },
      300: { value: "oklch(87.9% 0.169 91.605)" },
      400: { value: "oklch(82.8% 0.189 84.429)" },
      500: { value: "oklch(76.9% 0.188 70.08)" },
      600: { value: "oklch(66.6% 0.179 58.318)" },
      700: { value: "oklch(55.5% 0.163 48.998)" },
      800: { value: "oklch(47.3% 0.137 46.201)" },
      900: { value: "oklch(41.4% 0.112 45.904)" },
      950: { value: "oklch(27.9% 0.077 45.635)" },
    },
    red: {
      50: { value: "oklch(97.1% 0.013 17.38)" },
      100: { value: "oklch(93.6% 0.032 17.717)" },
      200: { value: "oklch(88.5% 0.062 18.334)" },
      300: { value: "oklch(80.8% 0.114 19.571)" },
      400: { value: "oklch(70.4% 0.191 22.216)" },
      500: { value: "oklch(63.7% 0.237 25.331)" },
      600: { value: "oklch(57.7% 0.245 27.325)" },
      700: { value: "oklch(50.5% 0.213 27.518)" },
      800: { value: "oklch(44.4% 0.177 26.899)" },
      900: { value: "oklch(39.6% 0.141 25.723)" },
      950: { value: "oklch(25.8% 0.092 26.042)" },
    },
    emerald: {
      50: { value: "oklch(97.9% 0.021 166.113)" },
      100: { value: "oklch(95% 0.052 163.051)" },
      200: { value: "oklch(90.5% 0.093 164.15)" },
      300: { value: "oklch(84.5% 0.143 164.978)" },
      400: { value: "oklch(76.5% 0.177 163.223)" },
      500: { value: "oklch(69.6% 0.17 162.48)" },
      600: { value: "oklch(59.6% 0.145 163.225)" },
      700: { value: "oklch(50.8% 0.118 165.612)" },
      800: { value: "oklch(43.2% 0.095 166.913)" },
      900: { value: "oklch(37.8% 0.077 168.94)" },
      950: { value: "oklch(26.2% 0.051 172.552)" },
    },
  },

  radii: {
    xs: { value: "0.125rem" },
    sm: { value: "0.25rem" },
    md: { value: "0.375rem" },
    lg: { value: "0.5rem" },
    xl: { value: "0.75rem" },
    "2xl": { value: "1rem" },
    "3xl": { value: "1.5rem" },
    "4xl": { value: "2rem" },
  },

  borderWidths: {
    sm: { value: "1px" },
  },
})

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      primary: {
        base: { value: "{zinc.50}" },
        _dark: { value: "{zinc.900}" },
      },
      secondary: {
        base: { value: "{white}" },
        _dark: { value: "{zinc.950}" },
      },
      overlay: {
        base: { value: "oklch(0% 0 0 / 0.5)" },
        _dark: { value: "oklch(0% 0 0 / 0.5)" },
      },
    },
    surface: {
      primary: {
        base: { value: "{zinc.950}" },
        _dark: { value: "{white}" },
      },
      secondary: {
        base: { value: "{white}" },
        _dark: { value: "{zinc.800}" },
      },
      tertiary: {
        base: { value: "{zinc.100}" },
        _dark: { value: "{zinc.950}" },
      },
      quaternary: {
        base: { value: "{zinc.200}" },
        _dark: { value: "{zinc.950}" },
      },
      positive: {
        base: { value: "{emerald.100}" },
        _dark: { value: "{emerald.950}" },
      },
      negative: {
        base: { value: "{red.100}" },
        _dark: { value: "{red.950}" },
      },
      warning: {
        base: { value: "{amber.100}" },
        _dark: { value: "{amber.950}" },
      },
      info: {
        base: { value: "{violet.100}" },
        _dark: { value: "{violet.950}" },
      },
    },
    text: {
      primary: {
        base: { value: "{zinc.900}" },
        _dark: { value: "{zinc.50}" },
      },
      secondary: {
        base: { value: "{zinc.700}" },
        _dark: { value: "{zinc.200}" },
      },
      tertiary: {
        base: { value: "{zinc.500}" },
        _dark: { value: "{zinc.400}" },
      },
      placeholder: {
        value: "{text.tertiary}",
      },
      positive: {
        base: { value: "{emerald.600}" },
        _dark: { value: "{emerald.500}" },
      },
      negative: {
        base: { value: "{red.600}" },
        _dark: { value: "{red.500}" },
      },
      warning: {
        base: { value: "{amber.600}" },
        _dark: { value: "{amber.500}" },
      },
      info: {
        base: { value: "{violet.600}" },
        _dark: { value: "{violet.500}" },
      },
    },
    icon: {
      primary: {
        base: { value: "{zinc.900}" },
        _dark: { value: "{zinc.50}" },
      },
      secondary: {
        base: { value: "{zinc.700}" },
        _dark: { value: "{zinc.200}" },
      },
      tertiary: {
        base: { value: "{zinc.400}" },
        _dark: { value: "{zinc.500}" },
      },
      placeholder: {
        value: "{text.tertiary}",
      },
      positive: {
        base: { value: "{emerald.600}" },
        _dark: { value: "{emerald.500}" },
      },
      negative: {
        base: { value: "{red.600}" },
        _dark: { value: "{red.500}" },
      },
      warning: {
        base: { value: "{amber.600}" },
        _dark: { value: "{amber.500}" },
      },
      info: {
        base: { value: "{violet.600}" },
        _dark: { value: "{violet.500}" },
      },
    },
    border: {
      primary: {
        base: { value: "{white}" },
        _dark: { value: "{black}" },
      },
      secondary: {
        base: { value: "{zinc.200}" },
        _dark: { value: "{zinc.600}" },
      },
      tertiary: {
        base: { value: "{zinc.100}" },
        _dark: { value: "{zinc.800}" },
      },
      positive: {
        base: { value: "{emerald.300}" },
        _dark: { value: "{emerald.700}" },
      },
      negative: {
        base: { value: "{red.300}" },
        _dark: { value: "{red.700}" },
      },
      warning: {
        base: { value: "{amber.300}" },
        _dark: { value: "{amber.700}" },
      },
      info: {
        base: { value: "{violet.300}" },
        _dark: { value: "{violet.700}" },
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
})
