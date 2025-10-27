import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function AdminNav() {
  const handleSignOut = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/auth/login");
  };

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="text-xl font-bold">
              Admin Panel
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/admin/projects"
                className="text-sm hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/admin/skills"
                className="text-sm hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/admin/experience"
                className="text-sm hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/admin/education"
                className="text-sm hover:text-primary transition-colors"
              >
                Education
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              View Site
            </Link>
            <form action={handleSignOut}>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
