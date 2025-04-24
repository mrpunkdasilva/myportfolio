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
        title: "Coffee Website",
        description: "Development of a responsive landing page for a coffee shop using HTML, CSS, and JavaScript.",
        technologies: ["JavaScript", "CSS", "HTML", "UI/UX", "Semantic HTML", "Web Project Management"],
        challenges: [
            "Creating responsive and modern design",
            "Implementing interactive features",
            "Optimizing for search engines"
        ],
        solutions: [
            "Developed mobile-first responsive layout",
            "Created interactive UI components",
            "Implemented SEO best practices"
        ],
        keyFeatures: [
            "Modern and attractive design with responsive layout",
            "Coffee shop presentation section with history and philosophy",
            "Interactive menu with product details",
            "Engagement features including contact forms and rating system",
            "SEO optimization for better search engine visibility"
        ],
        learnings: [
            "Responsive design implementation",
            "Modern web development practices",
            "SEO optimization techniques"
        ],
        link: "https://mrpunkdasilva.github.io/coffee-website/",
        githubLink: "https://github.com/mrpunkdasilva/coffee-website/"
    },
    {
        title: "Doces da Thay - E-commerce Frontend",
        description: "Frontend development for a dessert e-commerce platform",
        technologies: ["JavaScript", "Git", "jQuery", "Bootstrap", "Project Management"],
        challenges: [
            "Developing a responsive and accessible design",
            "Integrating different technologies into an efficient purchase flow",
            "Adopting good project management practices"
        ],
        solutions: [
            "Implemented responsive design principles",
            "Created seamless integration between technologies",
            "Established efficient project management workflow"
        ],
        keyFeatures: [
            "Development using jQuery, HTML, CSS, Bootstrap, and JavaScript",
            "Responsive and accessible product gallery and shopping screens",
            "Fluid navigation across different devices",
            "Project management using Git for version control",
            "Interactive shopping experience for dessert lovers"
        ],
        learnings: [
            "E-commerce development best practices",
            "Integration of multiple frontend technologies",
            "Project management and version control",
            "Responsive design implementation"
        ],
        link: "https://docinhos-da-thay.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/doces_da_thay"
    },
     {
        title: "Punk Domus - Blog (In Progress)",
        description: "Blog created with Vue and Nuxt Content, featuring a minimalist and responsive design with efficient content management.",
        technologies: ["Vue.js", "Nuxt.js", "Nuxt Content", "JavaScript"],
        challenges: [
            "Adaptation to Nuxt Content for efficient content management",
            "Implementation of Vue.js best practices",
            "Creation of clean and accessible design"
        ],
        solutions: [
            "Implemented SEO-friendly features with Nuxt",
            "Created modular and organized structure",
            "Developed fast and interactive navigation"
        ],
        keyFeatures: [
            "Efficient content management with Nuxt Content",
            "Minimalist and responsive design",
            "SEO optimization",
            "Fast and interactive navigation"
        ],
        learnings: [
            "Vue.js and Nuxt Content mastery",
            "Frontend development best practices",
            "Performance optimization techniques"
        ],
        link: "https://blog-punkdomus.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/nuxt-punk-domus",
        isFeatured: true
    },
    {
        title: "ByteBabe",
        description: "Modular CLI toolkit with cyberpunk aesthetics for development workflow management, featuring Docker, Git, and development tools integration.",
        technologies: ["Python", "Docker", "Git", "CLI", "DevOps"],
        challenges: [
            "Creating modular architecture for extensibility",
            "Implementing unified interface for diverse tools",
            "Developing cyberpunk-themed CLI experience"
        ],
        solutions: [
            "Developed modular system with independent modules",
            "Created consistent CLI interface across tools",
            "Implemented aesthetic terminal UI"
        ],
        keyFeatures: [
            "Docker management (Poseidon Module)",
            "Git operations (Neo Module)",
            "Development tools (Matrix Module)",
            "Database operations (Oracle Module)",
            "Cyberpunk CLI interface"
        ],
        learnings: [
            "CLI application architecture",
            "DevOps tool integration",
            "Python module development"
        ],
        link: "https://mrpunkdasilva.github.io/bytebabe/",
        githubLink: "https://github.com/mrpunkdasilva/bytebabe"
    },
    {
        title: "Opala Filmes",
        description: "Web platform for movie voting and sharing opinions, built with Next.js, Firebase, and TailwindCSS.",
        technologies: ["Next.js", "React", "Firebase", "TailwindCSS", "Headless UI"],
        challenges: [
            "Implementing real-time voting system",
            "Creating efficient movie management",
            "Developing random movie selection algorithm"
        ],
        solutions: [
            "Integrated Firebase for real-time features",
            "Developed organized movie management system",
            "Created engaging user interface"
        ],
        keyFeatures: [
            "Movie watchlist management",
            "5-star voting system",
            "Random movie selection",
            "Watched movies tracking",
            "Dark/light theme",
            "Responsive design"
        ],
        learnings: [
            "Real-time database integration",
            "Modern React patterns",
            "UI/UX best practices"
        ],
        link: "https://opala-filmes.vercel.app/",
        githubLink: "https://github.com/Opaleiros-Foundation/Opala-Filmes"
    },
    {
        title: "Mental Health DB",
        description: "Accessibility-focused website dedicated to Mental Health, featuring comprehensive accessibility resources for diverse users.",
        technologies: ["HTML", "CSS", "JavaScript", "W3C Accessibility", "Responsive Design"],
        challenges: [
            "Implementing Text-to-Speech functionality",
            "Creating accessible dark mode and high contrast features",
            "Integrating Sign Language translation and video subtitles"
        ],
        solutions: [
            "Developed W3C compliant accessibility features",
            "Implemented responsive design for all devices",
            "Created inclusive user experience"
        ],
        keyFeatures: [
            "Text-to-Speech content reading",
            "Dark mode and high contrast options",
            "Sign Language translation",
            "Video subtitles"
        ],
        learnings: [
            "Accessibility best practices",
            "Inclusive design principles",
            "Web standards compliance"
        ],
        link: "https://mrpunkdasilva.github.io/mental-health-db/",
        githubLink: "https://github.com/mrpunkdasilva/mental-health-db"
    },
    {
        title: "VChat",
        description: "Real-time chat application built with Vue.js and Firebase Realtime Database, featuring secure authentication and instant messaging.",
        technologies: ["Vue.js", "Firebase", "JavaScript", "Firebase Authentication", "Realtime Database"],
        challenges: [
            "Integration of Firebase Realtime Database with Vue.js",
            "Implementation of secure authentication flow",
            "Ensuring real-time communication performance"
        ],
        solutions: [
            "Created efficient real-time data synchronization",
            "Implemented secure Firebase Authentication",
            "Developed responsive and intuitive UI"
        ],
        keyFeatures: [
            "Real-time messaging",
            "Secure authentication",
            "Chat room creation",
            "Responsive design"
        ],
        learnings: [
            "Real-time database management",
            "Authentication implementation",
            "Vue.js state management"
        ],
        link: "https://appvchat.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/vchat"
    },
    {
        title: "Multiform",
        description: "Multi-step form application built with ReactJS and TypeScript, featuring dynamic validation and smooth navigation.",
        technologies: ["ReactJS", "TypeScript", "Frontend Development"],
        challenges: [
            "Managing complex form state across multiple steps",
            "Implementing TypeScript validation",
            "Creating fluid navigation between steps"
        ],
        solutions: [
            "Developed efficient state management system",
            "Created robust form validation",
            "Implemented intuitive step navigation"
        ],
        keyFeatures: [
            "Multi-step form flow",
            "Dynamic validation",
            "Responsive design",
            "State persistence"
        ],
        learnings: [
            "Form state management",
            "TypeScript integration",
            "React hooks optimization"
        ],
        link: "https://multiform-react-red.vercel.app/step3",
        githubLink: "https://github.com/mrpunkdasilva/multiform"
    },
    {
        title: "Black Nib - Modern Blog Platform",
        description: "Full-featured blog platform built with React 18 and Node.js, featuring modern state management and server-side rendering.",
        technologies: [
            "React 18", "Vite 6", "TanStack Query 5", "Node.js",
            "Express", "MongoDB", "Docker", "JWT",
            "CSS Modules", "React Router DOM 7"
        ],
        challenges: [
            "Implementation of modern blog architecture",
            "Development of responsive markdown editor",
            "Integration of MongoDB with Docker",
            "Creation of efficient state management system"
        ],
        solutions: [
            "Implemented comprehensive SEO optimization",
            "Created responsive and accessible design",
            "Developed scalable backend architecture"
        ],
        keyFeatures: [
            "Server-side rendering",
            "Dark/Light theme support",
            "Infinite scroll for posts",
            "Category-based organization",
            "Featured posts section",
            "RSS feed support"
        ],
        learnings: [
            "Modern JavaScript technologies",
            "Full-stack development practices",
            "Database integration and containerization"
        ],
        link: "https://blog-black-nilb.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/blog-black-nilb",
        isFeatured: true
    },
    {
        title: "Blooger Website",
        description: "Clean and functional blog interface developed using HTML and CSS, focusing on user experience and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        challenges: [
            "Creating effective layout with pure HTML and CSS",
            "Adapting design for mobile devices",
            "Organizing clean and reusable code"
        ],
        solutions: [
            "Implemented semantic HTML practices",
            "Created responsive design system",
            "Developed modular CSS structure"
        ],
        keyFeatures: [
            "Clean and functional interface",
            "Responsive design",
            "Modern typography and colors",
            "Semantic HTML structure"
        ],
        learnings: [
            "Responsive design techniques",
            "Modern CSS practices",
            "Frontend development best practices"
        ],
        link: "https://mrpunkdasilva.github.io/blooger_website/",
        githubLink: "https://github.com/mrpunkdasilva/blooger_website"
    },
    {
        title: "BigbasketEccomerce - In Progress",
        description: "E-commerce platform built with Angular 19, featuring modern shopping experience and responsive design.",
        technologies: ["Angular", "TypeScript", "RxJS", "Angular Material", "Vercel"],
        challenges: [
            "Building scalable e-commerce architecture",
            "Implementing efficient state management",
            "Creating responsive product catalog"
        ],
        solutions: [
            "Developed modular Angular architecture",
            "Implemented modern state management patterns",
            "Created responsive and intuitive UI"
        ],
        keyFeatures: [
            "Product catalog management",
            "Shopping cart functionality",
            "User authentication",
            "Responsive design",
            "Modern Angular features"
        ],
        learnings: [
            "Angular 19 development",
            "E-commerce architecture",
            "State management patterns"
        ],
        link: "https://bigbasket-eccomerce.vercel.app",
        githubLink: "https://github.com/mrpunkdasilva/bigbasket-ecommerce",
    },
    {
        title: "Budget App",
        description: "JavaScript-powered budget management application with interactive features for tracking income and expenses.",
        technologies: ["JavaScript", "HTML", "CSS"],
        challenges: [
            "Structuring efficient budget calculation logic",
            "Developing user-friendly interface",
            "Ensuring calculation accuracy"
        ],
        solutions: [
            "Implemented real-time calculations",
            "Created responsive design",
            "Developed organized code structure"
        ],
        keyFeatures: [
            "Income and expense management",
            "Automatic balance calculation",
            "Category organization",
            "Responsive design"
        ],
        learnings: [
            "JavaScript data manipulation",
            "Dynamic interface development",
            "Performance optimization"
        ],
        link: "https://mrpunkdasilva.github.io/js-bundget-app/",
        githubLink: "https://github.com/mrpunkdasilva/js-bundget-app"
    },
    {
        title: "Cadmo SA - Dental Clinic System",
        description: "Complete web system for a dental clinic featuring modern interface and comprehensive management capabilities.",
        technologies: [
            "JavaScript", "jQuery", "PHP",
            "MySQL", "Git", "CSS",
            "PhpMyAdmin"
        ],
        challenges: [
            "Technology selection within project constraints",
            "Understanding and implementing client requirements",
            "Integration of multiple system components"
        ],
        solutions: [
            "Applied agile methodologies",
            "Implemented comprehensive system analysis",
            "Developed scalable architecture"
        ],
        keyFeatures: [
            "Modern and intuitive interface",
            "Database integration",
            "User experience focused design",
            "Complete clinic management"
        ],
        learnings: [
            "Project management skills",
            "System analysis techniques",
            "Full-stack development practices"
        ],
        isFeatured: true
    },
    {
        title: "Easy Bank - Landing Page",
        description: "Frontend development of a landing page for a bank",
        technologies: ["SCSS", "JavaScript", "Project Management", "UX/UI", "HTML"],
        challenges: [
            "Implementation of mobile-first design",
            "Creation of interactive and attractive sections",
            "Efficient integration of HTML, JavaScript, and SCSS"
        ],
        solutions: [
            "Applied mobile-first design principles",
            "Developed interactive UI components",
            "Created efficient integration workflow"
        ],
        keyFeatures: [
            "Developed with HTML, JavaScript, and SCSS using mobile-first approach",
            "Optimized design for mobile devices",
            "Interactive sections highlighting bank services",
            "Clear and efficient navigation",
            "Modern and responsive styling with SCSS"
        ],
        learnings: [
            "Mobile-first development approach",
            "SCSS architecture and organization",
            "Modern frontend development practices",
            "Performance optimization"
        ],
        link: "https://ieasybank.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/fem-easybank"
    },
    {
        title: "FocalPoint - Technical Test (To-Do List)",
        description: "To-Do List application built with Next.js (App Router) and SCSS, featuring fluid navigation and optimized performance.",
        technologies: ["Next.js", "SCSS", "TypeScript", "Vercel"],
        challenges: [
            "Maximum design fidelity with precise proportions and gradients",
            "Organizing SCSS code for maintainability and reusability",
            "Meeting 3-day delivery deadline with complete functionality"
        ],
        solutions: [
            "Implemented responsive and accessible design",
            "Created modular SCSS architecture",
            "Delivered high-quality application within deadline"
        ],
        keyFeatures: [
            "Next.js App Router implementation",
            "SCSS modular styling",
            "Task management (CRUD operations)",
            "Responsive and accessible design",
            "High-performance Vercel deployment"
        ],
        learnings: [
            "Next.js App Router optimization",
            "SCSS architecture best practices",
            "Frontend development with design focus"
        ],
        link: "https://focalpoint-punk.vercel.app",
        githubLink: "https://github.com/mrpunkdasilva/focalpoint-teste-tecnico"
    },
    {
        title: "Food Website",
        description: "Modern restaurant website with responsive design and interactive features, built using HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "UX/UI"],
        challenges: [
            "Implementing responsive design across devices",
            "Creating cohesive brand visual identity",
            "Efficient integration of frontend technologies"
        ],
        solutions: [
            "Developed mobile-responsive layouts",
            "Created engaging user interface",
            "Implemented smooth navigation system"
        ],
        keyFeatures: [
            "Interactive menu and photo gallery",
            "Contact form integration",
            "Responsive design",
            "Modern UI/UX",
            "Fluid navigation"
        ],
        learnings: [
            "Responsive design techniques",
            "Brand identity implementation",
            "Frontend integration practices"
        ],
        link: "https://mrpunkdasilva.github.io/food-website/",
        githubLink: "https://github.com/mrpunkdasilva/food-website"
    },
    {
        title: "Belinha's PetShop Frontend",
        description: "Interactive pet shop website featuring jQuery animations and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        challenges: [
            "Implementing dynamic jQuery functionalities",
            "Ensuring cross-device responsiveness",
            "Creating intuitive service navigation"
        ],
        solutions: [
            "Developed interactive animations",
            "Implemented responsive design patterns",
            "Created user-friendly navigation"
        ],
        keyFeatures: [
            "Dynamic jQuery animations",
            "Responsive layout",
            "Product showcase",
            "Service information",
            "Contact integration"
        ],
        learnings: [
            "jQuery animation techniques",
            "Responsive design implementation",
            "Frontend integration skills"
        ],
        link: "https://petshopdabelinha.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/Interfaces-Projetos"
    },
    {
        title: "hDC Host Landing Page",
        description: "Mobile-first responsive landing page for hosting platform with modern design and smooth animations.",
        technologies: ["HTML", "CSS", "JavaScript", "Mobile First"],
        challenges: [
            "Implementing mobile-first responsive design",
            "Creating smooth scroll animations",
            "Optimizing for various screen sizes"
        ],
        solutions: [
            "Applied mobile-first methodology",
            "Implemented smooth transitions",
            "Created responsive layouts"
        ],
        keyFeatures: [
            "Mobile-first approach",
            "Scroll animations",
            "Responsive design",
            "Modern UI",
            "Smooth navigation"
        ],
        learnings: [
            "Mobile-first development",
            "Animation implementation",
            "Responsive design patterns"
        ],
        link: "https://hdchost.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/HTML5-e-CSS3-Tecnicas-Avancadas-4-projetos"
    },
    {
        title: "Simple Recipes",
        description: "Frontend development of a responsive recipes website, featuring intuitive navigation and dynamic filtering capabilities.",
        technologies: ["HTML", "CSS", "JavaScript", "UX/UI", "Project Management"],
        challenges: [
            "Creating intuitive navigation for extensive recipe collection",
            "Implementing responsive design across devices",
            "Integrating dynamic JavaScript features"
        ],
        solutions: [
            "Developed user-friendly interface",
            "Implemented comprehensive filtering system",
            "Created dynamic interactive features"
        ],
        keyFeatures: [
            "Intuitive recipe navigation",
            "Ingredient and category filters",
            "Responsive design",
            "Dynamic annotations and favorites"
        ],
        learnings: [
            "User interface optimization",
            "Dynamic feature implementation",
            "Responsive design techniques"
        ],
        link: "https://you-simply-recipes.netlify.app/",
        githubLink: "https://github.com/mrpunkdasilva/simply-recipes"
    },
    {
        title: "Vuether",
        description: "Weather forecast application built with Vue.js and OpenWeather API, featuring real-time weather updates and responsive design.",
        technologies: ["Vue.js", "JavaScript", "REST API", "OpenWeather API"],
        challenges: [
            "Integrating OpenWeather API effectively",
            "Implementing real-time data updates",
            "Creating responsive weather displays"
        ],
        solutions: [
            "Developed efficient API integration",
            "Created dynamic weather interface",
            "Implemented responsive design"
        ],
        keyFeatures: [
            "Real-time weather data",
            "Location-based forecasts",
            "Multi-day predictions",
            "Responsive interface"
        ],
        learnings: [
            "API integration techniques",
            "Vue.js development",
            "Weather data handling"
        ],
        link: "https://vuether-peach.vercel.app/",
        githubLink: "https://github.com/mrpunkdasilva/vuether"
    },
    {
        title: "Halloween Website",
        description: "Mobile-first responsive Halloween-themed website showcasing modern web development practices.",
        technologies: ["HTML", "CSS", "JavaScript", "Mobile First"],
        challenges: [
            "Implementing mobile-first design approach",
            "Creating theme-consistent visual identity",
            "Ensuring cross-device compatibility"
        ],
        solutions: [
            "Applied mobile-first methodology",
            "Developed cohesive theme design",
            "Created responsive layouts"
        ],
        keyFeatures: [
            "Mobile-first design",
            "Responsive layout",
            "Theme-based aesthetics",
            "Smooth navigation"
        ],
        learnings: [
            "Mobile-first development",
            "Theme-based design",
            "Responsive techniques"
        ],
        link: "https://mrpunkdasilva.github.io/responsive-halloween/",
        githubLink: "https://github.com/mrpunkdasilva/responsive-halloween"
    },
    {
        title: "vMovie",
        description: "Movie search and details webapp built with Vue.js, integrating with OMDb API for comprehensive movie information.",
        technologies: ["Vue.js", "JavaScript", "OMDb API", "Fetch API"],
        challenges: [
            "Integrating OMDb API securely",
            "Creating responsive movie displays",
            "Implementing efficient search functionality"
        ],
        solutions: [
            "Developed secure API integration",
            "Created responsive movie interface",
            "Implemented dynamic search system"
        ],
        keyFeatures: [
            "Movie search functionality",
            "Detailed movie information",
            "Responsive design",
            "Dynamic navigation"
        ],
        learnings: [
            "Vue.js development",
            "API integration",
            "Frontend optimization"
        ],
        githubLink: "https://github.com/mrpunkdasilva/vmovies"
    }
];