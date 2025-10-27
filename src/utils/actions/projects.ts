"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
  const supabase = await createClient()

  const projectData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    long_description: formData.get("long_description") as string,
    image: formData.get("image") as string,
    tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
    category: formData.get("category") as string,
    github_url: formData.get("github_url") as string,
    live_url: formData.get("live_url") as string,
    featured: formData.get("featured") === "on",
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
  }

  const { error } = await supabase.from("projects").insert([projectData])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/projects")
  revalidatePath("/")
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient()

  const projectData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    long_description: formData.get("long_description") as string,
    image: formData.get("image") as string,
    tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
    category: formData.get("category") as string,
    github_url: formData.get("github_url") as string,
    live_url: formData.get("live_url") as string,
    featured: formData.get("featured") === "on",
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
  }

  const { error } = await supabase.from("projects").update(projectData).eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/projects")
  revalidatePath("/")
}

export async function deleteProject(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("projects").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/projects")
  revalidatePath("/")
}
