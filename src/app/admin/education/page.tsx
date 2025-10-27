import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminNav } from "@/components/admin-nav";
import Link from "next/link";
import { DeleteEducationButton } from "@/components/admin/delete-education-button";
import { Education } from "@/lib/types/database-types";

export default async function AdminEducationPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!adminUser) {
    redirect("/admin");
  }

  const { data: educations } = await supabase
    .from("education")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Manage Education</h1>
            <p className="text-muted-foreground">
              Add, edit, or delete your work education
            </p>
          </div>
          <Link
            href="/admin/education/new"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            + Add Education
          </Link>
        </div>

        {educations && educations.length > 0 ? (
          <div className="grid gap-4">
            {educations.map((edu: Education) => (
              <div
                key={edu.id}
                className="border border-border bg-card rounded-lg p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                    <p className="text-base font-medium text-foreground/80 mb-1">
                      {edu.organization}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs border border-border rounded-md mb-3">
                      {edu.period}
                    </span>
                    <details className="text-sm text-muted-foreground mt-1">
                      <summary className="cursor-pointer font-medium">
                        Details
                      </summary>
                      <p className="mt-1">{edu.description}</p>

                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="mt-1 list-disc list-inside space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      )}

                      {edu.tags && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {edu.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </details>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/education/${edu.id}/edit`}
                      className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      Edit
                    </Link>
                    <DeleteEducationButton
                      educationId={edu.id}
                      position={edu.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">
              No education entries yet
            </p>
            <Link
              href="/admin/education/new"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Add Your First Education
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
