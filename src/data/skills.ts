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
            ["react", "vue", "angular", "html", "css", "js", "nextjs", "tailwindcss"].includes(tech.id)
        )
    },
    {
        name: "Backend Development",
        description: "Creating robust and scalable server-side applications",
        skills: technologies.filter(tech => 
            ["java", "python", "php", "express", "springboot", "laravel", "ruby"].includes(tech.id)
        )
    },
    {
        name: "Database Management",
        description: "Working with various database systems",
        skills: technologies.filter(tech => 
            ["mySql", "sqlServer", "postgres", "mongodb", "firebase"].includes(tech.id)
        )
    },
    {
        name: "Development Tools",
        description: "Essential tools for modern development workflow",
        skills: technologies.filter(tech => 
            ["github", "git", "figma"].includes(tech.id)
        )
    }
]