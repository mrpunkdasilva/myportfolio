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
        description: "A fully responsive e-commerce website for a premium coffee shop, featuring a modern design, shopping cart functionality, and seamless payment integration. This project demonstrates my ability to create engaging user experiences while handling complex state management and API integrations.",
        technologies: [
            "React.js",
            "TypeScript",
            "Redux Toolkit",
            "Styled Components",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe API"
        ],
        challenges: [
            "Implementing a responsive design that maintains visual appeal across all device sizes",
            "Managing complex state for shopping cart and user sessions",
            "Ensuring secure payment processing with Stripe integration",
            "Optimizing performance with lazy loading and code splitting"
        ],
        solutions: [
            "Utilized CSS Grid and Flexbox for a fluid, responsive layout",
            "Implemented Redux Toolkit for efficient state management",
            "Created reusable components to maintain consistent UI",
            "Added comprehensive error handling and loading states"
        ],
        keyFeatures: [
            "User authentication and profile management",
            "Real-time inventory tracking",
            "Secure payment processing",
            "Order history and tracking",
            "Admin dashboard for inventory management"
        ],
        learnings: [
            "Advanced state management patterns in React",
            "Best practices for e-commerce security",
            "Performance optimization techniques",
            "API integration and error handling"
        ],
        link: "https://mrnullus.github.io/coffee-website/",
        githubLink: "https://github.com/mrnullus/coffee-website"
    },
    {
        title: "Food Website 🍴",
        description: "A modern restaurant management system that streamlines ordering, reservations, and kitchen operations. This full-stack application showcases my ability to create comprehensive business solutions with real-time features and complex backend logic.",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "PostgreSQL",
            "Prisma ORM",
            "WebSocket",
            "Docker",
            "AWS"
        ],
        challenges: [
            "Building a real-time order tracking system",
            "Handling concurrent reservations without conflicts",
            "Implementing a scalable backend architecture",
            "Managing complex database relationships"
        ],
        solutions: [
            "Implemented WebSocket for real-time updates",
            "Created a queue system for reservation management",
            "Used Docker for consistent deployment",
            "Implemented database optimization techniques"
        ],
        keyFeatures: [
            "Real-time order tracking",
            "Table reservation system",
            "Kitchen management interface",
            "Analytics dashboard",
            "Inventory management"
        ],
        learnings: [
            "Microservices architecture",
            "Real-time application development",
            "Database optimization",
            "Cloud deployment strategies"
        ],
        link: "https://mrnullus.github.io/food-website/",
        githubLink: "https://github.com/mrnullus/food-website"
    },
    {
        title: "Recipes Website 📱",
        description: "A social platform for sharing and discovering recipes, featuring user-generated content, advanced search capabilities, and personalized recommendations. This project demonstrates my expertise in building community-driven platforms with complex features.",
        technologies: [
            "Vue.js",
            "Vuex",
            "Node.js",
            "GraphQL",
            "MongoDB",
            "AWS S3",
            "Jest",
            "CI/CD"
        ],
        challenges: [
            "Creating an efficient search algorithm for recipes",
            "Handling image uploads and processing",
            "Implementing social features like following and sharing",
            "Building a recommendation engine"
        ],
        solutions: [
            "Implemented Elasticsearch for advanced search capabilities",
            "Used AWS S3 for scalable image storage",
            "Created a microservices architecture for better scalability",
            "Implemented caching strategies for better performance"
        ],
        keyFeatures: [
            "Recipe creation and sharing",
            "Advanced search and filtering",
            "User profiles and following system",
            "Recipe rating and comments",
            "Personalized recommendations"
        ],
        learnings: [
            "Search optimization techniques",
            "Social platform architecture",
            "Cloud storage management",
            "Testing and CI/CD practices"
        ],
        link: "https://you-simply-recipes.netlify.app/",
        githubLink: "https://github.com/mrnullus/recipes-website"
    }
];