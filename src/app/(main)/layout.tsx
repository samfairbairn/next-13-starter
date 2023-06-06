"use client"

import { Header, Menu } from "@/components"
import { Lenis } from "@studio-freight/react-lenis"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Lenis root>{children}</Lenis>
      <Menu />
    </>
  )
}
