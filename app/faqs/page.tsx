// Team Member 2: UI Component - FAQs Page
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Team Member 1: Backend Integration - Data Fetching
const faqs = [
  {
    id: "1",
    question: "How do I choose the right programming language to learn first?",
    answer:
      "The best first programming language depends on your goals. For web development, JavaScript is a great choice. For data science, Python is popular. For mobile apps, consider Swift (iOS) or Kotlin (Android). Choose a language that aligns with your interests and has good learning resources available.",
  },
  {
    id: "2",
    question: "What's the difference between front-end and back-end development?",
    answer:
      "Front-end development focuses on what users see and interact with in a browser or app. It involves HTML, CSS, JavaScript, and frameworks like React or Vue. Back-end development handles server-side logic, databases, and APIs that power the application behind the scenes, using languages like Node.js, Python, Java, or Ruby.",
  },
  {
    id: "3",
    question: "How long does it take to become a proficient developer?",
    answer:
      "Becoming proficient typically takes 6-12 months of dedicated learning and practice for entry-level skills, and 1-2 years to reach professional competence. The timeline varies based on prior experience, learning intensity, and the complexity of your chosen specialization. Consistent practice and building projects are key to progress.",
  },
  {
    id: "4",
    question: "Do I need a computer science degree to become a developer?",
    answer:
      "No, a CS degree is not required to become a developer. Many successful developers are self-taught or come from coding bootcamps. What matters most is your skills, portfolio of projects, and ability to solve problems. However, a degree can provide structured learning and may help with certain job opportunities.",
  },
  {
    id: "5",
    question: "What projects should I build for my portfolio?",
    answer:
      "Build projects that showcase your skills and align with your career goals. Start with simple projects like a personal website, to-do app, or weather app. Then progress to more complex ones like a social media clone, e-commerce site, or data visualization tool. Include projects that demonstrate problem-solving and your ability to work with relevant technologies.",
  },
  {
    id: "6",
    question: "How important is data structures and algorithms knowledge?",
    answer:
      "Data structures and algorithms knowledge is very important for passing technical interviews at many companies, especially larger tech firms. It also helps you write more efficient code and solve complex problems. While you can start a career without deep expertise in this area, investing time to learn these fundamentals will benefit your long-term growth as a developer.",
  },
  {
    id: "7",
    question: "What's the best way to learn cybersecurity?",
    answer:
      "Start with the fundamentals of networking, operating systems, and basic programming. Then explore specialized resources like TryHackMe, HackTheBox, or courses on platforms like Coursera and Udemy. Practice in legal environments like CTFs (Capture The Flag) competitions and set up your own lab. Consider certifications like CompTIA Security+ or CEH once you have some experience.",
  },
  {
    id: "8",
    question: "How do I stay updated with rapidly changing technologies?",
    answer:
      "Follow tech blogs, newsletters, and podcasts in your field. Join communities on platforms like Reddit, Discord, or Stack Overflow. Attend virtual or local meetups and conferences. Set aside time regularly to explore new tools and techniques. Focus on understanding core principles rather than chasing every new framework, as fundamentals change more slowly than specific technologies.",
  },
  {
    id: "9",
    question: "What's the difference between AI, machine learning, and deep learning?",
    answer:
      "AI (Artificial Intelligence) is the broadest concept - creating systems that can perform tasks requiring human intelligence. Machine learning is a subset of AI where systems learn from data without explicit programming. Deep learning is a specialized subset of machine learning using neural networks with many layers to process complex patterns in large datasets, particularly effective for tasks like image and speech recognition.",
  },
  {
    id: "10",
    question: "How do I prepare for technical interviews?",
    answer:
      "Practice coding problems on platforms like LeetCode, HackerRank, or CodeSignal. Study data structures, algorithms, and system design. Review fundamentals of your primary programming languages and technologies. Prepare to explain past projects in detail. Practice speaking through your problem-solving process out loud. Research the company and prepare questions about their technology stack and engineering culture.",
  },
]

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Team Member 1: Backend Integration - Data Filtering
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-6">
            Find answers to common questions about development and learning paths
          </p>
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No matching questions found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  )
}
