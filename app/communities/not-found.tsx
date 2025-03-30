import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunityNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Community Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The community you're looking for doesn't exist or hasn't been added to our database yet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/communities">View All Communities</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  )
}

