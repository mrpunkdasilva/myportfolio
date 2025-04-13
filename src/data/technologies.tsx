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
    DiJavascript,
    DiPostgresql,
    DiMongodb, DiAngularSimple, DiJava
} from 'react-icons/di';
import {FaPhp} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";
import {SiExpress, SiSpringboot, SiVuedotjs} from "react-icons/si";
import {FaGitSquare} from "react-icons/fa";
import {FaFigma} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";

const technologies = [
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>, desc: "Intermediate Skills"},
    {id: "java", name: "Java", icon: <DiJava color={"red"}/>, desc: "Intermediate Skills"},
    {id: "mySql", name: "MySQL", icon: <DiMysql/>, desc: "Intermediate Skills"},
    {id: "sqlServer", name: "SQL Server", icon: <DiMsqlServer/>, desc: "Basic Skills"},
    {id: "react", name: "React", icon: <DiReact/>, desc: "Intermediate Skills"},
    {id: "php", name: "PHP", icon: <FaPhp/>, desc: "Intermediate Skills"},
    {
        id: "laravel",
        name: "Laravel",
        icon: <DiLaravel/>,
        desc: "Intermediate Skills",
    },
    {
        id: "python",
        name: "Python",
        icon: <DiPython color={"green"}/>,
        desc: "Intermediate Skills",
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",
        icon: <SiTailwindcss/>,
        desc: "Intermediate Skills"
    },
    {
        id: "nextjs",
        name: "Next.js",
        icon: <TbBrandNextjs color={"gray"} />,
        desc: "Beginner Skills",
    },
    {
        id: "express",
        name: "Express",
        icon: <SiExpress/>,
        desc: "Intermediate Skills",
    },
    {
        id: "github",
        name: "GitHub",
        icon: <DiGithub color={"white"}/>,
        desc: "Advanced Skills",
    },
    {
        id: "ruby",
        name: "Ruby",
        icon: <DiRuby/>,
        desc: "Intermediate Skills",
    },
    {
        id: "figma",
        name: "Figma",
        icon: <FaFigma/>,
        desc: "Intermediate Skills",
    },
    {
        id: "git",
        name: "Git",
        icon: <FaGitSquare/>,
        desc: "Advanced Skills",
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <DiFirebase/>,
        desc: "Intermediate Skills",
    },
    {id: "html", name: "HTML5", icon: <DiHtml5/>, desc: "Advanced Skills"},
    {id: "css", name: "CSS3", icon: <DiCss3/>, desc: "Advanced Skills"},
    {
        id: "springboot",
        name: "Spring Boot",
        icon: <SiSpringboot color={"green"}/>,
        desc: "Basic Skills"
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: <SiVuedotjs color={"#29b73e"}/>,
        desc: "Basic Skills"
    },
    {
        id: "angular",
        name: "Angular",
        icon: <DiAngularSimple color={"red"}/>,
        desc: "Basic Skills"
    },
    {
        id: "postgres",
        name: "PostgreSQL",
        icon: <DiPostgresql color={"lightblue"}/>,
        desc: "Intermediate Skills"
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: <DiMongodb color={"lime"}/>,
        desc: "Intermediate Skills"
    }
];

export default technologies;