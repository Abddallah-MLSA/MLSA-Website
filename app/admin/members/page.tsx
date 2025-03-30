import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for members
const members = [
  { id: 1, name: "Ahmed Hassan", email: "ahmed@example.com", university: "Cairo University", joinDate: "2024-01-15" },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima@example.com",
    university: "Alexandria University",
    joinDate: "2024-02-01",
  },
  {
    id: 3,
    name: "Mohamed Salah",
    email: "mohamed@example.com",
    university: "Ain Shams University",
    joinDate: "2024-02-15",
  },
  { id: 4, name: "Nour Ibrahim", email: "nour@example.com", university: "Mansoura University", joinDate: "2024-03-01" },
  { id: 5, name: "Omar Farouk", email: "omar@example.com", university: "Assiut University", joinDate: "2024-03-15" },
]

export default function AdminMembersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Members</h1>
        <Button asChild>
          <Link href="/admin/members/new">Add New Member</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>University</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.university}</TableCell>
              <TableCell>{member.joinDate}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/members/${member.id}`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

