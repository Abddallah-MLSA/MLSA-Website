"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import React from "react"

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render the image until client-side
  const heroSrc = mounted
    ? resolvedTheme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20mode-l8Z34oSDOppM72FCf6lVdRtwNHRVda.png"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light%20mode-05YmNthXDCSewvqNuDpfMqtQ2FNxfi.png"
    : null

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to MLSA Egypt Clubs
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join the community of Microsoft Learn Student Ambassadors across Egyptian universities. Learn, grow, and
                innovate together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>
                <Link href="/communities" className="flex items-center">
                  <span>Find Your Club</span>
                  <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/events">
                  <span>Upcoming Events</span>
                </Link>
              </Button>
            </div>
          </div>
          {mounted && heroSrc ? (
            <Image
              src={heroSrc || "/placeholder.svg"}
              alt="MLSA Egypt Clubs hero image"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
            />
          ) : (
            <div className="mx-auto aspect-video rounded-xl bg-muted sm:w-full lg:aspect-square" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  )
}

