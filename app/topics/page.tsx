// Team Member 3: Zarin Tasnim (231916312) - UI Component - Topics Page
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar, Play } from 'lucide-react'

// Import the topics data
import { topics } from "@/lib/topics-data"

export default function TopicsPage() {
  const [activeTab, setActiveTab] = useState("topics")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter topics based on search query
  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Trending Topics in CS</h1>
        <p className="text-muted-foreground">
          Stay up-to-date with the latest trends and technologies in computer science
        </p>
      </div>

      <div className="relative w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search topics or keywords..."
          className="w-full px-4 py-2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="topics" onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="topics">All Topics</TabsTrigger>
          <TabsTrigger value="vlogs">Video Content</TabsTrigger>
          <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
          <TabsTrigger value="hot">Hot Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vlogs" className="mt-0">
          <div className="space-y-8">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="space-y-6">
                <h2 className="text-2xl font-semibold">{topic.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topic.vlogs && topic.vlogs.map((vlog, index) => <VlogCard key={index} vlog={vlog} topic={topic} />)}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-0">
          <div className="space-y-8">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="space-y-6">
                <h2 className="text-2xl font-semibold">{topic.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topic.articles &&
                    topic.articles.map((article, index) => <ArticleCard key={index} article={article} topic={topic} />)}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hot" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTopics
              .filter((topic) => topic.isHot)
              .map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TopicCard({ topic }: { topic: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-8">
        <div className="flex gap-5">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <img src={topic.image || "/placeholder.svg"} alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">{topic.title}</h3>
                {topic.isHot && (
                  <Badge variant="destructive" className="text-xs">
                    Hot Topic
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Updated {topic.updated}</p>
              <p className="mt-2">{topic.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {topic.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              <Link href={`/topics/${topic.slug}`}>
                <Button variant="outline">Explore Topic</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function VlogCard({ vlog, topic }: { vlog: any; topic: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all h-full">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={vlog.thumbnail || "/placeholder.svg?height=200&width=400"}
            alt={vlog.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Button variant="secondary" size="sm" className="gap-2">
              <Play className="h-4 w-4" /> Watch Now
            </Button>
          </div>
          <Badge className="absolute top-2 right-2" variant="secondary">
            {vlog.duration}
          </Badge>
        </div>
        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-lg line-clamp-2">{vlog.title}</h3>
          <p className="text-sm text-muted-foreground">{vlog.author}</p>
          <p className="text-sm line-clamp-3">{vlog.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{vlog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="outline">{topic.tags[0]}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ArticleCard({ article, topic }: { article: any; topic: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all h-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-semibold text-lg">{article.title}</h3>
        <p className="text-sm text-muted-foreground">{article.author}</p>
        <p className="text-sm">{article.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{topic.tags[0]}</Badge>
          {topic.tags.length > 1 && <Badge variant="outline">{topic.tags[1]}</Badge>}
        </div>
      </CardContent>
    </Card>
  )
}