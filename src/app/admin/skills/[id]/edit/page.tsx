import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminNav } from "@/components/admin-nav";
import { SkillForm } from "@/components/admin/skill-form";

export default async function EditSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const awaitedParams = await params;
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

  const { data: skill } = await supabase
    .from("skills")
    .select("*")
    .eq("id", awaitedParams.id)
    .single();

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Edit Skill</h1>
          <p className="text-muted-foreground">Update the skill details</p>
        </div>

        <SkillForm skill={skill} />
      </main>
    </div>
  );
}
