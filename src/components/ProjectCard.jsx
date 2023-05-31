import Image from 'next/image'
import { BASE_API_URL } from '@/config'

export const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <article className="Project-card background box-shadow">
            <div className="Project-card-image">
                <Image src={BASE_API_URL + project.cover} fill={true} alt={project.title} />
            </div>
            <div className="card-content">
                <h1 className="text">{project.title}</h1>
                <div
                    className="dangerously-html-text ellipsis-3-lines"
                    dangerouslySetInnerHTML={{ __html: project.abstract }}
                ></div>
                <button className="btn btn-secondary">Ver proyecto</button>
            </div>
        </article>
    )
}
