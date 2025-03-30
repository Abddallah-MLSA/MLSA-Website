import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Education",
    excerpt: "Exploring how artificial intelligence is shaping the future of learning and education.",
    date: "2025-03-01",
    author: "Ahmed Hassan",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Building Inclusive Tech Communities",
    excerpt: "Strategies for creating diverse and welcoming spaces in the tech industry.",
    date: "2025-02-15",
    author: "Fatima Ali",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "The Rise of Cloud Computing in Egypt",
    excerpt: "How cloud technologies are transforming businesses and startups in Egypt.",
    date: "2025-02-01",
    author: "Mohamed Salah",
    image: "/placeholder.svg",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">MLSA Egypt Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="rounded-t-lg object-cover h-48 w-full"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

