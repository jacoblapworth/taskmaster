import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://picsum.photos/id/**")],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tasks",
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
