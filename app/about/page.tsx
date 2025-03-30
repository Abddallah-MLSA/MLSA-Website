import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MLSA Egypt Clubs' mission, vision, and what we do to empower students across Egyptian universities with technology skills.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About MLSA Egypt Clubs</h1>
      <div className="space-y-6">
        <section aria-labelledby="mission">
          <h2 id="mission" className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            MLSA Egypt Clubs aim to empower students across Egyptian universities with technology skills, foster
            innovation, and build a strong community of future tech leaders.
          </p>
        </section>
        <section aria-labelledby="vision">
          <h2 id="vision" className="text-2xl font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            To create a network of skilled and passionate student technologists who will drive digital transformation in
            Egypt and beyond.
          </p>
        </section>
        <section aria-labelledby="what-we-do">
          <h2 id="what-we-do" className="text-2xl font-semibold mb-4">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            <li>Organize workshops and training sessions on cutting-edge technologies</li>
            <li>Host hackathons and coding competitions</li>
            <li>Provide mentorship opportunities with industry professionals</li>
            <li>Facilitate networking events with tech companies</li>
            <li>Support student-led projects and initiatives</li>
          </ul>
        </section>
        <div className="mt-8">
          <Button asChild>
            <Link href="/join">
              <span>Join MLSA Egypt Clubs</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

