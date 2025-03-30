import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  )
}

