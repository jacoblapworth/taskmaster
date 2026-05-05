import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://picsum.photos/id/**")],
  },
}

export default nextConfig
