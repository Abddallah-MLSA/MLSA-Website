import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for sponsors
const sponsors = [
  { id: 1, name: "Tech Innovations Inc.", level: "Platinum", startDate: "2024-01-01", endDate: "2024-12-31" },
  { id: 2, name: "Global Software Solutions", level: "Gold", startDate: "2024-02-01", endDate: "2024-12-31" },
  { id: 3, name: "Future AI Systems", level: "Silver", startDate: "2024-03-01", endDate: "2024-12-31" },
  { id: 4, name: "Cloud Dynamics Ltd.", level: "Bronze", startDate: "2024-04-01", endDate: "2024-12-31" },
  { id: 5, name: "Innovative Networks Co.", level: "Partner", startDate: "2024-05-01", endDate: "2024-12-31" },
]

export default function AdminSponsorsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Sponsors</h1>
        <Button asChild>
          <Link href="/admin/sponsors/new">Add New Sponsor</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsors.map((sponsor) => (
            <TableRow key={sponsor.id}>
              <TableCell>{sponsor.name}</TableCell>
              <TableCell>{sponsor.level}</TableCell>
              <TableCell>{sponsor.startDate}</TableCell>
              <TableCell>{sponsor.endDate}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/sponsors/${sponsor.id}`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

