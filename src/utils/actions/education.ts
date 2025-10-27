"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createEducation(formData: FormData) {
    const supabase = await createClient();

    const educationData = {
        title: formData.get("title") as string,
        organization: formData.get("organization") as string,
        location: formData.get("location") as string,
        period: formData.get("period") as string,
        description: formData.get("description") as string,
        highlights: (formData.get("highlights") as string)
            ?.split(",")
            .map((item) => item.trim())
            .filter((item) => item.length > 0) || [],
        tags: (formData.get("tags") as string)
            ?.split(",")
            .map((item) => item.trim())
            .filter((item) => item.length > 0) || [],
        display_order: Number.parseInt(formData.get("display_order") as string) || 0,
    };

    const { error } = await supabase.from("education").insert([educationData]);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/education");
    revalidatePath("/");
}

export async function updateEducation(id: string, formData: FormData) {
    const supabase = await createClient();

    const educationData = {
        title: formData.get("title") as string,
        organization: formData.get("organization") as string,
        location: formData.get("location") as string,
        period: formData.get("period") as string,
        description: formData.get("description") as string,
        highlights: (formData.get("highlights") as string)
            ?.split(",")
            .map((item) => item.trim())
            .filter((item) => item.length > 0) || [],
        tags: (formData.get("tags") as string)
            ?.split(",")
            .map((item) => item.trim())
            .filter((item) => item.length > 0) || [],
        display_order: Number.parseInt(formData.get("display_order") as string) || 0,
    };

    const { error } = await supabase.from("education").update(educationData).eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/education");
    revalidatePath("/");
}

export async function deleteEducation(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("education").delete().eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/education");
    revalidatePath("/");
}
