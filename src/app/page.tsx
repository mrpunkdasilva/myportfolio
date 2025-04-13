import {Metadata} from 'next'
import {ProjectsContainer} from '@/components/ProjectsContainer'
import {Hero} from "@/components/Hero"
import {AboutMe} from "@/components/AboutMe"
import {FeaturedProjects} from "@/components/FeaturedProjects"
import {ContactSection} from "@/components/ContactSection"
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection";

export const metadata: Metadata = {
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Creative Full Stack Developer crafting digital experiences with modern web technologies.',
}

export default function Home() {
    return (
        <main className="main-container">
            <Hero/>
            <AboutMe/>
            <SkillsSection/>
            <FeaturedProjects/>
            <ContactSection/>
            <ProjectsSection/>
        </main>
    )
}