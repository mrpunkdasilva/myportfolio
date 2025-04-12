export interface Project {
    title: string;
    description: string;
    link?: string;
    // Add other optional properties here
}

export const projects: Project[] = [
    {
        title: "Coffee Website ☕",
        description: "This is a project in which I built a responsive website for a fictional coffee shop using HTML5, CSS3 (Flexbox and Grid) and JavaScript.",
        link: "https://mrnullus.github.io/coffee-website/",
    },
    {
        title: "Food Website 🍴",
        description: "This project consists of a restaurant one page, built with HTML5 & CSS3 Layout Flexbox & Responsive & JavaScript",
        link: "https://mrnullus.github.io/food-website/",
    },
    {
        title: "Recipes Website",
        description: "Responsive website design based on a simple recipe web site",
        link: "https://you-simply-recipes.netlify.app/"
    },
]