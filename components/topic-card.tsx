// Team Member 3: Zarin Tasnim (231916312) - UI Component - Topic Card

import Link from "next/link" // For navigation without page refresh
import { Card, CardContent, CardFooter } from "@/components/ui/card" // UI components for card layouts
import { Badge } from "@/components/ui/badge" // UI component for displaying tags

// Define the props (properties) that this component accepts
interface TopicCardProps {
  title: string // The title of the topic
  description: string // A description of what the topic covers
  tags: string[] // An array of related tags
  image: string // URL to the topic icon/image
  href: string // URL to navigate to when the card is clicked
}

// TopicCard component definition with destructured props
export function TopicCard({ title, description, tags, image, href }: TopicCardProps) {
  return (
    // Wrap the entire card in a Link component to make it clickable
    <Link href={href} className="block group">
      {/* Card component with improved styling for consistent height and better hover effects */}
      <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:translate-y-[-5px]">
        {/* Card content with improved spacing and overflow handling */}
        <CardContent className="p-6">
          {/* Flex container for icon and title with better alignment */}
          <div className="flex items-center gap-4 mb-4">
            {/* Circular container for the topic icon with improved sizing */}
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              {/* Display the topic icon with proper sizing */}
              <img src={image || "/placeholder.svg"} alt="" className="w-8 h-8 object-contain" />
            </div>

            {/* Title with hover effect and text overflow handling */}
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors overflow-hidden text-ellipsis">
              {title}
            </h3>
          </div>

          {/* Description with muted color and improved overflow handling */}
          <p className="text-muted-foreground overflow-hidden min-h-[4.5rem] break-words">{description}</p>
        </CardContent>

        {/* Card footer with tag badges and improved wrapping */}
        <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
          {/* Map through tags array to create badge for each tag */}
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="whitespace-nowrap">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}
