import './style.sass'
import { Project } from '@/data/projects'

export const ProjectArticle = ({ title, description, link }: Project) => {
    return (
        <article className="project-article">
            <h3>{title}</h3>
            <p>{description}</p>
            <br />
            {link && <a className='btn' target='_blank' rel="noopener noreferrer" href={link}>View Project</a>}
        </article>
    )
}