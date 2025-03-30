import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RadialChartStacked } from "@/components/ui/radial-chart-stacked"
import { HeroSection } from "@/components/hero-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "Microsoft Learn Student Ambassadors Egypt University Clubs - Join our community of tech enthusiasts across Egyptian universities.",
}

export default function Home() {
  const metrics = [
    {
      title: "University Communities",
      description: "Total communities across Egypt",
      data: [{ name: "Communities", value: 15 }],
      config: {
        communities: {
          label: "Communities",
          color: "hsl(var(--chart-1))",
        },
      },
      total: 15,
    },
    {
      title: "Microsoft Ambassadors",
      description: "Active ambassadors",
      data: [{ name: "Ambassadors", value: 10 }],
      config: {
        ambassadors: {
          label: "Ambassadors",
          color: "hsl(var(--chart-2))",
        },
      },
      total: 150,
    },
    {
      title: "Students Graduated",
      description: "MLSA program graduates",
      data: [{ name: "Graduates", value: 500 }],
      config: {
        graduates: {
          label: "Graduates",
          color: "hsl(var(--chart-3))",
        },
      },
      total: 500,
    },
    {
      title: "Event Attendees",
      description: "Total event participants",
      data: [{ name: "Attendees", value: 1000 }],
      config: {
        attendees: {
          label: "Attendees",
          color: "hsl(var(--chart-4))",
        },
      },
      total: 1000,
    },
    {
      title: "Volunteers",
      description: "Active MLSA volunteers",
      data: [{ name: "Volunteers", value: 500 }],
      config: {
        volunteers: {
          label: "Volunteers",
          color: "hsl(var(--chart-5))",
        },
      },
      total: 500,
    },
    {
      title: "Events Hosted",
      description: "Total events organized",
      data: [{ name: "Events", value: 200 }],
      config: {
        events: {
          label: "Events",
          color: "hsl(var(--chart-1))",
        },
      },
      total: 200,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Metrics Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" aria-labelledby="impact-heading">
        <div className="container px-4 md:px-6">
          <h2 id="impact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <RadialChartStacked key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="join-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="join-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Join MLSA?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the benefits of being part of the Microsoft Learn Student Ambassadors community
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-bold">Learn</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Access exclusive Microsoft resources and learning paths
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-bold">Connect</h3>
              <p className="text-gray-500 dark:text-gray-400">Network with students and professionals across Egypt</p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-bold">Grow</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Develop leadership and technical skills through hands-on experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        aria-labelledby="explore-heading"
      >
        <div className="container px-4 md:px-6">
          <h2 id="explore-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Explore MLSA Egypt
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/about"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-700"
              aria-labelledby="about-card"
            >
              <h3 id="about-card" className="text-xl font-semibold mb-2">
                About Us
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Learn about our mission and vision</p>
            </Link>
            <Link
              href="/events"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-700"
              aria-labelledby="events-card"
            >
              <h3 id="events-card" className="text-xl font-semibold mb-2">
                Events
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Discover upcoming workshops and meetups</p>
            </Link>
            <Link
              href="/blog"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-700"
              aria-labelledby="blog-card"
            >
              <h3 id="blog-card" className="text-xl font-semibold mb-2">
                Blog
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Read the latest tech insights</p>
            </Link>
            <Link
              href="/contact"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-700"
              aria-labelledby="contact-card"
            >
              <h3 id="contact-card" className="text-xl font-semibold mb-2">
                Contact Us
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary" aria-labelledby="cta-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Join?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your journey with MLSA Egypt Clubs today
              </p>
            </div>
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link href="/join">
                <span>Join Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

