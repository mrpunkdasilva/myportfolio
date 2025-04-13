import {Metadata} from 'next'
import {TechnologiesContainer} from '@/components/TechnologiesContainer'
import {ProjectsContainer} from '@/components/ProjectsContainer'
import {Hero} from "@/components/Hero";
import {AboutMe} from "@/components/AboutMe";

export const metadata: Metadata = {
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Creative Full Stack Developer crafting digital experiences with modern web technologies.',
}

export default function Home() {
    return (
        <main className="main-container">
            <Hero/>
            <AboutMe/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}