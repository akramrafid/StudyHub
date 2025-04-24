// Team Member 3: UI Component - Roadmap Detail Page
"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getRoadmapBySlug } from "@/lib/roadmaps"

// In client components, use useParams() hook rather than the params prop
export default function RoadmapDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("learning-path")
  const [roadmap, setRoadmap] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  // Using params from useParams() hook which is safe to access directly
  const slugValue = params.slug as string

  useEffect(() => {
    async function fetchRoadmap() {
      try {
        const data = await getRoadmapBySlug(slugValue)
        setRoadmap(data)
      } catch (error) {
        console.error("Error fetching roadmap:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRoadmap()
  }, [slugValue])

  if (loading) {
    return (
      <div className="container py-12 flex justify-center">
        <p>Loading roadmap...</p>
      </div>
    )
  }

  if (!roadmap) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Roadmap not found</h1>
        <p className="text-muted-foreground mb-6">The roadmap you're looking for doesn't exist or has been removed.</p>
        <Link href="/roadmaps">
          <Button>Back to Roadmaps</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold">{roadmap.title}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{roadmap.difficulty}</Badge>
              <Badge variant="outline">{roadmap.duration}</Badge>
              {roadmap.categories.map((category: string) => (
                <Badge key={category} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <Button>Start Learning</Button>
        </div>
        <p className="text-muted-foreground">{roadmap.description}</p>
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Completion rate</span>
            <span className="text-sm font-medium">{roadmap.completionRate}%</span>
          </div>
          <Progress value={roadmap.completionRate} className="h-2" />
        </div>
      </div>

      <Tabs defaultValue="learning-path" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="learning-path">Learning Path</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>
        <TabsContent value="learning-path" className="mt-0">
          <div className="space-y-6">
            {roadmap.steps.map((step: any, index: number) => (
              <Card key={step.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Resources</h4>
                        <ul className="space-y-2">
                          {step.resources.map((resource: any, i: number) => (
                            <li key={i} className="flex items-center gap-2">
                              <Badge variant="outline" className="w-20 justify-center">
                                {resource.type}
                              </Badge>
                              <Link href={resource.url} className="text-primary hover:underline" target="_blank">
                                {resource.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="details" className="mt-0">
          <div className="prose max-w-none">
            <h2>About this Roadmap</h2>
            <p>
              This roadmap is designed for developers who want to master {roadmap.title.toLowerCase()}. It covers
              everything from the basics to advanced concepts and practical applications.
            </p>
            <h2>Prerequisites</h2>
            <ul>
              <li>Basic understanding of how computers and the internet work</li>
              <li>Familiarity with using a code editor</li>
              <li>Problem-solving mindset</li>
              {roadmap.title === "Machine Learning" && (
                <li>Basic knowledge of mathematics (algebra, calculus) and programming</li>
              )}
              {roadmap.title === "Backend Development" && (
                <li>Basic understanding of at least one programming language</li>
              )}
            </ul>
            <h2>Learning Outcomes</h2>
            <p>By the end of this roadmap, you will be able to:</p>
            <ul>
              {roadmap.title === "Frontend Development" && (
                <>
                  <li>Build responsive and accessible websites using HTML and CSS</li>
                  <li>Write clean and efficient JavaScript code</li>
                  <li>Create interactive user interfaces with React</li>
                  <li>Manage state in complex applications</li>
                  <li>Optimize React applications for performance</li>
                </>
              )}
              {roadmap.title === "Backend Development" && (
                <>
                  <li>Design and implement RESTful APIs</li>
                  <li>Work with databases and data modeling</li>
                  <li>Implement authentication and authorization</li>
                  <li>Deploy and scale backend applications</li>
                  <li>Implement testing and debugging strategies</li>
                </>
              )}
              {roadmap.title === "Machine Learning" && (
                <>
                  <li>Understand and implement machine learning algorithms</li>
                  <li>Build and train neural networks</li>
                  <li>Work with computer vision and natural language processing</li>
                  <li>Deploy machine learning models to production</li>
                  <li>Evaluate and improve model performance</li>
                </>
              )}
              {roadmap.title === "DevOps Engineering" && (
                <>
                  <li>Set up and manage CI/CD pipelines</li>
                  <li>Containerize applications with Docker</li>
                  <li>Orchestrate containers with Kubernetes</li>
                  <li>Implement infrastructure as code</li>
                  <li>Monitor and troubleshoot applications in production</li>
                </>
              )}
              {roadmap.title === "Mobile App Development" && (
                <>
                  <li>Build cross-platform mobile applications</li>
                  <li>Implement responsive and intuitive user interfaces</li>
                  <li>Manage state and data in mobile applications</li>
                  <li>Test and debug mobile applications</li>
                  <li>Deploy applications to app stores</li>
                </>
              )}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="discussion" className="mt-0">
          <div className="bg-muted/50 p-12 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-2">Join the discussion</h3>
            <p className="text-muted-foreground mb-4">
              Sign in to participate in the discussion and ask questions about this roadmap.
            </p>
            {/* <Link href="/login">
              <Button>Sign In</Button>
            </Link> */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
