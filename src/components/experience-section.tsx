import { createClient } from "@/lib/supabase/server";
import { timeline } from "@/lib/portfolio-data";
import { Education, Experience } from "@/lib/types/database-types";
import { GraduationCap } from "lucide-react";

const iconMap = {
  work: () => (
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
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  education: () => (
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
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  ),
  course: () => (
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
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  achievement: () => (
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
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
};

export async function ExperienceSection() {
  const supabase = await createClient();

  const { data: workExperiences } = await supabase
    .from("experience")
    .select("*")
    .order("display_order", { ascending: true });

  const { data: educationEntries } = await supabase
    .from("education")
    .select("*")
    .order("display_order", { ascending: true });

  const hasWork = workExperiences && workExperiences.length > 0;
  const hasEducation = educationEntries && educationEntries.length > 0;

  if (!hasWork && !hasEducation) {
    return (
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            No experience entries available yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Professional Experience & Education
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My professional journey, work experience, and academic background.
          </p>
        </div>

        {/* Experience Timeline */}
        {hasWork && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-balance">
              Professional Experience
            </h2>
            {workExperiences.map((exp: Experience) => (
              <div
                key={exp.id}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2" />
                <div className="border border-border bg-card rounded-lg shadow-sm">
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-sm font-medium text-foreground/80">
                          {exp.company}
                        </p>
                        <span className="inline-block px-2 py-0.5 text-xs border border-border rounded-md mt-1">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <details className="text-sm text-muted-foreground mb-2">
                      <summary className="cursor-pointer font-medium">
                        Details
                      </summary>
                      <p className="mt-1">{exp.description}</p>
                    </details>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section (same style as Experience) */}
        <div className="mt-12 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-balance">
            Education
          </h2>
          {educationEntries!.map((edu: Education) => {
            return (
              <div
                key={edu.id}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2" />
                <div className="border border-border bg-card rounded-lg shadow-sm">
                  <div className="p-4 flex items-start gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {edu.title}
                      </h3>
                      <p className="text-sm font-medium text-foreground/80">
                        {edu.organization}
                      </p>
                      {edu.location && (
                        <p className="text-xs text-muted-foreground">
                          {edu.location}
                        </p>
                      )}
                      <span className="inline-block px-2 py-0.5 text-xs border border-border rounded-md mt-1">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
