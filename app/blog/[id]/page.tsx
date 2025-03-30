import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"
import Image from "next/image"

// Mock data for a single blog post
const blogPost = {
  id: 1,
  title: "The Future of AI in Education",
  content: `
    <p>Artificial Intelligence (AI) is rapidly transforming various sectors, and education is no exception. As we move further into the digital age, AI is poised to revolutionize how we learn, teach, and manage educational institutions. This blog post explores the potential impacts and applications of AI in education.</p>

    <h2>Personalized Learning</h2>
    <p>One of the most promising applications of AI in education is personalized learning. AI algorithms can analyze a student's performance, learning style, and pace to create tailored educational experiences. This individualized approach ensures that each student receives the support they need to succeed.</p>

    <h2>Intelligent Tutoring Systems</h2>
    <p>AI-powered tutoring systems can provide students with one-on-one support, answering questions and offering explanations in real-time. These systems can adapt to a student's level of understanding, providing more challenging material as the student progresses.</p>

    <h2>Administrative Tasks</h2>
    <p>AI can streamline administrative tasks in educational institutions, freeing up time for educators to focus on teaching. From grading assignments to managing schedules, AI can handle routine tasks efficiently and accurately.</p>

    <h2>Challenges and Considerations</h2>
    <p>While the potential of AI in education is exciting, it's important to consider the challenges, such as data privacy, the digital divide, and the need for human interaction in the learning process. As we embrace AI in education, we must ensure that it enhances, rather than replaces, the crucial role of teachers and human interaction in learning.</p>

    <h2>Conclusion</h2>
    <p>The future of AI in education is bright and full of possibilities. As technology continues to advance, we can expect to see more innovative applications that enhance learning experiences and outcomes for students worldwide.</p>
  `,
  date: "2025-03-01",
  author: "Ahmed Hassan",
  authorImage: "/placeholder.svg",
  image: "/placeholder.svg",
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <Avatar>
            <AvatarImage src={blogPost.authorImage} alt={blogPost.author} />
            <AvatarFallback>{blogPost.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{blogPost.author}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime={blogPost.date}>{new Date(blogPost.date).toLocaleDateString()}</time>
            </div>
          </div>
        </div>
        <Image
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full mb-8"
        />
        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </article>
    </div>
  )
}

