import Image from 'next/image'

export const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <article className="Project-card background box-shadow">
            <div className="Project-card-image">
                <Image src={project.cover} fill={true} alt={project.title} />
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
