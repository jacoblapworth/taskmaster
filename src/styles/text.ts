import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  body: {
    sm: {
      value: {
        fontFamily: "sans",
        fontWeight: "500",
        fontSize: "12px",
      },
    },
    md: {
      value: {
        fontFamily: "sans",
        fontWeight: "500",
        fontSize: "15px",
      },
    },
    lg: {
      value: {
        fontFamily: "sans",
        fontWeight: "500",
        fontSize: "18px",
      },
    },
  },
  heading: {
    sm: {
      value: {
        fontFamily: "sans",
        fontWeight: "700",
        fontSize: "12px",
      },
    },
    md: {
      value: {
        fontFamily: "sans",
        fontWeight: "700",
        fontSize: "15px",
      },
    },
    lg: {
      value: {
        fontFamily: "sans",
        fontWeight: "700",
        fontSize: "18px",
      },
    },
  },
})
