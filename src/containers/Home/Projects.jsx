import { BiArrowToRight } from 'react-icons/bi'
import { ProjectCard } from '@/components/ProjectCard'

export const Projects = () => {
    return (
        <section className="Projects-container container">
            <h2>Proyectos</h2>
            <p className="text">
                Aquí encontrarás una selección de mis proyectos más emocionantes y creativos. Cada
                proyecto es el resultado de mi dedicación y pasión por la programación, y estoy
                encantado de compartirlos contigo. Descubre cómo transformo ideas en realidades
                digitales. ¡Explora, inspira y crea con mis proyectos de software!
            </p>
            <div className="Projects-cards-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <a href="#">
                Todos los proyectos <BiArrowToRight />
            </a>
        </section>
    )
}
