import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
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
      "If your university doesn't have an MLSA club yet, you can reach out to us through the contact form on our website. We'll provide you with information and support to start a new community.",
  },
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

