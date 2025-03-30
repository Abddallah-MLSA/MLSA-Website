import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for clubs
const clubs = [
  { id: 1, name: "Microsoft Student Club  Arab Open University", members: 150, established: "2022" },
  { id: 2, name: "Microsoft Student Club  Mansoura University", members: 120, established: "2023" },
  { id: 3, name: "Microsoft Student Club  Sadat Academy", members: 100, established: "2023" },
  { id: 4, name: "Microsoft Student Club  Egyptian Chinese University", members: 80, established: "2024" },
  { id: 5, name: "Microsoft Student Club  Obour institute", members: 70, established: "2024" },
  { id: 6, name: "Microsoft Student Club  Tanta University ", members: 60, established: "2025" },
  { id: 7, name: "Microsoft Student Club  Zewail City", members: 60, established: "2025" },
]

export default function AdminClubsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Clubs</h1>
        <Button asChild>
          <Link href="/admin/clubs/new">Add New Club</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Established</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clubs.map((club) => (
            <TableRow key={club.id}>
              <TableCell>{club.name}</TableCell>
              <TableCell>{club.members}</TableCell>
              <TableCell>{club.established}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/clubs/${club.id}`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

