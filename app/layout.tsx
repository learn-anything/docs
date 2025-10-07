import "./global.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default:
      "docs.learn-anything.xyz | Make interlinked notes in private (E2E encrypted), share parts of it to global network of topics with deep AI integration",
    template: "%s | docs.learn-anything.xyz",
  },
  description:
    "Make interlinked notes in private (E2E encrypted), share parts of it to global network of topics with deep AI integration",
  metadataBase: new URL("https://docs.learn-anything.xyz"),
  // TODO: not sure if this is applied
  openGraph: {
    title: "docs.learn-anything.xyz",
    description:
      "Make interlinked notes in private (E2E encrypted), share parts of it to global network of topics with deep AI integration",
    url: "https://docs.learn-anything.xyz",
    siteName: "docs.learn-anything.xyz",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "learn-anything",
    "learn-anything.xyz",
    "notes",
    "private",
    "E2E encrypted",
    "global network of topics",
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
