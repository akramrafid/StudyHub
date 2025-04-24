// Team Member 1: Akram Rafid (231017512) - Backend Integration - Authentication API
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { compare } from "bcryptjs"
import clientPromise from "@/lib/mongodb"

// This is the NextAuth.js authentication handler with proper type definitions
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if credentials are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        try {
          // Connect to MongoDB
          const client = await clientPromise
          const db = client.db()
          const usersCollection = db.collection("users")

          // Find user by email
          const user = await usersCollection.findOne({ email: credentials.email })

          // If no user is found, return null
          if (!user) {
            return null
          }

          // Check if password matches
          const isPasswordValid = await compare(credentials.password, user.password)

          // If password doesn't match, return null
          if (!isPasswordValid) {
            return null
          }

          // Return user object without password
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  // Database adapter configuration
  adapter: MongoDBAdapter(clientPromise),
  // Session configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Custom pages
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  // Callbacks
  callbacks: {
    async jwt({ token, user }) {
      // Add user ID to token
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Add user ID to session
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  // Debug mode in development
  debug: process.env.NODE_ENV === "development",
  // Secret for JWT encryption - use NEXTAUTH_SECRET from environment variables
  secret: process.env.NEXTAUTH_SECRET,
}

// Create the handler using the auth options
const handler = NextAuth(authOptions)

// Export the API route handlers
export { handler as GET, handler as POST }
