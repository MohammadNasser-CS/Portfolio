"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createSkill, updateSkill } from "@/utils/actions/skills";
import { Skill } from "@/lib/types/database-types";

interface SkillFormProps {
  skill?: Skill;
}

export function SkillForm({ skill }: SkillFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      if (skill) {
        await updateSkill(skill.id, formData);
      } else {
        await createSkill(formData);
      }
      router.push("/admin/skills");
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

      {/* Skill Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Skill Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={skill?.name}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., React, TypeScript, Node.js"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-2">
          Category *
        </label>
        <select
          id="category"
          name="category"
          defaultValue={skill?.category || "Frontend Development"}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Database & Storage">Database & Storage</option>
          <option value="DevOps & Cloud">DevOps & Cloud</option>
          <option value="Tools & Workflow">Tools & Workflow</option>
          <option value="Testing">Testing</option>
          <option value="State Management">State Management</option>
          <option value="Authentication">Authentication</option>
          <option value="Payment Integration">Payment Integration</option>
          <option value="Real-time">Real-time</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Category Description */}
      <div>
        <label
          htmlFor="category_description"
          className="block text-sm font-medium mb-2"
        >
          Category Description
        </label>
        <textarea
          id="category_description"
          name="category_description"
          defaultValue={skill?.category_description || ""}
          rows={3}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Optional description of the category"
        />
      </div>

      {/* Proficiency */}
      <div>
        <label htmlFor="proficiency" className="block text-sm font-medium mb-2">
          Proficiency (0-100) *
        </label>
        <input
          type="number"
          id="proficiency"
          name="proficiency"
          min="0"
          max="100"
          defaultValue={skill?.proficiency || 50}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
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
          defaultValue={skill?.display_order || 0}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="0"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Lower numbers appear first
        </p>
      </div>

      {/* Additional Skill */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="additional"
          name="additional"
          defaultChecked={skill?.additional || false}
          className="w-4 h-4 border border-border rounded bg-background focus:ring-2 focus:ring-primary"
        />
        <label htmlFor="additional" className="text-sm font-medium">
          Mark as Additional Skill
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
        >
          {loading ? "Saving..." : skill ? "Update Skill" : "Create Skill"}
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
