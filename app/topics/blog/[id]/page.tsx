// Team Member 3: Zarin Tasnim (231916312) - UI Component - Blog Detail Page
"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

// Import the topics data
import { topics } from "@/lib/topics-data"

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<any>(null)
  const [topic, setTopic] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the blog with the matching ID
    let foundBlog = null
    let foundTopic = null

    for (const t of topics) {
      if (t.blogs) {
        const b = t.blogs.find((blog: any) => blog.id === params.id)
        if (b) {
          foundBlog = b
          foundTopic = t
          break
        }
      }
    }

    if (foundBlog && foundTopic) {
      setBlog(foundBlog)
      setTopic(foundTopic)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container py-12 flex justify-center">
        <p>Loading blog...</p>
      </div>
    )
  }

  if (!blog || !topic) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <p className="text-muted-foreground mb-6">The blog you're looking for doesn't exist or has been removed.</p>
        <Link href="/topics">
          <Button>Back to Topics</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <Link
        href={`/topics/${topic.slug}`}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to {topic.title}</span>
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-muted-foreground">By {blog.author}</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags &&
              blog.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  )
}
