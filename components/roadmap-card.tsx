// Team Member 3: UI Component - Roadmap Card

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface RoadmapCardProps {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  categories: string[]
  image: string
  href: string
}

export function RoadmapCard({ title, description, difficulty, categories, image, href }: RoadmapCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md hover:-translate-y-1 hover:border-primary/50 h-full">
        <div className="relative h-48 bg-muted">
          <img
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            className="object-cover w-full h-full"
          />
          <Badge
            className="absolute top-3 right-3"
            variant={
              difficulty === "Beginner" ? "default" : difficulty === "Intermediate" ? "secondary" : "destructive"
            }
          >
            {difficulty}
          </Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mt-2 line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
          {categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="outline" className="whitespace-nowrap">
              {category}
            </Badge>
          ))}
          <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
