"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createEducation, updateEducation } from "@/utils/actions/education";
import { Education } from "@/lib/types/database-types";

interface EducationFormProps {
  education?: Education;
}

export function EducationForm({ education }: EducationFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      if (education) {
        await updateEducation(education.id, formData);
      } else {
        await createEducation(formData);
      }

      router.push("/admin/education");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={education?.title}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Bachelor of Computer Science"
        />
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium mb-2"
        >
          Organization *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          defaultValue={education?.organization}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., University of Technology"
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={education?.location ?? ""}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Boston, MA"
        />
      </div>

      {/* Period */}
      <div>
        <label htmlFor="period" className="block text-sm font-medium mb-2">
          Period *
        </label>
        <input
          type="text"
          id="period"
          name="period"
          defaultValue={education?.period}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., 2019 - 2023"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={education?.description}
          required
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Describe your studies, projects, and achievements..."
        />
      </div>

      {/* Highlights */}
      <div>
        <label htmlFor="highlights" className="block text-sm font-medium mb-2">
          Highlights
        </label>
        <input
          type="text"
          id="highlights"
          name="highlights"
          defaultValue={education?.highlights?.join(", ") ?? ""}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Dean’s List, GPA 3.9, Research Assistant (comma-separated)"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Separate highlights with commas
        </p>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-2">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          defaultValue={education?.tags?.join(", ") ?? ""}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Computer Science, Software Engineering (comma-separated)"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Separate tags with commas
        </p>
      </div>

      {/* Display Order */}
      <div>
        <label
          htmlFor="display_order"
          className="block text-sm font-medium mb-2"
        >
          Display Order
        </label>
        <input
          type="number"
          id="display_order"
          name="display_order"
          defaultValue={education?.display_order || 0}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="0"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Lower numbers appear first
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
        >
          {loading
            ? "Saving..."
            : education
            ? "Update Education"
            : "Create Education"}
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
  );
}
