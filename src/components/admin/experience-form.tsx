"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { createExperience, updateExperience } from "@/utils/actions/experience"
import { Experience } from "@/lib/types/database-types"

interface ExperienceFormProps {
  experience?: Experience
}

export function ExperienceForm({ experience }: ExperienceFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      if (experience) {
        await updateExperience(experience.id, formData)
      } else {
        await createExperience(formData)
      }
      router.push("/admin/experience")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="position" className="block text-sm font-medium mb-2">
          Position *
        </label>
        <input
          type="text"
          id="position"
          name="position"
          defaultValue={experience?.position}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Senior Full Stack Developer"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          defaultValue={experience?.company}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Tech Company Inc."
        />
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium mb-2">
          Duration *
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          defaultValue={experience?.duration}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Jan 2020 - Present"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={experience?.description}
          required
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Describe your role and responsibilities..."
        />
      </div>

      <div>
        <label htmlFor="technologies" className="block text-sm font-medium mb-2">
          Technologies *
        </label>
        <input
          type="text"
          id="technologies"
          name="technologies"
          defaultValue={experience?.technologies?.join(", ")}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="React, Node.js, PostgreSQL (comma-separated)"
        />
        <p className="text-xs text-muted-foreground mt-1">Separate technologies with commas</p>
      </div>

      <div>
        <label htmlFor="display_order" className="block text-sm font-medium mb-2">
          Display Order
        </label>
        <input
          type="number"
          id="display_order"
          name="display_order"
          defaultValue={experience?.display_order || 0}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="0"
        />
        <p className="text-xs text-muted-foreground mt-1">Lower numbers appear first</p>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
        >
          {loading ? "Saving..." : experience ? "Update Experience" : "Create Experience"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
