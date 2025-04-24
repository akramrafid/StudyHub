"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { SignupDialog } from "./signup-dialog"
import { Button } from "./ui/button"

export function SignupPrompt({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const [showDialog, setShowDialog] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  
  // Disabled automatic overlay
  const showOverlay = false
  
  // Automatic dialog show functionality is disabled
  useEffect(() => {
    // Popup functionality disabled
  }, [])
  
  // Navigation is no longer prevented
  const handleNavigation = (e: React.MouseEvent) => {
    // Navigation prevention disabled
  }

  // Redirect to login page
  const handleLoginRedirect = () => {
    router.push("/login")
  }
  
  return (
    <>
      {/* Simply render children without capturing clicks */}
      <div className="">
        {children}
      </div>
      
      {/* Signup dialog is still available but won't show automatically */}
      <SignupDialog 
        open={showDialog} 
        onOpenChange={(open) => {
          setShowDialog(open)
        }} 
      />
    </>
  )
}