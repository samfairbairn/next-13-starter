import { SmoothScroller } from "@/components"
import cn from "clsx"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <body>
        <SmoothScroller />
        {children}
      </body>
    </html>
  )
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: {
    template: "%s | My Site",
    default: "My Site",
  },
  description: "Welcome to Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.png" }, new URL("/icon.png", "https://example.com")],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    creator: "@nextjs",
    images: ["https://nextjs.org/og.png"],
  },
  robots: {
    index: process.env.NODE_ENV !== "development",
    follow: process.env.NODE_ENV !== "development",
    googleBot: {
      index: process.env.NODE_ENV !== "development",
      follow: process.env.NODE_ENV !== "development",
    },
  },
}
