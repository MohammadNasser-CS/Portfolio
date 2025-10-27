import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminNav } from "@/components/admin-nav"
import { ProjectForm } from "@/components/admin/project-form"

export default async function NewProjectPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: adminUser } = await supabase.from("admin_users").select("id").eq("id", user.id).single()

  if (!adminUser) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add New Project</h1>
          <p className="text-muted-foreground">Create a new portfolio project</p>
        </div>

        <ProjectForm />
      </main>
    </div>
  )
}
