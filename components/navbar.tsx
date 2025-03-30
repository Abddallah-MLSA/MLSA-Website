"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function Navbar() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render the logo until client-side
  const logoSrc = mounted
    ? resolvedTheme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20mode-l8Z34oSDOppM72FCf6lVdRtwNHRVda.png"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light%20mode-05YmNthXDCSewvqNuDpfMqtQ2FNxfi.png"
    : null

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container md:px-2 lg:px-[2rem] flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2" aria-label="MLSA Egypt Clubs Home">
            {mounted && logoSrc ? (
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="MLSA Logo"
                width={40}
                height={40}
                className="h-8 w-8 inline-block"
                priority
              />
            ) : (
              <div className="h-8 w-8 bg-transparent" aria-hidden="true" />
            )}
            <span className="hidden font-bold lg:inline-block">MLSA Egypt Clubs</span>
            <span className="hidden font-bold md:inline-block lg:hidden">MLSA</span>
          </Link>
          <nav className="hidden gap-6 md:flex" aria-label="Main Navigation">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">MLSA Egypt</div>
                            <p className="text-sm leading-tight text-white/90">
                              Microsoft Learn Student Ambassadors community in Egypt
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about" title="About Us">
                        Learn more about our mission and vision
                      </ListItem>
                      <ListItem href="/team" title="Our Team">
                        Meet the MLSA Egypt leadership team
                      </ListItem>
                      <ListItem href="/communities" title="University Clubs">
                        Discover our university communities across Egypt
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/events" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Events</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/communities" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Communities</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/communities" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Membership</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>MLSA Egypt Clubs</SheetTitle>
                <SheetDescription>Microsoft Learn Student Ambassadors community in Egypt</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile Navigation">
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
                <Link href="/team" className="hover:underline">
                  Our Team
                </Link>
                <Link href="/communities" className="hover:underline">
                  University Clubs
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                <Link href="/communities" className="hover:underline">
                  Communities
                </Link>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

