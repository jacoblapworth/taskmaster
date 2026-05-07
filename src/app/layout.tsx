import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@wrksz/themes/next"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./index.css"
import { Providers } from "@/app/providers"
import { Body } from "@/components/body"
import { Nav } from "@/components/nav"
import { ReduxProvider } from "@/components/redux-provider"
import { DemoDataHydrator } from "@/components/use-demo-data"
import { DEFAULT_THEME } from "@/constants"

const inter = Inter({
  variable: "--fonts-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--fonts-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Todo app",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} ${inter.variable}`}>
      <Body>
        <ReduxProvider>
          <ThemeProvider
            defaultTheme={DEFAULT_THEME}
            themes={["light", "dark"]}
            attribute="class"
            storage="cookie"
          >
            <Providers>
              <DemoDataHydrator />
              <Nav />
              {children}
            </Providers>
          </ThemeProvider>
        </ReduxProvider>
        <Analytics />
      </Body>
    </html>
  )
}
