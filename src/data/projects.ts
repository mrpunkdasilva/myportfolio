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
    isFeatured?: boolean;
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
        title: "Alurakut",
        description: "This project consists of a copy's Orkut make in React, NextJS, StyledComponents and using concept of BFF (Backend For Frontend) and consuming API in FrontEnd",
        technologies: ["React", "Next.js", "Styled Components", "API Integration"],
        challenges: ["Implementing BFF architecture", "Replicating Orkut's features", "API integration"],
        solutions: ["Created BFF layer", "Used Styled Components for styling", "Implemented API consumption"],
        keyFeatures: ["Social network features", "Modern UI", "API integration", "Responsive design"],
        learnings: ["BFF architecture", "API integration", "Modern React patterns"],
        link: "https://alurakut-delta-dun.vercel.app/",
        githubLink: "https://github.com/mrnullus/alurakut"
    },
    {
        title: "HDCHOST",
        description: "HDCHost is an landing page for enterprise of host and domain web project",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        challenges: ["Creating engaging landing page", "Optimizing conversion rate", "Mobile responsiveness"],
        solutions: ["Implemented modern design", "Optimized user flow", "Mobile-first approach"],
        keyFeatures: ["Hosting plans", "Domain search", "Contact form", "Responsive design"],
        learnings: ["Landing page optimization", "Conversion optimization", "UX design"],
        link: "https://hdchost.vercel.app/",
        githubLink: "https://github.com/mrnullus/hdchost"
    },
    {
        title: "ioGalery",
        description: "System gallery make in React & TypeScript and using for database the Firebase",
        technologies: ["React", "TypeScript", "Firebase", "CSS3"],
        challenges: ["Image management", "Real-time updates", "Type safety"],
        solutions: ["Firebase integration", "TypeScript implementation", "Optimized image loading"],
        keyFeatures: ["Image upload", "Real-time gallery", "User authentication", "Image management"],
        learnings: ["Firebase integration", "TypeScript with React", "Real-time database"],
        link: "https://gallery-react-typescript.vercel.app/",
        githubLink: "https://github.com/mrnullus/gallery-react-typescript"
    },
    {
        title: "React Search",
        description: "In this project I put into practice ways of doing research with React.Being them: Simple search locally, With Database, With API",
        technologies: ["React", "JavaScript", "API Integration", "Database"],
        challenges: ["Multiple search implementations", "Performance optimization", "Search accuracy"],
        solutions: ["Implemented various search methods", "Optimized search algorithms", "API integration"],
        keyFeatures: ["Local search", "Database search", "API search", "Real-time results"],
        learnings: ["Search implementations", "Performance optimization", "API integration"],
        link: "https://react-search-sand.vercel.app/",
        githubLink: "https://github.com/mrnullus/react-search"
    },
    {
        title: "MyGatsby",
        description: "MyGatsby, which will be a HTML, CSS and JS code generator. It will soon move on to other stacks such as Python with Django, PHP (CodeIgniter and/or Laravel), etc...",
        technologies: ["HTML5", "CSS3", "JavaScript", "Code Generation"],
        challenges: ["Code generation logic", "Multiple framework support", "User interface"],
        solutions: ["Implemented code templates", "Created generation algorithms", "Built user interface"],
        keyFeatures: ["Code generation", "Multiple frameworks", "Template system", "Export functionality"],
        learnings: ["Code generation patterns", "Template systems", "Framework integration"],
        link: "https://my-gatsby.netlify.app/",
        githubLink: "https://github.com/mrnullus/my-gatsby"
    }
]