// Team Member 3: Zarin Tasnim (231916312) - UI Component - Topic Detail Page
"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

// Import the topics data
import { topics } from "@/lib/topics-data"

export default function TopicDetailPage() {
  const params = useParams()
  const [topic, setTopic] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the topic that matches the slug
    const currentTopic = topics.find((t) => t.slug === params.slug)
    setTopic(currentTopic)
    setLoading(false)
  }, [params.slug])

  if (loading) {
    return (
      <div className="container py-12 flex justify-center">
        <p>Loading topic...</p>
      </div>
    )
  }

  if (!topic) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Topic not found</h1>
        <p className="text-muted-foreground mb-6">The topic you're looking for doesn't exist or has been removed.</p>
        <Link href="/topics">
          <Button>Back to Topics</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <Link href="/topics" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Topics</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
          <img src={topic.image || "/placeholder.svg"} alt="" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold">{topic.title}</h1>
            {topic.isHot && (
              <Badge variant="destructive" className="text-xs">
                Hot Topic
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground mb-4">Updated {topic.updated}</p>
          <p className="mb-4 max-w-3xl">{topic.description}</p>
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="blogs">
        <TabsList className="mb-8">
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topic.blogs && topic.blogs.map((blog: any) => <BlogCard key={blog.id} blog={blog} />)}
            {(!topic.blogs || topic.blogs.length === 0) && (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No blogs available for this topic yet.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topic.vlogs && topic.vlogs.map((vlog: any, index: number) => <VlogCard key={index} vlog={vlog} />)}
            {(!topic.vlogs || topic.vlogs.length === 0) && (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No videos available for this topic yet.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topic.articles &&
              topic.articles.map((article: any, index: number) => <ArticleCard key={index} article={article} />)}
            {(!topic.articles || topic.articles.length === 0) && (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No resources available for this topic yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/topics/blog/${blog.id}`}>
      <Card className="h-full hover:shadow-md transition-all">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-sm text-muted-foreground mb-2">By {blog.author}</p>
          <p className="mb-4">{blog.summary}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags &&
              blog.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function VlogCard({ vlog }: { vlog: any }) {
  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={vlog.thumbnail || "/placeholder.svg?height=200&width=400"}
            alt={vlog.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2">{vlog.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{vlog.author}</p>
          <p className="mb-4 text-sm">{vlog.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{vlog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{vlog.duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ArticleCard({ article }: { article: any }) {
  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{article.author}</p>
        <p className="mb-4 text-sm">{article.description}</p>
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
      </CardContent>
    </Card>
  )
}
