import technologies  from './technologies'

export interface SkillCategory {
    name: string
    description: string
    skills: typeof technologies
}

export const skillCategories: SkillCategory[] = [
    {
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
        skills: technologies.filter(tech => 
            ["react", "vue", "angular", "html", "css", "js", "typescript", "nextjs", 
             "tailwindcss", "rxjs", "material", "headlessui", "cssmodules", "vite", "tanstack"].includes(tech.id)
        )
    },
    {
        name: "Backend Development",
        description: "Creating robust and scalable server-side applications",
        skills: technologies.filter(tech => 
            ["nodejs", "python", "express"].includes(tech.id)
        )
    },
    {
        name: "Database & State Management",
        description: "Working with various database systems and state management solutions",
        skills: technologies.filter(tech => 
            ["firebase", "mongodb", "mysql", "postgres", "tanstack"].includes(tech.id)
        )
    },
    {
        name: "DevOps & Cloud",
        description: "Managing development operations and cloud infrastructure",
        skills: technologies.filter(tech => 
            ["docker", "git", "vercel", "vite"].includes(tech.id)
        )
    },
    {
        name: "Development Tools",
        description: "Essential tools for modern development workflow",
        skills: technologies.filter(tech => 
            ["github", "figma", "vercel"].includes(tech.id)
        )
    }
];