import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { teamMembers } from "@/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated individuals who lead and support MLSA Egypt Clubs across universities.",
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Meet the dedicated individuals who lead and support MLSA Egypt Clubs. Our team works tirelessly to create
        opportunities for students across Egypt.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="dark:bg-gray-800 flex flex-col items-center text-center p-6 border rounded-lg"
          >
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="dark:bg-gray-400">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

