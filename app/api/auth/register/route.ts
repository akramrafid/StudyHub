// Team Member 1: Akram Rafid (231017512) - Backend Integration - Registration API
import { type NextRequest, NextResponse } from "next/server"
import { registerUser } from "@/lib/user-service"

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Register user
    const user = await registerUser({ name, email, password })

    // Return success response
    return NextResponse.json({ message: "User registered successfully", user }, { status: 201 })
  } catch (error: any) {
    // Handle errors
    console.error("Registration error:", error)
    return NextResponse.json({ error: error.message || "Failed to register user" }, { status: 500 })
  }
}
