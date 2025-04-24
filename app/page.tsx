// Team Member 3: Zarin Tasnim (231916312) - UI Component - Homepage

// Import necessary components and hooks from Next.js and our custom components
import Link from "next/link" // Used for navigation without page refresh
import { Button } from "@/components/ui/button" // UI component for buttons
import { RoadmapCard } from "@/components/roadmap-card" // Custom card component for roadmaps
import { TopicCard } from "@/components/topic-card" // Custom card component for topics
import { Card, CardContent } from "@/components/ui/card" // UI components for card layouts

// This is the main homepage component that will be rendered at the root URL (/)
export default function Home() {
  return (
    // Main container for the entire homepage with flex column layout
    <div className="flex flex-col">
      {/* Hero Section - The main banner at the top of the page with improved zoom handling */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container flex flex-col items-center text-center space-y-6 max-w-full overflow-hidden">
          {/* Main heading with responsive text size and overflow handling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight break-words">
            Developer Roadmaps
          </h1>

          {/* Subheading with muted color and improved overflow handling */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl break-words">
            Community-driven roadmaps, guides and other educational content to help developers grow in their careers.
          </p>

          {/* Button container with improved responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
            {/* Primary action button */}
            <Link href="/roadmaps">
              <Button size="lg" className="w-full sm:w-auto whitespace-nowrap">
                Explore Roadmaps
              </Button>
            </Link>

            {/* Secondary action button */}
            <Link href="/create">
              <Button size="lg" variant="outline" className="w-full sm:w-auto whitespace-nowrap">
                Create Your Own
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Roadmaps Section with improved spacing */}
      <section className="py-20">
        <div className="container">
          {/* Section header with title and "view all" link */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <h2 className="text-3xl font-bold">Featured Roadmaps</h2>
            <Link href="/roadmaps" className="text-primary hover:underline">
              View all roadmaps
            </Link>
          </div>

          {/* Grid layout for roadmap cards - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each RoadmapCard is a custom component that displays information about a roadmap */}
            {/* We pass props to each card with the roadmap details and real images */}
            <RoadmapCard
              title="Frontend Development"
              description="Learn modern frontend development from HTML basics to advanced React patterns and performance optimization."
              difficulty="Intermediate"
              categories={["Web Development", "JavaScript"]}
              image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop"
              href="/roadmaps/frontend"
            />
            <RoadmapCard
              title="Backend Development"
              description="Master server-side programming, databases, APIs, and deployment with this comprehensive backend roadmap."
              difficulty="Intermediate"
              categories={["Web Development", "Backend"]}
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop"
              href="/roadmaps/backend"
            />
            <RoadmapCard
              title="DevOps"
              description="Learn the tools and practices for CI/CD, infrastructure as code, monitoring, and cloud deployment."
              difficulty="Advanced"
              categories={["DevOps", "Cloud"]}
              image="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1770&auto=format&fit=crop"
              href="/roadmaps/devops"
            />
          </div>
        </div>
      </section>

      {/* Trending Topics Section with light background and improved spacing */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          {/* Section header with title and "view all" link */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <h2 className="text-3xl font-bold">Trending Topics</h2>
            <Link href="/topics" className="text-primary hover:underline">
              View all topics
            </Link>
          </div>

          {/* Grid layout for topic cards - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each TopicCard is a custom component that displays information about a topic */}
            {/* We pass props to each card with the topic details and real images */}
            <TopicCard
              title="Artificial Intelligence & Machine Learning"
              description="The latest advancements in AI, including large language models, generative AI, and their applications in various industries."
              tags={["GPT-4", "Generative AI", "Deep Learning"]}
              image="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
              href="/topics/ai-ml"
            />
            <TopicCard
              title="Blockchain & Web3"
              description="Explore the evolving landscape of blockchain technology, decentralized applications, and the future of Web3."
              tags={["DeFi", "Smart Contracts", "NFTs"]}
              image="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
              href="/topics/blockchain-web3"
            />
            <TopicCard
              title="Cyber Security"
              description="The latest trends in cyber security, including zero trust architecture, ransomware defense, and cloud security."
              tags={["Zero Trust", "Ransomware", "Cloud Security"]}
              image="https://cdn-icons-png.flaticon.com/512/2092/2092757.png"
              href="/topics/cyber-security"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action (CTA) Section with improved spacing */}
      <section className="py-20 md:py-28">
        <div className="container flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your learning journey?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join thousands of developers who are using our roadmaps to guide their learning path.
          </p>
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Team Contributions Section with light background and improved spacing */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>

          {/* Grid layout for team member cards - 1 column on mobile, 3 on desktop with improved spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card for Team Member 1 */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Akram Rafid</h3>
                <p className="text-muted-foreground mb-1">Team Member 1</p>
                <p className="text-muted-foreground mb-4">ID: 231017512</p>
                <h4 className="font-medium mb-2">Contributions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Backend Integration</li>
                  <li>Authentication System</li>
                  <li>Data Fetching & Filtering</li>
                  <li>Form Submission Handling</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card for Team Member 2 */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Jihad Hossain Jisan</h3>
                <p className="text-muted-foreground mb-1">Team Member 2</p>
                <p className="text-muted-foreground mb-4">ID: 231016712</p>
                <h4 className="font-medium mb-2">Contributions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>UI Components (Navbar, Footer)</li>
                  <li>Login & Signup Pages</li>
                  <li>Create Roadmap Page</li>
                  <li>Contact & FAQ Pages</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card for Team Member 3 */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Zarin Tasnim</h3>
                <p className="text-muted-foreground mb-1">Team Member 3</p>
                <p className="text-muted-foreground mb-4">ID: 231916312</p>
                <h4 className="font-medium mb-2">Contributions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                 <li>Helped in UI Components</li>
                  <li>gather resources Roadmaps & Topics Pages</li>
                  <li>Resources Page</li>
                  <li>Helped team mates in FrontEnd part</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
