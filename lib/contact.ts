// Team Member 1: Akram Rafid (231017512) - Backend Integration - Contact Service
// This is a mock implementation for demonstration purposes

// Define the ContactFormData interface (shape of contact form data)
interface ContactFormData {
  name: string // Name of the person submitting the form
  email: string // Email address for contact
  subject: string // Subject of the message
  message: string // Content of the message
}

/**
 * Submit contact form data
 *
 * @param data - Object containing the form submission data
 * @returns A Promise that resolves when submission is complete
 * @throws Error if submission fails
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  // Simulate API call delay (1.5 seconds)
  // In a real app, this would be an actual API request to a server
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would send an email or store the message in a database
  // Here we're just logging to the console for demonstration
  console.log("Contact form submitted:", data)

  // Simulate random failure (10% chance) to demonstrate error handling
  if (Math.random() > 0.9) {
    throw new Error("Failed to submit form")
  }
}
