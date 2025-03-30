import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Cairo University",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "2025-04-01",
    location: "Alexandria University",
  },
  {
    id: 3,
    title: "Tech Talk: Cloud Computing",
    date: "2025-04-20",
    location: "Ain Shams University",
  },
]

export function UpcomingEvents() {
  return (
    <div className="space-y-8">
      {upcomingEvents.map((event) => (
        <div key={event.id} className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">{event.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              {new Date(event.date).toLocaleDateString()}
            </div>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
          <Button variant="outline">View Details</Button>
        </div>
      ))}
    </div>
  )
}

