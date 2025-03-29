import type React from "react"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixBackground from "@/components/matrix-background"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "GitZen - Coding Tools Platform",
  description: "A platform for coders with various tools and features",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} bg-terminal-dark text-foreground min-h-screen flex flex-col font-mono`}
      >
        <MatrixBackground />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'