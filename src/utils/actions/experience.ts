"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createExperience(formData: FormData) {
  const supabase = await createClient()

  const experienceData = {
    position: formData.get("position") as string,
    company: formData.get("company") as string,
    duration: formData.get("duration") as string,
    description: formData.get("description") as string,
    technologies: (formData.get("technologies") as string).split(",").map((tech) => tech.trim()),
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
  }

  const { error } = await supabase.from("experience").insert([experienceData])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/experience")
  revalidatePath("/")
}

export async function updateExperience(id: string, formData: FormData) {
  const supabase = await createClient()

  const experienceData = {
    position: formData.get("position") as string,
    company: formData.get("company") as string,
    duration: formData.get("duration") as string,
    description: formData.get("description") as string,
    technologies: (formData.get("technologies") as string).split(",").map((tech) => tech.trim()),
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
  }

  const { error } = await supabase.from("experience").update(experienceData).eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/experience")
  revalidatePath("/")
}

export async function deleteExperience(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("experience").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/experience")
  revalidatePath("/")
}
