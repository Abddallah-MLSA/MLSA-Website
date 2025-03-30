import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for events
const events = [
  { id: 1, title: "AI Workshop", date: "2025-03-15", location: "Cairo University" },
  { id: 2, title: "Web Development Bootcamp", date: "2025-04-01", location: "Alexandria University" },
  { id: 3, title: "Tech Talk: Cloud Computing", date: "2025-04-20", location: "Ain Shams University" },
  { id: 4, title: "Data Science Seminar", date: "2025-05-10", location: "Mansoura University" },
  { id: 5, title: "Hackathon 2025", date: "2025-06-01", location: "Assiut University" },
]

export default function AdminEventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Button asChild>
          <Link href="/admin/events/new">Add New Event</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/events/${event.id}`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

