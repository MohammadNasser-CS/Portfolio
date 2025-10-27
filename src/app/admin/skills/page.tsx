import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminNav } from "@/components/admin-nav"
import Link from "next/link"
import { DeleteSkillButton } from "@/components/admin/delete-skill-button"

export default async function AdminSkillsPage() {
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

  const { data: skills } = await supabase.from("skills").select("*").order("category").order("display_order")

  // Group skills by category
  const groupedSkills = skills?.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Skills</h1>
            <p className="text-muted-foreground">Add, edit, or delete your skills</p>
          </div>
          <Link
            href="/admin/skills/new"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            + Add Skill
          </Link>
        </div>

        {skills && skills.length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedSkills || {}).map(([category, categorySkills]) => (
              <div key={category}>
                <h2 className="text-xl font-semibold mb-4 capitalize">{category}</h2>
                <div className="grid gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="border border-border bg-card rounded-lg p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                            <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/skills/${skill.id}/edit`}
                            className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                          >
                            Edit
                          </Link>
                          <DeleteSkillButton skillId={skill.id} skillName={skill.name} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">No skills yet</p>
            <Link
              href="/admin/skills/new"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Add Your First Skill
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
