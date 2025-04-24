// Team Member 2: Jihad Hossain Jisan (231016712) - UI Component - Profile Page
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { user } = useCurrentUser()
  const router = useRouter()

  const handleGoHome = () => {
    router.push("/")
  }

  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Public access enabled - no login required</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p className="text-lg">{user.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-lg">{user.email}</p>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full" onClick={handleGoHome}>
                  Go to Homepage
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
