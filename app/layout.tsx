import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MLSA Egypt Clubs | Microsoft Learn Student Ambassadors",
    template: "%s | MLSA Egypt Clubs",
  },
  description:
    "Microsoft Learn Student Ambassadors Egypt University Clubs - Empowering students through technology and community",
  keywords: ["MLSA", "Microsoft Learn Student Ambassadors", "Egypt", "Technology", "Student Clubs", "Tech Community"],
  authors: [{ name: "MLSA Egypt" }],
  creator: "MLSA Egypt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mlsaegypt.com",
    title: "MLSA Egypt Clubs",
    description:
      "Microsoft Learn Student Ambassadors Egypt University Clubs - Empowering students through technology and community",
    siteName: "MLSA Egypt Clubs",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLSA Egypt Clubs",
    description:
      "Microsoft Learn Student Ambassadors Egypt University Clubs - Empowering students through technology and community",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'