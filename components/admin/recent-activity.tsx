import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    id: 1,
    user: "Ahmed Hassan",
    action: "created a new event",
    target: "AI Workshop",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    user: "Fatima Ali",
    action: "updated club details for",
    target: "Cairo University MLSA Club",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    user: "Mohamed Salah",
    action: "added a new sponsor",
    target: "Tech Innovations Inc.",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    user: "Nour Ibrahim",
    action: "published a blog post",
    target: "The Future of AI in Education",
    timestamp: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${activity.id}.png`} alt={activity.user} />
            <AvatarFallback>
              {activity.user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user} {activity.action} <span className="text-muted-foreground">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

