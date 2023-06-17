import Image from 'next/image'
import { BASE_API_URL } from '@/config'
import Link from 'next/link'
import '@/sass/components/ProjectCard.scss'

export const ProjectCard = ({ project }) => {
    return (
        <Link href={`/projects/${project.slug}`} className="Project-card background box-shadow">
            <div className="Project-card-image">
                <Image src={BASE_API_URL + project.cover} fill={true} alt={project.title} />
            </div>
            <div className="card-content">
                <h1 className="primary-color">{project.title}</h1>
                <div
                    className="dangerously-html-text ellipsis-3-lines"
                    dangerouslySetInnerHTML={{ __html: project.abstract }}
                ></div>
                <div className="card-footer">
                    <h4 className="primary-color">Stack</h4>
                    <ul>
                        {project.technologies.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <h3 className="primary-color">
                        Categoria: <p className="text">{project.category}</p>
                    </h3>
                </div>
            </div>
        </Link>
    )
}
