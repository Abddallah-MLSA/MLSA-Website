import { type LucideIcon, Users, Calendar, School, Award, BarChart, Building2, Briefcase } from "lucide-react"

// Types
export interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
  university?: string
}

// Update the Club interface to include formLink
export interface Club {
  id: number
  name: string
  members: number
  established: string
  description?: string
  leadTeam?: TeamMember[]
  team?: TeamMember[]
  upcomingEvents?: Event[]
  achievements?: string[]
  courses?: Course[]
  bootcamps?: Bootcamp[]
  metrics?: {
    studentsGraduated: { value: number }
    eventAttendees: { value: number }
    volunteers: { value: number }
    bootcampsHeld: { value: number }
  }
  hasDetails?: boolean
  formLink?: string // Add this field for the join form link
}

export interface Event {
  id: string | number
  title: string
  date: string
  time?: string
  location: string
  description?: string
  speaker?: string
  speakerBio?: string
  requirements?: string
}

export interface Course {
  id: string | number
  title: string
  duration: string
  description?: string
}

export interface Bootcamp {
  id: string | number
  title: string
  date: string
  description?: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  author: string
  authorImage?: string
  image: string
}

export interface Sponsor {
  id: number
  name: string
  level: string
  startDate: string
  endDate: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Metric {
  title: string
  description: string
  data: { name: string; value: number }[]
  config: {
    [key: string]: {
      label: string
      color: string
    }
  }
  total: number
}

export interface SidebarItem {
  name: string
  href: string
  icon: LucideIcon
}

export interface DashboardStat {
  title: string
  value: string
  icon: LucideIcon
}

export interface Activity {
  id: number
  user: string
  action: string
  target: string
  timestamp: string
}

export interface ChartData {
  name: string
  [key: string]: string | number
}

// Data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abdullah Zidan",
    role: "Gold Microsoft Ambassador  Founder & Community Leader",
    avatar: "/images/team/abdallah-zidan.png",
  },
  {
    id: 2,
    name: "Hoda Saleh",
    role: "Co-Founder & Community Co-Leader  President of Microsoft Student Club - MU",
    avatar: "/images/team/hoda-saleh.png",
  },
  {
    id: 3,
    name: "Mazen Goda",
    role: "President of Microsoft Student Club - AOU",
    avatar: "/images/team/mazen-goda.png",
  },
  {
    id: 4,
    name: "Ahmed Adel",
    role: "President of Microsoft Student Club - SAMS",
    avatar: "/images/team/ahmed-adel.png",
  },
  {
    id: 5,
    name: "Anas AbuElHaag",
    role: "President of Microsoft Student Club - ECU",
    avatar: "/images/team/anas-abuelhaag.png",
  },
  {
    id: 6,
    name: "Khaled AbdelAty",
    role: "President of Microsoft Student Club - TU",
    avatar: "/images/team/khalid-abdelaty.png",
  },
  {
    id: 7,
    name: "Adham ElAlfy",
    role: "President of Microsoft Student Club - OI",
    avatar: "/images/team/adham-elalfy.png",
  },
]

export const communityMembers: TeamMember[] = [
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

// Now let's update the clubs array to include formLink for each club
export const clubs: Club[] = [
  {
    id: 1,
    name: "Arab Open University",
    members: 150,
    established: "2022",
    hasDetails: true,
    formLink: "https://forms.office.com/r/aou-mlsa-join",
    description:
      "The MLSA club at Arab Open University is dedicated to fostering a community of tech enthusiasts and future leaders in the field of computer science and engineering.",
    leadTeam: [
      { id: 1, name: "Mazen Goda", role: "President", avatar: "/images/team/mazen-goda.png" },
      { id: 2, name: "Moamen Walid", role: "Vice President", avatar: "/placeholder.svg" },
      { id: 3, name: "Amr Magdy", role: "Technical Lead", avatar: "/placeholder.svg" },
    ],
    team: [
      { id: 1, name: "Mazen Goda", role: "President", avatar: "/images/team/mazen-goda.png" },
      { id: 2, name: "Moamen Walid", role: "Vice President", avatar: "/placeholder.svg" },
      { id: 3, name: "Amr Magdy", role: "Technical Lead", avatar: "/placeholder.svg" },
      { id: 4, name: "Nour Ahmed", role: "Event Coordinator", avatar: "/placeholder.svg" },
      { id: 5, name: "Fatima Hassan", role: "Marketing Lead", avatar: "/placeholder.svg" },
      { id: 6, name: "Mohammed Ehap", role: "Web Specialist", avatar: "/placeholder.svg" },
    ],
    upcomingEvents: [
      { id: "1", title: "Intro to Azure Workshop", date: "2025-03-20", location: "Arab Open University" },
      { id: "2", title: "Web Development Bootcamp", date: "2025-04-05", location: "Arab Open University" },
    ],
    achievements: [
      "Hosted the largest student-led hackathon in Egypt (2024)",
      "Won the MLSA EMEA Regional Challenge (2023)",
      "Conducted over 50 workshops and training sessions",
    ],
    courses: [
      { id: "1", title: "Introduction to Cloud Computing", duration: "4 weeks" },
      { id: "2", title: "Web Development Fundamentals", duration: "6 weeks" },
      { id: "3", title: "Data Science Essentials", duration: "8 weeks" },
    ],
    bootcamps: [
      { id: "1", title: "AI & Machine Learning Bootcamp", date: "2025-07-15" },
      { id: "2", title: "Full Stack Development Bootcamp", date: "2025-08-01" },
    ],
    metrics: {
      studentsGraduated: { value: 500 },
      eventAttendees: { value: 2000 },
      volunteers: { value: 50 },
      bootcampsHeld: { value: 10 },
    },
  },
  {
    id: 2,
    name: "Mansoura University",
    members: 120,
    established: "2023",
    hasDetails: true,
    formLink: "https://forms.office.com/r/mansoura-mlsa-join",
    description:
      "The MLSA club at Mansoura University focuses on building a strong tech community and providing students with hands-on experience in emerging technologies.",
    leadTeam: [
      { id: 1, name: "Hoda Saleh", role: "President", avatar: "/images/team/hoda-saleh.png" },
      { id: 2, name: "Ahmed Ibrahim", role: "Vice President", avatar: "/placeholder.svg" },
    ],
    achievements: [
      "Organized the first university-wide hackathon (2023)",
      "Conducted 30+ workshops on cloud computing and AI",
      "Established partnerships with 5 tech companies",
    ],
  },
  {
    id: 3,
    name: "Sadat Academy",
    members: 100,
    established: "2023",
    hasDetails: true,
    formLink: "https://forms.office.com/r/sadat-mlsa-join",
    description:
      "The MLSA club at Sadat Academy aims to bridge the gap between academic learning and industry requirements through practical workshops and networking events.",
    leadTeam: [{ id: 1, name: "Ahmed Adel", role: "President", avatar: "/images/team/ahmed-adel.png" }],
  },
  {
    id: 4,
    name: "Egyptian Chinese University",
    members: 80,
    established: "2024",
    hasDetails: true,
    formLink: "https://forms.office.com/r/ecu-mlsa-join",
    description:
      "The MLSA club at Egyptian Chinese University focuses on cross-cultural tech collaboration and innovation.",
    leadTeam: [{ id: 1, name: "Anas AbuElHaag", role: "President", avatar: "/images/team/anas-abuelhaag.png" }],
  },
  {
    id: 5,
    name: "Obour institute",
    members: 70,
    established: "2024",
    hasDetails: true,
    formLink: "https://forms.office.com/r/obour-mlsa-join",
    description: "The MLSA club at Obour Institute is dedicated to practical tech education and career preparation.",
    leadTeam: [{ id: 1, name: "Adham ElAlfy", role: "President", avatar: "/images/team/adham-elalfy.png" }],
  },
  {
    id: 6,
    name: "Tanta University",
    members: 60,
    established: "2025",
    hasDetails: true,
    formLink: "https://forms.office.com/r/tanta-mlsa-join",
    description:
      "The MLSA club at Tanta University focuses on bringing tech opportunities to students in the Delta region.",
    leadTeam: [{ id: 1, name: "Khaled AbdelAty", role: "President", avatar: "/images/team/khalid-abdelaty.png" }],
  },
  {
    id: 7,
    name: "Zewail City",
    members: 60,
    established: "2025",
    hasDetails: false,
    formLink: "https://forms.office.com/r/zewail-mlsa-join",
  },
]

// Remove the detailedClub variable since we now have details in the clubs array
// Remove adminClubs since we're consolidating to a single array

export const events: Event[] = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Cairo University",
    description: "Learn about the latest advancements in Artificial Intelligence and Machine Learning.",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "2025-04-01",
    location: "Alexandria University",
    description: "A comprehensive bootcamp covering modern web development technologies and practices.",
  },
  {
    id: 3,
    title: "Tech Talk: Cloud Computing",
    date: "2025-04-20",
    location: "Ain Shams University",
    description: "Industry experts discuss the future of cloud computing and its impact on businesses.",
  },
]

export const detailedEvent: Event = {
  id: "1",
  title: "AI Workshop",
  date: "2025-03-15",
  time: "14:00 - 17:00",
  location: "Cairo University, Faculty of Engineering",
  description:
    "Join us for an intensive workshop on the latest advancements in Artificial Intelligence and Machine Learning. This hands-on session will cover topics such as neural networks, deep learning, and practical applications of AI in various industries.",
  speaker: "Dr. Ahmed Hassan",
  speakerBio: "AI Research Scientist at Tech Innovations Inc.",
  requirements: "Basic understanding of programming concepts. Participants should bring their own laptops.",
}

export const adminEvents: Event[] = [
  { id: 1, title: "AI Workshop", date: "2025-03-15", location: "Cairo University" },
  { id: 2, title: "Web Development Bootcamp", date: "2025-04-01", location: "Alexandria University" },
  { id: 3, title: "Tech Talk: Cloud Computing", date: "2025-04-20", location: "Ain Shams University" },
  { id: 4, title: "Data Science Seminar", date: "2025-05-10", location: "Mansoura University" },
  { id: 5, title: "Hackathon 2025", date: "2025-06-01", location: "Assiut University" },
]

export const adminMembers: TeamMember[] = [
  { id: 1, name: "Ahmed Hassan", role: "ahmed@example.com", university: "Cairo University", avatar: "2024-01-15" },
  {
    id: 2,
    name: "Fatima Ali",
    role: "fatima@example.com",
    university: "Alexandria University",
    avatar: "2024-02-01",
  },
  {
    id: 3,
    name: "Mohamed Salah",
    role: "mohamed@example.com",
    university: "Ain Shams University",
    avatar: "2024-02-15",
  },
  { id: 4, name: "Nour Ibrahim", role: "nour@example.com", university: "Mansoura University", avatar: "2024-03-01" },
  { id: 5, name: "Omar Farouk", role: "omar@example.com", university: "Assiut University", avatar: "2024-03-15" },
]

export const sponsors: Sponsor[] = [
  { id: 1, name: "Tech Innovations Inc.", level: "Platinum", startDate: "2024-01-01", endDate: "2024-12-31" },
  { id: 2, name: "Global Software Solutions", level: "Gold", startDate: "2024-02-01", endDate: "2024-12-31" },
  { id: 3, name: "Future AI Systems", level: "Silver", startDate: "2024-03-01", endDate: "2024-12-31" },
  { id: 4, name: "Cloud Dynamics Ltd.", level: "Bronze", startDate: "2024-04-01", endDate: "2024-12-31" },
  { id: 5, name: "Innovative Networks Co.", level: "Partner", startDate: "2024-05-01", endDate: "2024-12-31" },
]

export const blogPosts: BlogPost[] = [
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

export const detailedBlogPost: BlogPost = {
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
  excerpt: "Exploring how artificial intelligence is shaping the future of learning and education.",
}

export const faqs: FAQ[] = [
  {
    question: "What is MLSA Egypt Clubs?",
    answer:
      "MLSA Egypt Clubs are student-led communities affiliated with the Microsoft Learn Student Ambassadors program. These clubs aim to foster tech skills, innovation, and networking among university students across Egypt.",
  },
  {
    question: "How can I join an MLSA club at my university?",
    answer:
      "To join an MLSA club, visit our 'Join' page and fill out the application form. Select your university from the dropdown menu, and we'll connect you with the local chapter.",
  },
  {
    question: "What kind of events do MLSA Egypt Clubs organize?",
    answer:
      "MLSA Egypt Clubs organize a variety of events, including workshops, hackathons, tech talks, and networking sessions. These events cover topics like AI, cloud computing, web development, and more.",
  },
  {
    question: "Do I need to be a computer science student to join?",
    answer:
      "No, MLSA Egypt Clubs welcome students from all academic backgrounds who are interested in technology. Our community values diversity and encourages interdisciplinary collaboration.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "No, membership in MLSA Egypt Clubs is free. We believe in providing equal opportunities for all students to learn and grow in the tech field.",
  },
  {
    question: "How can I start an MLSA club at my university?",
    answer:
      "If your university doesn't have an MLSA club yet, you can reach out to us through the contact form on our website. We'll provide you with information and support to start a new chapter.",
  },
]

export const metrics: Metric[] = [
  {
    title: "University Communities",
    description: "Total communities across Egypt",
    data: [{ name: "Communities", value: 15 }],
    config: {
      communities: {
        label: "Communities",
        color: "hsl(var(--chart-1))",
      },
    },
    total: 15,
  },
  {
    title: "Microsoft Ambassadors",
    description: "Active ambassadors",
    data: [{ name: "Ambassadors", value: 10 }],
    config: {
      ambassadors: {
        label: "Ambassadors",
        color: "hsl(var(--chart-2))",
      },
    },
    total: 150,
  },
  {
    title: "Students Graduated",
    description: "MLSA program graduates",
    data: [{ name: "Graduates", value: 500 }],
    config: {
      graduates: {
        label: "Graduates",
        color: "hsl(var(--chart-3))",
      },
    },
    total: 500,
  },
  {
    title: "Event Attendees",
    description: "Total event participants",
    data: [{ name: "Attendees", value: 1000 }],
    config: {
      attendees: {
        label: "Attendees",
        color: "hsl(var(--chart-4))",
      },
    },
    total: 1000,
  },
  {
    title: "Volunteers",
    description: "Active MLSA volunteers",
    data: [{ name: "Volunteers", value: 500 }],
    config: {
      volunteers: {
        label: "Volunteers",
        color: "hsl(var(--chart-5))",
      },
    },
    total: 500,
  },
  {
    title: "Events Hosted",
    description: "Total events organized",
    data: [{ name: "Events", value: 200 }],
    config: {
      events: {
        label: "Events",
        color: "hsl(var(--chart-1))",
      },
    },
    total: 200,
  },
]

// Admin Dashboard Data
export const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", href: "/admin", icon: BarChart },
  { name: "Clubs", href: "/admin/clubs", icon: Building2 },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Members", href: "/admin/members", icon: Users },
  { name: "Sponsors", href: "/admin/sponsors", icon: Briefcase },
]

export const dashboardStats: DashboardStat[] = [
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
    title: "Active Chapters",
    value: "7",
    icon: School,
  },
  {
    title: "Certifications Earned",
    value: "523",
    icon: Award,
  },
]

export const recentActivities: Activity[] = [
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

export const overviewChartData: ChartData[] = [
  { name: "Jan", members: 400, events: 24 },
  { name: "Feb", members: 300, events: 13 },
  { name: "Mar", members: 200, events: 18 },
  { name: "Apr", members: 278, events: 39 },
  { name: "May", members: 189, events: 48 },
  { name: "Jun", members: 239, events: 38 },
  { name: "Jul", members: 349, events: 43 },
]

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-03-15",
    location: "Cairo University",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "2025-04-01",
    location: "Alexandria University",
  },
  {
    id: 3,
    title: "Tech Talk: Cloud Computing",
    date: "2025-04-20",
    location: "Ain Shams University",
  },
]

