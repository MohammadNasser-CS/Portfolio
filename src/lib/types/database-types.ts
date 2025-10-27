export interface Project {
    id: string
    title: string
    description: string
    long_description: string
    image: string | null
    tags: string[]
    category: string
    github_url: string | null
    live_url: string | null
    featured: boolean
    display_order: number
    created_at: string
    updated_at: string
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    category_description?: string; // optional
    proficiency: number;
    display_order: number;
    additional: boolean; // indicates additional skill
    created_at: string;
    updated_at: string;
}


export interface Experience {
    id: string
    company: string
    position: string
    duration: string
    description: string
    technologies: string[]
    display_order: number
    created_at: string
    updated_at: string
}
export type Education = {
    id: string;
    title: string;
    organization: string;
    location?: string | null;
    period: string;
    description: string;
    highlights: string[];
    tags: string[];
    display_order?: number;
    created_at?: string;
    updated_at?: string;
};

export interface AdminUser {
    id: string
    email: string
    created_at: string
}
export interface QuickStats {
    projectsCompleted: number;
    yearsExperience: number;
    technologies: number;
    clientSatisfaction: number;
}