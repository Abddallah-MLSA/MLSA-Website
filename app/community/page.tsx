import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for community members
const communityMembers = [
  { id: 1, name: "Ahmed Hassan", role: "MLSA Lead", university: "Cairo University", avatar: "/placeholder.svg" },
  {
    id: 2,
    name: "Fatima Ali",
    role: "Event Coordinator",
    university: "Alexandria University",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Mohamed Salah",
    role: "Technical Mentor",
    university: "Ain Shams University",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Nour Ibrahim",
    role: "Content Creator",
    university: "Mansoura University",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Omar Farouk",
    role: "Outreach Specialist",
    university: "Assiut University",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Rana Mahmoud",
    role: "Project Manager",
    university: "Zagazig University",
    avatar: "/placeholder.svg",
  },
]

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Community</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Meet the passionate individuals who make up the MLSA Egypt Clubs community. Our members come from various
        universities across Egypt, bringing diverse skills and perspectives to our initiatives.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {communityMembers.map((member) => (
          <div key={member.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

