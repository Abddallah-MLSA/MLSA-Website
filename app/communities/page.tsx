import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { clubs } from "@/data"

export const metadata: Metadata = {
  title: "University Communities",
  description:
    "Discover MLSA clubs at universities across Egypt. Each community offers unique opportunities for students to learn, grow, and connect with the tech community.",
  keywords: ["MLSA Egypt", "University Clubs", "Student Communities", "Microsoft Learn", "Tech Communities"],
  openGraph: {
    title: "University Communities | MLSA Egypt Clubs",
    description:
      "Discover MLSA clubs at universities across Egypt. Each community offers unique opportunities for students to learn, grow, and connect with the tech community.",
    type: "website",
  },
}

export default function CommunitiesPage() {
  const isOdd = clubs.length % 2 !== 0

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">University Communities</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Discover MLSA clubs at universities across Egypt. Each community offers unique opportunities for students to
        learn, grow, and connect with the tech community.
      </p>
      <div
        className={`grid gap-6 sm:grid-cols-2 3xl:grid-cols-3 justify-items-center ${isOdd ? "sm:last:col-span-2 3xl:last:col-span-1 3xl:last:col-start-2" : ""}`}
      >
        {clubs.map((club, index) => (
          <div
            key={club.id}
            className={`dark:bg-gray-800 border rounded-lg p-6 space-y-4 flex flex-col items-center text-center max-w-sm w-full
              ${isOdd && index === clubs.length - 1 ? "sm:col-span-2 3xl:col-span-1" : ""}`}
          >
            <h2 className="text-2xl font-semibold">Microsoft Student Club</h2>
            <h3 className="text-2xl font-semibold">{club.name}</h3>
            <dl className="flex flex-col gap-2">
              <div>
                <dt className="sr-only">Member count</dt>
                <dd className="text-muted-foreground">Members: {club.members}</dd>
              </div>
              <div>
                <dt className="sr-only">Established year</dt>
                <dd className="text-muted-foreground">Established: {club.established}</dd>
              </div>
            </dl>
            {club.hasDetails && (
              <Button asChild variant="default">
                <Link href={`/communities/${club.id}`}>
                  <span>View Community</span>
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

