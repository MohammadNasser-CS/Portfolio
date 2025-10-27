import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminNav } from "@/components/admin-nav";
import { EducationForm } from "@/components/admin/education-form";

export default async function EditEducationPage({
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

  const { data: education } = await supabase
    .from("education")
    .select("*")
    .eq("id", awaitedParams.id)
    .single();

  if (!education) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Edit Education</h1>
          <p className="text-muted-foreground">Update the education details</p>
        </div>

        <EducationForm education={education} />
      </main>
    </div>
  );
}
