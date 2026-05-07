import NextImage from "next/image"

import { styled } from "@/styled/jsx"
import type { JsxStyleProps, StyledVariantProps } from "@/styled/types"

const Container = styled(
  "div",
  {
    base: {
      borderColor: "border.secondary",
      backgroundColor: "background.secondary",
      borderWidth: "sm",
      borderStyle: "solid",
      overflow: "hidden",
      userSelect: "none",
    },

    variants: {
      shape: {
        circle: {
          borderRadius: "circle",
        },
        square: {
          borderRadius: "md",
        },
      },
      size: {
        sm: {
          width: "[24px]",
          height: "[24px]",
        },
        md: {
          width: "[32px]",
          height: "[32px]",
        },
        lg: {
          width: "[128px]",
          height: "[128px]",
        },
      },
    },
    compoundVariants: [
      { shape: "square", size: "sm", css: { borderRadius: "md" } },
      { shape: "square", size: "md", css: { borderRadius: "lg" } },
      { shape: "square", size: "lg", css: { borderRadius: "xl" } },
    ],
  },
  {
    defaultProps: {
      size: "md",
      shape: "square",
    },
  },
)

const AvatarImage = styled(NextImage, {
  base: {
    objectFit: "cover",
    width: "[100%]",
    height: "[100%]",
  },
})

const AvatarFallback = styled("div", {
  base: {},
})

interface Props extends StyledVariantProps<typeof Container>, JsxStyleProps {
  src?: string
  alt?: string
}

export function Avatar({ src, alt = "", size, shape, ...props }: Props) {
  return (
    <Container size={size} shape={shape} {...props}>
      {src && (
        <AvatarImage src={src} htmlWidth={1024} htmlHeight={1024} alt={alt} />
      )}
      <AvatarFallback></AvatarFallback>
    </Container>
  )
}
