"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createSkill(formData: FormData) {
  const supabase = await createClient()

  const skillData = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    category_description: (formData.get("category_description") as string) || null,
    proficiency: Number.parseInt(formData.get("proficiency") as string) || 50,
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
    additional: formData.get("additional") === "on" ? true : false,
  }

  const { error } = await supabase.from("skills").insert([skillData])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/skills")
  revalidatePath("/")
}

export async function updateSkill(id: string, formData: FormData) {
  const supabase = await createClient()

  const skillData = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    category_description: (formData.get("category_description") as string) || null,
    proficiency: Number.parseInt(formData.get("proficiency") as string) || 50,
    display_order: Number.parseInt(formData.get("display_order") as string) || 0,
    additional: formData.get("additional") === "on" ? true : false,
  }

  const { error } = await supabase.from("skills").update(skillData).eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/skills")
  revalidatePath("/")
}

export async function deleteSkill(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("skills").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/skills")
  revalidatePath("/")
}
