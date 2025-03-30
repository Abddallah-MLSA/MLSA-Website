import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadialChartStacked } from "@/components/ui/radial-chart-stacked"
import Link from "next/link"
import { Info, Users, BookOpen, Trophy, Calendar, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import { clubs } from "@/data"
import { notFound } from "next/navigation"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number.parseInt(params.id)
  const club = clubs.find((club) => club.id === id)

  if (!club || !club.hasDetails) {
    return {
      title: "Community Not Found",
      description: "The requested community could not be found.",
    }
  }

  return {
    title: `MSC - ${club.name}`,
    description:
      club.description ||
      `The MLSA club at ${club.name} is part of the Microsoft Learn Student Ambassadors program in Egypt.`,
    keywords: ["MLSA Egypt", club.name, "Student Club", "Microsoft Learn", "Tech Community"],
    openGraph: {
      title: `MSC - ${club.name} | MLSA Egypt Clubs`,
      description:
        club.description ||
        `The MLSA club at ${club.name} is part of the Microsoft Learn Student Ambassadors program in Egypt.`,
      type: "website",
    },
  }
}

export default function CommunityPage({ params }: Props) {
  const id = Number.parseInt(params.id)
  const club = clubs.find((club) => club.id === id)

  // If club doesn't exist or doesn't have details, show 404
  if (!club || !club.hasDetails) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">MSC - {club.name}</h1>
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-5" aria-label="Community information tabs">
          <TabsTrigger value="info" className="flex items-center justify-center">
            <Info className="h-4 w-4 sm:mr-2 lg:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline lg:inline">Info</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center justify-center">
            <Users className="h-4 w-4 sm:mr-2 lg:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline lg:inline">Team</span>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center justify-center">
            <BookOpen className="h-4 w-4 sm:mr-2 lg:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline lg:inline">Courses</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center justify-center">
            <Trophy className="h-4 w-4 sm:mr-2 lg:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline lg:inline">Achievements</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center justify-center">
            <Calendar className="h-4 w-4 sm:mr-2 lg:mr-2" aria-hidden="true" />
            <span className="hidden sm:inline lg:inline">Events</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>About the Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{club.description}</p>
                  <dl>
                    <div className="mb-2">
                      <dt className="inline font-semibold">Established:</dt>
                      <dd className="inline ml-1">{club.established}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Members:</dt>
                      <dd className="inline ml-1">{club.members}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Team</CardTitle>
                </CardHeader>
                <CardContent>
                  {club.leadTeam && club.leadTeam.length > 0 ? (
                    <ul className="space-y-4">
                      {club.leadTeam.map((member) => (
                        <li key={member.name} className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={member.avatar} alt="" />
                            <AvatarFallback aria-hidden="true">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Leadership team information coming soon.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            {club.upcomingEvents && club.upcomingEvents.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {club.upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                      <Button asChild className="mt-4">
                        <Link href={`/events/${event.id}`}>
                          <span>Learn More</span>
                          <span className="sr-only">about {event.title}</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="team">
          {club.team && club.team.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {club.team.map((member) => (
                <div
                  key={member.name}
                  className="dark:bg-gray-800 flex flex-col items-center text-center p-6 border rounded-lg"
                >
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.avatar} alt="" />
                    <AvatarFallback aria-hidden="true">
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
          ) : (
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">Team information coming soon.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Available Courses</CardTitle>
            </CardHeader>
            <CardContent>
              {club.courses && club.courses.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 3xl:grid-cols-3">
                  {club.courses.map((course) => (
                    <Card key={course.id} className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="text-center">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center flex flex-col items-center">
                        <p>Duration: {course.duration}</p>
                        <Button asChild className="mt-4 mx-auto">
                          <Link href={`/courses/${course.id}`}>
                            <span>Learn More</span>
                            <span className="sr-only">about {course.title}</span>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Course information coming soon.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Community Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-8 mb-8">
                {club.metrics && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <RadialChartStacked
                        title="Students Graduated"
                        description="Total graduates"
                        data={[{ name: "Graduates", value: club.metrics.studentsGraduated.value }]}
                        config={{
                          graduates: {
                            label: "Graduates",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        total={club.metrics.studentsGraduated.value}
                      />
                      <RadialChartStacked
                        title="Event Attendees"
                        description="Total participants"
                        data={[{ name: "Attendees", value: club.metrics.eventAttendees.value }]}
                        config={{
                          attendees: {
                            label: "Attendees",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                        total={club.metrics.eventAttendees.value}
                      />
                      <RadialChartStacked
                        title="Volunteers"
                        description="Active volunteers"
                        data={[{ name: "Volunteers", value: club.metrics.volunteers.value }]}
                        config={{
                          volunteers: {
                            label: "Volunteers",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                        total={club.metrics.volunteers.value}
                      />
                      <RadialChartStacked
                        title="Bootcamps Held"
                        description="Total bootcamps"
                        data={[{ name: "Bootcamps", value: club.metrics.bootcampsHeld.value }]}
                        config={{
                          bootcamps: {
                            label: "Bootcamps",
                            color: "hsl(var(--chart-4))",
                          },
                        }}
                        total={club.metrics.bootcampsHeld.value}
                      />
                    </div>
                  </div>
                )}
                {club.achievements && club.achievements.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Notable Accomplishments</h2>
                    <ul className="list-disc list-inside space-y-2">
                      {club.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {!club.metrics && (!club.achievements || club.achievements.length === 0) && (
                  <p className="text-center text-muted-foreground">Achievement information coming soon.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              {club.upcomingEvents && club.upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {club.upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <Button asChild className="mt-4">
                          <Link href={`/events/${event.id}`}>
                            <span>Learn More</span>
                            <span className="sr-only">about {event.title}</span>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
              )}
            </CardContent>
          </Card>
          {club.bootcamps && club.bootcamps.length > 0 && (
            <Card className="mt-8 dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Upcoming Bootcamps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {club.bootcamps.map((bootcamp) => (
                    <Card key={bootcamp.id}>
                      <CardHeader>
                        <CardTitle>{bootcamp.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Date: {new Date(bootcamp.date).toLocaleDateString()}</p>
                        <Button asChild className="mt-4">
                          <Link href={`/bootcamps/${bootcamp.id}`}>
                            <span>Learn More</span>
                            <span className="sr-only">about {bootcamp.title}</span>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
      <div className="mt-8 flex justify-center">
        {club.formLink && (
          <Button asChild size="lg" className="flex items-center gap-2 px-8 py-6 text-lg">
            <a href={club.formLink} target="_blank" rel="noopener noreferrer">
              <span>Join This Community</span>
              <ExternalLink className="h-5 w-5 ml-1" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

