// Team Member 2: UI Component - Create Roadmap Page
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { createRoadmap } from "@/lib/roadmaps"

interface Step {
  id: string
  title: string
  description: string
}

export default function CreateRoadmapPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [category, setCategory] = useState("")
  const [steps, setSteps] = useState<Step[]>([])
  const [newStepTitle, setNewStepTitle] = useState("")
  const [newStepDescription, setNewStepDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const addStep = () => {
    if (newStepTitle.trim() === "") return

    const newStep: Step = {
      id: Date.now().toString(),
      title: newStepTitle,
      description: newStepDescription,
    }

    setSteps([...steps, newStep])
    setNewStepTitle("")
    setNewStepDescription("")
  }

  const removeStep = (id: string) => {
    setSteps(steps.filter((step) => step.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Team Member 1: Backend Integration - Data Creation
      await createRoadmap({
        title,
        description,
        difficulty,
        category,
        steps,
      })

      router.push("/roadmaps")
    } catch (error) {
      console.error("Failed to create roadmap:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create Your Own Roadmap</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Roadmap Title</Label>
              <Input
                id="title"
                placeholder="e.g. Full-Stack JavaScript Developer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what this roadmap covers and who it's for"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select value={difficulty} onValueChange={setDifficulty} required>
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                    <SelectItem value="Blockchain">Blockchain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Learning Path Steps</h2>

            {steps.length > 0 && (
              <div className="space-y-4 mb-6">
                {steps.map((step, index) => (
                  <Card key={step.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </span>
                            <h3 className="font-medium">{step.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeStep(step.id)}>
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="step-title">Step Title</Label>
                    <Input
                      id="step-title"
                      placeholder="e.g. Learn HTML & CSS Fundamentals"
                      value={newStepTitle}
                      onChange={(e) => setNewStepTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="step-description">Description</Label>
                    <Textarea
                      id="step-description"
                      placeholder="Describe what this step involves"
                      value={newStepDescription}
                      onChange={(e) => setNewStepDescription(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <Button type="button" variant="outline" onClick={addStep} disabled={!newStepTitle.trim()}>
                    Add Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || steps.length === 0}>
              {isLoading ? "Creating..." : "Create Roadmap"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
