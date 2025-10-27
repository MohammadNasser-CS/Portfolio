import { createClient } from "@/lib/supabase/server";
import { QuickStats, Skill } from "@/lib/types/database-types";
import type { ReactElement } from "react";

// Icon map for categories
const iconMap: Record<string, () => ReactElement> = {
  "Frontend Development": () => <span>💻</span>,
  "Mobile Development": () => <span>📱</span>,
  "Backend Development": () => <span>🖥️</span>,
  "Database & Storage": () => <span>🗄️</span>,
  "DevOps & Cloud": () => <span>☁️</span>,
  "Tools & Workflow": () => <span>🛠️</span>,
  Additional: () => <span>✨</span>,
};

export default async function SkillsSection() {
  const supabase = await createClient();

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("display_order", { ascending: true });

  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground">No skills available yet.</p>
        </div>
      </section>
    );
  }

  // Separate main and additional skills
  const mainSkills = skills.filter((s) => !s.additional);
  const additionalSkills = skills.filter((s) => s.additional);

  // Group main skills by category
  const skillsByCategory = mainSkills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );
  const { data: projects } = await supabase
    .from("projects")
    .select("id, created_at")
    .order("created_at");

  const stats: QuickStats = {
    projectsCompleted: projects?.length || 0,
    yearsExperience:
      projects && projects.length > 0
        ? new Date().getFullYear() -
          new Date(projects[0].created_at).getFullYear()
        : 2,
    technologies: skills.length,
    clientSatisfaction: 100,
  };
  return (
    <section id="skills" className="py-20 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills across the full
            development stack, from frontend to backend, mobile to cloud.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills]: [string, Skill[]]) => (
              <div
                key={category}
                className="border border-border bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary text-lg">
                      {iconMap[category] && iconMap[category]()}
                    </div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>

                  {/* Optional category description */}
                  {categorySkills[0]?.category_description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {categorySkills[0].category_description}
                    </p>
                  )}

                  {/* Skills List */}
                  <div className="space-y-2">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              {skill.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {skill.category_description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Additional Skills */}
        {additionalSkills.length > 0 && (
          <div className="border border-border bg-card rounded-lg shadow-sm">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Additional Technologies & Tools
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Other technologies I work with regularly
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(
                  additionalSkills.reduce<Record<string, Skill[]>>(
                    (acc, skill) => {
                      if (!acc[skill.category]) acc[skill.category] = [];
                      acc[skill.category].push(skill);
                      return acc;
                    },
                    {}
                  )
                ).map(([category, skillsInCategory]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground/80">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillsInCategory.map((skill) => (
                        <span
                          key={skill.id}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md font-mono"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="border border-border bg-card rounded-lg shadow-sm text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.projectsCompleted}
            </div>
            <div className="text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="border border-border bg-card rounded-lg shadow-sm text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.yearsExperience == 0
                ? stats.yearsExperience
                : stats.yearsExperience + "+"}
            </div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          {/* <div className="border border-border bg-card rounded-lg shadow-sm text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.technologies}
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div> */}
          <div className="border border-border bg-card rounded-lg shadow-sm text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.clientSatisfaction}
            </div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
