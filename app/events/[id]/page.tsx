import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // In a real app, you would fetch the event data based on the ID
  return {
    title: "AI Workshop",
    description:
      "Join us for an intensive workshop on the latest advancements in Artificial Intelligence and Machine Learning at Cairo University.",
  }
}

// Mock data for a single event
const event = {
  id: "1",
  title: "AI Workshop",
  date: "2025-03-15",
  time: "14:00 - 17:00",
  location: "Cairo University, Faculty of Engineering",
  description:
    "Join us for an intensive workshop on the latest advancements in Artificial Intelligence and Machine Learning. This hands-on session will cover topics such as neural networks, deep learning, and practical applications of AI in various industries.",
  speaker: "Dr. Ahmed Hassan",
  speakerBio: "AI Research Scientist at Tech Innovations Inc.",
  requirements: "Basic understanding of programming concepts. Participants should bring their own laptops.",
}

export default function EventPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex items-center text-muted-foreground mb-6">
          <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
          <time dateTime={event.date}>
            {new Date(event.date).toLocaleDateString()} | {event.time}
          </time>
        </div>
        <div className="flex items-center text-muted-foreground mb-8">
          <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>{event.location}</span>
        </div>
        <div className="prose dark:prose-invert mb-8">
          <section aria-labelledby="about-event">
            <h2 id="about-event" className="text-2xl font-semibold mb-4">
              About the Event
            </h2>
            <p>{event.description}</p>
          </section>
          <section aria-labelledby="speaker">
            <h2 id="speaker" className="text-2xl font-semibold mt-8 mb-4">
              Speaker
            </h2>
            <p>
              <strong>{event.speaker}</strong> - {event.speakerBio}
            </p>
          </section>
          <section aria-labelledby="requirements">
            <h2 id="requirements" className="text-2xl font-semibold mt-8 mb-4">
              Requirements
            </h2>
            <p>{event.requirements}</p>
          </section>
        </div>
        <Button asChild size="lg">
          <Link href={`/events/${params.id}/register`}>
            <span>Register for Event</span>
          </Link>
        </Button>
      </article>
    </div>
  )
}

