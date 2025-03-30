import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MLSA Egypt Clubs</h3>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Empowering students through technology and community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Links</h4>
              <ul className="space-y-2 text-sm" aria-label="Quick links">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="text-muted-foreground hover:text-foreground">
                    University Clubs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm" aria-label="Resources">
                <li>
                  <Link href="/events" className="text-muted-foreground hover:text-foreground">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Social</h4>
              <div className="flex flex-wrap gap-4" aria-label="Social media links">
                <Link
                  href="https://facebook.com"
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MLSA Egypt Clubs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

