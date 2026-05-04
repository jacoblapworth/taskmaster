import { ThemeProvider } from "@wrksz/themes/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./index.css"
import { Providers } from "@/app/providers"
import { Body } from "@/components/body"
import { Nav } from "@/components/nav"
import { ReduxProvider } from "@/components/redux-provider"
import { DEFAULT_THEME } from "@/constants"
import { styled } from "@/styled/jsx"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const Container = styled("div", {
  base: {
    justifyContent: "stretch",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column-reverse",
    columnGap: "2",
    padding: "4",
    height: "[100dvh]",
    md: {
      flexDirection: "row",
    },
  },
})

export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Todo app",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Body>
        <ReduxProvider>
          <ThemeProvider
            defaultTheme={DEFAULT_THEME}
            themes={["light", "dark"]}
            attribute="class"
            storage="cookie"
          >
            <Providers>
              <Container>
                <Nav />
                {children}
              </Container>
            </Providers>
          </ThemeProvider>
        </ReduxProvider>
      </Body>
    </html>
  )
}
