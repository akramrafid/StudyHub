// Team Member 3: UI Component - Roadmaps Page
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoadmapCard } from "@/components/roadmap-card"
import { getRoadmaps } from "@/lib/roadmaps"

export default function RoadmapsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [filter, setFilter] = useState("")
  const [roadmaps, setRoadmaps] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRoadmaps() {
      try {
        const data = await getRoadmaps()
        setRoadmaps(data)
      } catch (error) {
        console.error("Error fetching roadmaps:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRoadmaps()
  }, [])

  // Filter roadmaps based on search input
  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    if (!filter) return true
    return (
      roadmap.title.toLowerCase().includes(filter.toLowerCase()) ||
      roadmap.categories.some((cat: string) => cat.toLowerCase().includes(filter.toLowerCase())) ||
      roadmap.difficulty.toLowerCase().includes(filter.toLowerCase())
    )
  })

  if (loading) {
    return (
      <div className="container py-16 flex justify-center">
        <p>Loading roadmaps...</p>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Roadmaps</h1>
          <p className="text-muted-foreground">
            Explore roadmaps created by the community to guide your learning journey
          </p>
        </div>
        <Link href="/create">
          <Button>Create Your Own Roadmap</Button>
        </Link>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Roadmaps</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="data">Data Science & AI</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
          </TabsList>
          <div className="flex justify-end mb-8">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search roadmaps..."
                className="w-full px-4 py-2 border rounded-md text-base"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ fontSize: "inherit" }} /* Ensures font scales with browser zoom */
              />
            </div>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoadmaps.map((roadmap) => (
                <RoadmapCard
                  key={roadmap.id}
                  title={roadmap.title}
                  description={roadmap.description}
                  difficulty={roadmap.difficulty as any}
                  categories={roadmap.categories}
                  image={roadmap.image}
                  href={`/roadmaps/${roadmap.slug}`}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoadmaps
                .filter((roadmap) =>
                  roadmap.categories.some((cat: string) =>
                    ["Web Development", "Frontend", "Backend", "JavaScript"].includes(cat),
                  ),
                )
                .map((roadmap) => (
                  <RoadmapCard
                    key={roadmap.id}
                    title={roadmap.title}
                    description={roadmap.description}
                    difficulty={roadmap.difficulty as any}
                    categories={roadmap.categories}
                    image={roadmap.image}
                    href={`/roadmaps/${roadmap.slug}`}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="data" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoadmaps
                .filter((roadmap) =>
                  roadmap.categories.some((cat: string) =>
                    ["Data Science", "Artificial Intelligence", "Machine Learning"].includes(cat),
                  ),
                )
                .map((roadmap) => (
                  <RoadmapCard
                    key={roadmap.id}
                    title={roadmap.title}
                    description={roadmap.description}
                    difficulty={roadmap.difficulty as any}
                    categories={roadmap.categories}
                    image={roadmap.image}
                    href={`/roadmaps/${roadmap.slug}`}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoadmaps
                .filter((roadmap) =>
                  roadmap.categories.some((cat: string) => ["Mobile Development", "App Development"].includes(cat)),
                )
                .map((roadmap) => (
                  <RoadmapCard
                    key={roadmap.id}
                    title={roadmap.title}
                    description={roadmap.description}
                    difficulty={roadmap.difficulty as any}
                    categories={roadmap.categories}
                    image={roadmap.image}
                    href={`/roadmaps/${roadmap.slug}`}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
