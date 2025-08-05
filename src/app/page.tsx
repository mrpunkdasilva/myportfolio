import {Metadata} from 'next'
import {Hero} from "@/components/Hero"
import {AboutMe} from "@/components/AboutMe"
import {FeaturedProjects} from "@/components/FeaturedProjects"
import {ContactSection} from "@/components/ContactSection"
import {SkillsSection} from "@/components/SkillsSection";
import {ExperienceSection} from "@/components/ExperienceSection";


export const metadata: Metadata = {
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Creative Full Stack Developer crafting digital experiences with modern web technologies.',
    alternates: {
        canonical: 'https://mrpunkdasilva.vercel.app'
    }
}

export default function Home() {
    return (
        <main className="main-container">
            <article>
                <Hero/>
                <AboutMe/>
                <SkillsSection/>
                <ExperienceSection/>
                <FeaturedProjects/>
                <ContactSection/>
                
            </article>
        </main>
    )
}