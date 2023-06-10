import { BiArrowToRight } from 'react-icons/bi'
import { ProjectCard } from '@/components/ProjectCard'
import { API_URL } from '@/config'
import { getData } from '@/helpers/getData'

export const Projects = async () => {
    const { data } = await getData(`${API_URL}/projects`)
    const projects = data.slice(0, 3)
    return (
        <section className="Projects-container container">
            <h2 className="primary-color">Proyectos</h2>
            <p className="text">
                Aquí encontrarás una selección de mis proyectos más emocionantes y creativos. Cada proyecto es el
                resultado de mi dedicación y pasión por la programación, y estoy encantado de compartirlos contigo.
                Descubre cómo transformo ideas en realidades digitales. ¡Explora, inspira y crea con mis proyectos de
                software!
            </p>
            <div className="Projects-cards-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <a href="#" className=" primary-color hover">
                Todos los proyectos <BiArrowToRight />
            </a>
        </section>
    )
}
