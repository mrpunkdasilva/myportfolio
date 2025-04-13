export interface Project {
    title: string;
    description: string;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    keyFeatures: string[];
    learnings: string[];
    link?: string;
    githubLink?: string;
}

export const projects: Project[] = [
    {
        title: "Coffee Website ☕",
        description: "This is a project in which I built a responsive website for a fictional coffee shop using HTML5, CSS3 (Flexbox and Grid) and JavaScript.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
        challenges: ["Implementing responsive design", "Creating smooth animations", "Optimizing performance"],
        solutions: ["Used CSS Grid and Flexbox for layout", "Implemented CSS animations", "Optimized images and assets"],
        keyFeatures: ["Responsive layout", "Interactive menu", "Contact form", "Image gallery"],
        learnings: ["Advanced CSS Grid techniques", "Animation performance optimization", "Mobile-first design"],
        link: "https://mrnullus.github.io/coffee-website/",
        githubLink: "https://github.com/mrnullus/coffee-website"
    },
    {
        title: "Food Website 🍴",
        description: "This project consists of a restaurant one page, built with HTML5 & CSS3 Layout Flexbox & Responsive & JavaScript",
        technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
        challenges: ["Single page navigation", "Menu filtering system", "Mobile responsiveness"],
        solutions: ["Implemented smooth scroll navigation", "Created dynamic menu filters", "Used Flexbox for responsive layouts"],
        keyFeatures: ["One-page design", "Dynamic menu", "Responsive images", "Contact section"],
        learnings: ["Single page application structure", "JavaScript DOM manipulation", "CSS Flexbox mastery"],
        link: "https://mrnullus.github.io/food-website/",
        githubLink: "https://github.com/mrnullus/food-website"
    },
    {
        title: "Recipes Website",
        description: "Responsive website design based on a simple recipe web site",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        challenges: ["Recipe organization", "Search functionality", "Category filtering"],
        solutions: ["Structured recipe data", "Implemented search algorithm", "Created category system"],
        keyFeatures: ["Recipe search", "Category filtering", "Responsive design", "Print-friendly recipes"],
        learnings: ["Search implementation", "Data organization", "User experience design"],
        link: "https://you-simply-recipes.netlify.app/",
        githubLink: "https://github.com/mrnullus/recipes-website"
    }
]