import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMysql,
    DiMsqlServer,
    DiReact,
    DiLaravel,
    DiGithub,
    DiRuby,
    DiPython,
    DiFirebase,
    DiPostgresql,
    DiMongodb, 
    DiAngularSimple, 
    DiJava,
    DiNodejs,
    DiDocker,
    DiAws,
    DiCss3Full // For CSS Modules
} from 'react-icons/di';
import {
    FaPhp,
    FaGitSquare,
    FaFigma,
    FaSass,
    FaJenkins,
    FaDocker,
    FaNpm
} from "react-icons/fa";
import {
    SiTypescript,
    SiExpress,
    SiSpringboot,
    SiVuedotjs,
    SiTailwindcss,
    SiJest,
    SiRedux,
    SiKubernetes,
    SiGraphql,
    SiWebpack,
    SiJira,
    SiSwagger,
    SiAngular,
    SiReactivex,
    SiVercel,
    SiFirebase,
    SiNextdotjs,
    SiVite,
    SiReact
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced';

export interface Technology {
    id: string;
    name: string;
    icon: JSX.Element;
    desc: `${SkillLevel} Skills`;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
    color?: string;
}

export const technologies: Technology[] = [
    // Frontend Technologies
    {
        id: "html",
        name: "HTML5",
        icon: <DiHtml5 />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#E44D26'
    },
    {
        id: "css",
        name: "CSS3",
        icon: <DiCss3 />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#1572B6'
    },
    {
        id: "sass",
        name: "Sass",
        icon: <FaSass />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#CC6699'
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#F0DB4F'
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: <SiTypescript />,
        desc: "Advanced Skills", // Updated based on multiple TypeScript projects
        category: 'frontend',
        color: '#3178C6'
    },
    {
        id: "react",
        name: "React",
        icon: <DiReact />,
        desc: "Advanced Skills",
        category: 'frontend',
        color: '#61DAFB'
    },
    {
        id: "redux",
        name: "Redux",
        icon: <SiRedux />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#764ABC'
    },
    {
        id: "nextjs",
        name: "Next.js",
        icon: <TbBrandNextjs />,
        desc: "Advanced Skills", // Updated based on multiple Next.js projects
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: <SiVuedotjs />,
        desc: "Basic Skills",
        category: 'frontend',
        color: '#4FC08D'
    },
    {
        id: "angular",
        name: "Angular",
        icon: <DiAngularSimple />,
        desc: "Intermediate Skills", // Based on BigbasketEccomerce
        category: 'frontend',
        color: '#DD0031'
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#06B6D4'
    },
    {
        id: "rxjs",
        name: "RxJS",
        icon: <SiReactivex />,
        desc: "Intermediate Skills", // Based on BigbasketEccomerce
        category: 'frontend',
        color: '#B7178C'
    },
    {
        id: "material",
        name: "Angular Material",
        icon: <SiAngular />, // Changed from SiAngularmaterial to SiAngular
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#3F51B5'
    },
    {
        id: "headlessui",
        name: "Headless UI",
        icon: <SiReact />, // Using React icon as alternative
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#66E3FF'
    },
    {
        id: "cssmodules",
        name: "CSS Modules",
        icon: <DiCss3Full />, // Using CSS3 icon as alternative
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#000000'
    },
    {
        id: "vite",
        name: "Vite",
        icon: <SiVite />,
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#646CFF'
    },
    {
        id: "tanstack",
        name: "TanStack Query",
        icon: <DiReact />, // Using React icon as it's commonly used with React
        desc: "Intermediate Skills",
        category: 'frontend',
        color: '#FF4154'
    },

    // Backend Technologies
    {
        id: "nodejs",
        name: "Node.js",
        icon: <DiNodejs />,
        desc: "Advanced Skills",
        category: 'backend',
        color: '#339933'
    },
    {
        id: "express",
        name: "Express",
        icon: <SiExpress />,
        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'backend',
        color: '#000000'
    },
    {
        id: "java",
        name: "Java",
        icon: <DiJava />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#007396'
    },
    {
        id: "springboot",
        name: "Spring Boot",
        icon: <SiSpringboot />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#6DB33F'
    },
    {
        id: "php",
        name: "PHP",
        icon: <FaPhp />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#777BB4'
    },
    {
        id: "laravel",
        name: "Laravel",
        icon: <DiLaravel />,
        desc: "Intermediate Skills",
        category: 'backend',
        color: '#FF2D20'
    },
    {
        id: "python",
        name: "Python",
        icon: <DiPython />,
        desc: "Advanced Skills",
        category: 'backend',
        color: '#3776AB'
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: <SiGraphql />,
        desc: "Basic Skills",
        category: 'backend',
        color: '#E10098'
    },

    // Database Technologies
    {
        id: "mysql",
        name: "MySQL",
        icon: <DiMysql />,
        desc: "Intermediate Skills",
        category: 'database',
        color: '#4479A1'
    },
    {
        id: "postgres",
        name: "PostgreSQL",
        icon: <DiPostgresql />,
        desc: "Intermediate Skills",
        category: 'database',
        color: '#336791'
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: <DiMongodb />,
        desc: "Advanced Skills", // Updated based on Black Nib project
        category: 'database',
        color: '#47A248'
    },
    {
        id: "sqlServer",
        name: "SQL Server",
        icon: <DiMsqlServer />,
        desc: "Basic Skills",
        category: 'database',
        color: '#CC2927'
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <DiFirebase />,
        desc: "Advanced Skills", // Updated based on VChat and Opala Filmes
        category: 'database',
        color: '#FFCA28'
    },

    // DevOps & Tools
    {
        id: "git",
        name: "Git",
        icon: <FaGitSquare />,
        desc: "Advanced Skills",
        category: 'devops',
        color: '#F05032'
    },
    {
        id: "github",
        name: "GitHub",
        icon: <DiGithub />,
        desc: "Advanced Skills",
        category: 'devops',
        color: '#181717'
    },
    {
        id: "docker",
        name: "Docker",
        icon: <FaDocker />,
        desc: "Advanced Skills",
        category: 'devops',
        color: '#2496ED'
    },
    {
        id: "kubernetes",
        name: "Kubernetes",
        icon: <SiKubernetes />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#326CE5'
    },
    {
        id: "aws",
        name: "AWS",
        icon: <DiAws />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#232F3E'
    },
    {
        id: "jenkins",
        name: "Jenkins",
        icon: <FaJenkins />,
        desc: "Basic Skills",
        category: 'devops',
        color: '#D24939'
    },

    // Development Tools
    {
        id: "jest",
        name: "Jest",
        icon: <SiJest />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#C21325'
    },
    {
        id: "webpack",
        name: "Webpack",
        icon: <SiWebpack />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#8DD6F9'
    },
    {
        id: "npm",
        name: "NPM",
        icon: <FaNpm />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#CB3837'
    },
    {
        id: "jira",
        name: "Jira",
        icon: <SiJira />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#0052CC'
    },
    {
        id: "swagger",
        name: "Swagger",
        icon: <SiSwagger />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#85EA2D'
    },
    {
        id: "figma",
        name: "Figma",
        icon: <FaFigma />,
        desc: "Intermediate Skills",
        category: 'tools',
        color: '#F24E1E'
    },
    {
        id: "vercel",
        name: "Vercel",
        icon: <SiVercel />,
        desc: "Advanced Skills",
        category: 'tools',
        color: '#000000'
    }
];

export default technologies;