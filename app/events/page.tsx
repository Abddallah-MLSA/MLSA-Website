import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
  description: "Discover upcoming MLSA Egypt events, workshops, and tech talks happening across Egyptian universities.",
}

// Mock data for events
const events = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Cairo University",
    description: "Learn about the latest advancements in Artificial Intelligence and Machine Learning.",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "2025-04-01",
    location: "Alexandria University",
    description: "A comprehensive bootcamp covering modern web development technologies and practices.",
  },
  {
    id: 3,
    title: "Tech Talk: Cloud Computing",
    date: "2025-04-20",
    location: "Ain Shams University",
    description: "Industry experts discuss the future of cloud computing and its impact on businesses.",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="border rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{event.title}</h2>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
              <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time>
            </div>
            <p className="text-muted-foreground">{event.location}</p>
            <p>{event.description}</p>
            <Button asChild>
              <Link href={`/events/${event.id}`}>
                <span>Learn More</span>
                <span className="sr-only">about {event.title}</span>
              </Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  )
}

