// Team Member 2: Jihad Hossain Jisan (231016712) - UI Component - Footer
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 md:py-16">
        {/* Single column with just the Study Hub description */}
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Study Hub</h3>
          <p className="text-sm text-muted-foreground">
            Community-driven roadmaps, guides and other educational content to help developers grow in their careers.
          </p>
        </div>
        
        {/* Copyright section */}
        <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Study Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}