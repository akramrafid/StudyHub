// Team Member 1: Akram Rafid (231017512) - Backend Integration - User Service
import { hash } from "bcryptjs"
import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"

// User interface
export interface User {
  _id?: string | ObjectId
  name: string
  email: string
  password?: string
  createdAt?: Date
  updatedAt?: Date
}

// Register a new user
export async function registerUser(userData: {
  name: string
  email: string
  password: string
}): Promise<Omit<User, "password">> {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()
    const usersCollection = db.collection("users")

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: userData.email })
    if (existingUser) {
      throw new Error("User already exists with this email")
    }

    // Hash password
    const hashedPassword = await hash(userData.password, 12)

    // Create user object
    const newUser: User = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Insert user into database
    const result = await usersCollection.insertOne(newUser)

    // Return user without password
    const { password, ...userWithoutPassword } = newUser
    return {
      ...userWithoutPassword,
      _id: result.insertedId,
    }
  } catch (error) {
    console.error("Error registering user:", error)
    throw error
  }
}

// Get user by ID
export async function getUserById(id: string): Promise<Omit<User, "password"> | null> {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()
    const usersCollection = db.collection("users")

    // Find user by ID
    const user = await usersCollection.findOne({ _id: new ObjectId(id) })

    // If no user is found, return null
    if (!user) {
      return null
    }

    // Return user without password
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  } catch (error) {
    console.error("Error getting user by ID:", error)
    throw error
  }
}

// Get user by email
export async function getUserByEmail(email: string): Promise<Omit<User, "password"> | null> {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()
    const usersCollection = db.collection("users")

    // Find user by email
    const user = await usersCollection.findOne({ email })

    // If no user is found, return null
    if (!user) {
      return null
    }

    // Return user without password
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  } catch (error) {
    console.error("Error getting user by email:", error)
    throw error
  }
}
