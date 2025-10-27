import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminNav } from "@/components/admin-nav"
import Link from "next/link"
import { DeleteExperienceButton } from "@/components/admin/delete-experience-button"

export default async function AdminExperiencePage() {
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

  const { data: experiences } = await supabase
    .from("experience")
    .select("*")
    .order("display_order", { ascending: true })

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Experience</h1>
            <p className="text-muted-foreground">Add, edit, or delete your work experience</p>
          </div>
          <Link
            href="/admin/experience/new"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            + Add Experience
          </Link>
        </div>

        {experiences && experiences.length > 0 ? (
          <div className="grid gap-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="border border-border bg-card rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <p className="text-base font-medium text-foreground/80 mb-1">{exp.company}</p>
                    <span className="inline-block px-3 py-1 text-xs border border-border rounded-md mb-3">
                      {exp.duration}
                    </span>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech: string) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/experience/${exp.id}/edit`}
                      className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      Edit
                    </Link>
                    <DeleteExperienceButton experienceId={exp.id} position={exp.position} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">No experience entries yet</p>
            <Link
              href="/admin/experience/new"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Add Your First Experience
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
