// Team Member 1: Akram Rafid (231017512) - Backend Integration - Authentication Client
"use client"

// Login functionality removed - no longer needed
export async function loginUser(email: string, password: string) {
  // Authentication disabled
  return { ok: true }
}

// Register functionality removed - no longer needed
export async function registerUser(name: string, email: string, password: string) {
  // Authentication disabled
  return { 
    name,
    email
  }
}

// Logout functionality removed - no longer needed
export async function logoutUser() {
  // Authentication disabled
  return
}

// Return a default user for all pages requiring authentication
export function useCurrentUser() {
  return {
    user: {
      name: "Guest User",
      email: "guest@example.com"
    },
    isLoading: false,
    isAuthenticated: true,
  }
}
