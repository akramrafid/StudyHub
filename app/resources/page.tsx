// Team Member 3: UI Component - Resources Page
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"

// Team Member 1: Backend Integration - Data Fetching
const resources = [
  // Books
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.8,
    description:
      "A handbook of agile software craftsmanship that has helped countless programmers become better developers.",
    tags: ["Programming", "Best Practices", "Software Design"],
    type: "book",
    url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
  },
  {
    id: "2",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    rating: 4.7,
    description:
      "A modern introduction to programming, teaching the essential basics of JavaScript plus advanced topics like closures and object-oriented programming.",
    tags: ["JavaScript", "Web Development", "Programming"],
    type: "book",
    url: "https://eloquentjavascript.net/",
  },
  {
    id: "3",
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    rating: 4.5,
    description:
      "A classic book that describes various design patterns and how to use them effectively in software development.",
    tags: ["Design Patterns", "Software Architecture", "Object-Oriented"],
    type: "book",
    url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612",
  },
  {
    id: "4",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    rating: 4.9,
    description:
      "The definitive guide to algorithms and data structures, covering a broad range of algorithms in depth.",
    tags: ["Algorithms", "Data Structures", "Computer Science"],
    type: "book",
    url: "https://mitpress.mit.edu/books/introduction-algorithms-third-edition",
  },
  {
    id: "5",
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    rating: 4.7,
    description:
      "A comprehensive guide to preparing for technical interviews with 189 programming questions and solutions.",
    tags: ["Interviews", "Algorithms", "Problem Solving"],
    type: "book",
    url: "https://www.crackingthecodinginterview.com/",
  },
  {
    id: "6",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    rating: 4.8,
    description:
      "A collection of practical advice and techniques for software developers to improve their craft and career.",
    tags: ["Programming", "Best Practices", "Career Development"],
    type: "book",
    url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
  },
  {
    id: "7",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    rating: 4.6,
    description:
      "The standard text in AI, covering both the theoretical foundations and practical applications of artificial intelligence.",
    tags: ["Artificial Intelligence", "Machine Learning", "Computer Science"],
    type: "book",
    url: "https://www.pearson.com/us/higher-education/program/Russell-Artificial-Intelligence-A-Modern-Approach-4th-Edition/PGM1263338.html",
  },

  // Courses
  {
    id: "8",
    title: "CS50: Introduction to Computer Science",
    author: "Harvard University (David J. Malan)",
    rating: 4.9,
    description:
      "Harvard's introduction to the intellectual enterprises of computer science and the art of programming.",
    tags: ["Computer Science", "Programming", "Fundamentals"],
    type: "course",
    url: "https://cs50.harvard.edu/x/",
  },
  {
    id: "9",
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead",
    rating: 4.7,
    description: "Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!",
    tags: ["Node.js", "JavaScript", "Backend"],
    type: "course",
    url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
  },
  {
    id: "10",
    title: "Machine Learning",
    author: "Stanford University (Andrew Ng)",
    rating: 4.9,
    description:
      "One of the most popular machine learning courses that covers all the basic techniques and theories of ML.",
    tags: ["Machine Learning", "Artificial Intelligence", "Data Science"],
    type: "course",
    url: "https://www.coursera.org/learn/machine-learning",
  },
  {
    id: "11",
    title: "React - The Complete Guide",
    author: "Academind (Maximilian Schwarzmüller)",
    rating: 4.8,
    description:
      "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    tags: ["React", "JavaScript", "Web Development"],
    type: "course",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    id: "12",
    title: "Algorithms Specialization",
    author: "Stanford University (Tim Roughgarden)",
    rating: 4.8,
    description:
      "Learn to design efficient algorithms, solve hard problems, and optimize performance with this four-course specialization.",
    tags: ["Algorithms", "Data Structures", "Computer Science"],
    type: "course",
    url: "https://www.coursera.org/specializations/algorithms",
  },
  {
    id: "13",
    title: "Full Stack Deep Learning",
    author: "UC Berkeley",
    rating: 4.7,
    description: "Learn how to design, train, and deploy deep learning models in real-world production environments.",
    tags: ["Deep Learning", "Machine Learning", "Production"],
    type: "course",
    url: "https://fullstackdeeplearning.com/",
  },
  {
    id: "14",
    title: "The Complete 2023 Web Development Bootcamp",
    author: "Dr. Angela Yu",
    rating: 4.7,
    description:
      "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, and more!",
    tags: ["Web Development", "Full Stack", "JavaScript"],
    type: "course",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },

  // Websites
  {
    id: "15",
    title: "MDN Web Docs",
    author: "Mozilla",
    rating: 4.9,
    description:
      "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    type: "website",
    url: "https://developer.mozilla.org/",
  },
  {
    id: "16",
    title: "freeCodeCamp",
    author: "freeCodeCamp.org",
    rating: 4.8,
    description:
      "A nonprofit community that helps you learn to code by building projects. Features interactive coding lessons and certifications.",
    tags: ["Programming", "Web Development", "Computer Science"],
    type: "website",
    url: "https://www.freecodecamp.org/",
  },
  {
    id: "17",
    title: "LeetCode",
    author: "LeetCode",
    rating: 4.7,
    description:
      "A platform to help you enhance your skills, expand your knowledge and prepare for technical interviews with coding challenges.",
    tags: ["Algorithms", "Data Structures", "Interview Preparation"],
    type: "website",
    url: "https://leetcode.com/",
  },
  {
    id: "18",
    title: "Stack Overflow",
    author: "Stack Exchange Inc.",
    rating: 4.9,
    description:
      "A public platform for developers to ask and answer programming questions, share knowledge, and build their careers.",
    tags: ["Programming", "Q&A", "Community"],
    type: "website",
    url: "https://stackoverflow.com/",
  },
  {
    id: "19",
    title: "GitHub",
    author: "Microsoft",
    rating: 4.8,
    description:
      "A platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.",
    tags: ["Version Control", "Open Source", "Collaboration"],
    type: "website",
    url: "https://github.com/",
  },
  {
    id: "20",
    title: "Kaggle",
    author: "Google",
    rating: 4.7,
    description:
      "A platform for data science competitions, datasets, notebooks, and education that helps you learn, practice, and showcase your skills.",
    tags: ["Data Science", "Machine Learning", "Competitions"],
    type: "website",
    url: "https://www.kaggle.com/",
  },

  // Videos
  {
    id: "21",
    title: "CS Dojo - Data Structures and Algorithms",
    author: "CS Dojo (YK Sugishita)",
    rating: 4.7,
    description:
      "A comprehensive YouTube playlist covering essential data structures and algorithms concepts with clear explanations.",
    tags: ["Algorithms", "Data Structures", "Computer Science"],
    type: "video",
    url: "https://www.youtube.com/c/CSDojo/playlists",
  },
  {
    id: "22",
    title: "Traversy Media - Web Development Crash Courses",
    author: "Brad Traversy",
    rating: 4.8,
    description: "Quick and practical crash courses on various web development technologies and frameworks.",
    tags: ["Web Development", "JavaScript", "Frameworks"],
    type: "video",
    url: "https://www.youtube.com/c/TraversyMedia/playlists",
  },
  {
    id: "23",
    title: "The Coding Train - Coding Challenges",
    author: "Daniel Shiffman",
    rating: 4.9,
    description:
      "Creative coding tutorials and challenges with a focus on making coding fun and accessible to everyone.",
    tags: ["Creative Coding", "JavaScript", "Processing"],
    type: "video",
    url: "https://www.youtube.com/c/TheCodingTrain/playlists",
  },
  {
    id: "24",
    title: "MIT OpenCourseWare - Introduction to Algorithms",
    author: "MIT (Erik Demaine, Srini Devadas)",
    rating: 4.8,
    description:
      "Complete video lectures from MIT's Introduction to Algorithms course, covering algorithm design and analysis.",
    tags: ["Algorithms", "Computer Science", "Academic"],
    type: "video",
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb",
  },
  {
    id: "25",
    title: "Fireship - 100 Seconds of Code",
    author: "Jeff Delaney",
    rating: 4.7,
    description: "Quick 100-second explanations of various programming concepts, languages, and frameworks.",
    tags: ["Programming", "Quick Learning", "Multiple Technologies"],
    type: "video",
    url: "https://www.youtube.com/c/Fireship/playlists",
  },
  {
    id: "26",
    title: "Two Minute Papers - AI Research",
    author: "Károly Zsolnai-Fehér",
    rating: 4.8,
    description: "Explains cutting-edge AI and computer science research papers in an accessible and engaging way.",
    tags: ["Artificial Intelligence", "Research", "Computer Science"],
    type: "video",
    url: "https://www.youtube.com/c/K%C3%A1rolyZsolnai/videos",
  },

  // Articles
  {
    id: "27",
    title: "What is HTTPS?",
    author: "Cloudflare",
    rating: 4.6,
    description: "A comprehensive explanation of HTTPS, how it works, and why it's important for web security.",
    tags: ["Web Security", "Networking", "HTTPS"],
    type: "article",
    url: "https://www.cloudflare.com/learning/ssl/what-is-https/",
  },
  {
    id: "28",
    title: "A Visual Introduction to Machine Learning",
    author: "R2D3",
    rating: 4.9,
    description: "A beautifully designed visual introduction to machine learning concepts and techniques.",
    tags: ["Machine Learning", "Data Science", "Visualization"],
    type: "article",
    url: "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/",
  },
  {
    id: "29",
    title: "The Cost of JavaScript",
    author: "Addy Osmani",
    rating: 4.7,
    description:
      "An in-depth analysis of the performance costs of JavaScript and how to optimize for better user experiences.",
    tags: ["JavaScript", "Performance", "Web Development"],
    type: "article",
    url: "https://v8.dev/blog/cost-of-javascript-2019",
  },
  {
    id: "30",
    title: "Teach Yourself Computer Science",
    author: "Oz Nova and Myles Byrne",
    rating: 4.8,
    description: "A guide to the best free online resources for self-studying computer science fundamentals.",
    tags: ["Computer Science", "Self-Study", "Education"],
    type: "article",
    url: "https://teachyourselfcs.com/",
  },
  {
    id: "31",
    title: "The Twelve-Factor App",
    author: "Adam Wiggins",
    rating: 4.7,
    description: "A methodology for building software-as-a-service apps that are scalable, maintainable, and portable.",
    tags: ["Software Architecture", "DevOps", "Best Practices"],
    type: "article",
    url: "https://12factor.net/",
  },
  {
    id: "32",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    rating: 4.9,
    description: "A series of books diving deep into the core mechanisms of the JavaScript language.",
    tags: ["JavaScript", "Programming", "In-Depth"],
    type: "article",
    url: "https://github.com/getify/You-Dont-Know-JS",
  },
]

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [filter, setFilter] = useState("")

  // Team Member 1: Backend Integration - Data Filtering
  const filteredResources = resources.filter((resource) => {
    if (!filter) return true
    return (
      resource.title.toLowerCase().includes(filter.toLowerCase()) ||
      resource.author.toLowerCase().includes(filter.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())) ||
      resource.description.toLowerCase().includes(filter.toLowerCase())
    )
  })

  const books = filteredResources.filter((resource) => resource.type === "book")
  const courses = filteredResources.filter((resource) => resource.type === "course")
  const websites = filteredResources.filter((resource) => resource.type === "website")
  const videos = filteredResources.filter((resource) => resource.type === "video")
  const articles = filteredResources.filter((resource) => resource.type === "article")

  return (
    <div className="container py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Learning Resources</h1>
        <p className="text-muted-foreground">
          Discover books, courses, videos, articles, and websites to help you learn and grow as a developer
        </p>
      </div>

      <div className="relative w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-4 py-2 border rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="websites">Websites</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="books" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="websites" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websites.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Resource Card Component with improved spacing, alignment, and zoom handling
function ResourceCard({ resource }: { resource: any }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-all">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-1 break-words">{resource.title}</h3>
            <p className="text-sm text-muted-foreground break-words">by {resource.author}</p>
            <div className="flex items-center mt-2 flex-wrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(resource.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm">({resource.rating}/5)</span>
            </div>
          </div>
          <p className="text-muted-foreground min-h-[4.5rem] break-words overflow-hidden">{resource.description}</p>
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="whitespace-nowrap">
                {tag}
              </Badge>
            ))}
          </div>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full whitespace-nowrap">
              View Resource
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
