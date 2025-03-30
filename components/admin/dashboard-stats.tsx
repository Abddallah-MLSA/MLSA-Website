import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, School, Award } from "lucide-react"

const stats = [
  {
    title: "Total Members",
    value: "1,234",
    icon: Users,
  },
  {
    title: "Upcoming Events",
    value: "12",
    icon: Calendar,
  },
  {
    title: "Active Communities",
    value: "7",
    icon: School,
  },
  {
    title: "Certifications Earned",
    value: "523",
    icon: Award,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

