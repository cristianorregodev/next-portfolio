import Image from 'next/image'
import React from 'react'

export const About = () => {
    return (
        <section className="About-container container" id="about">
            <h2>Sobre mí</h2>
            <div className="About-content">
                <article>
                    <span className="text">Hola,</span>
                    <h1 className="text">
                        Mi nombre es Cristian Orrego y soy desarrollador web full stack.
                    </h1>
                    <ul className="text">
                        <li>
                            Inicié en el mundo del desarrollo web hace 5 años, realizando algunos
                            cursos virtuales mientras me formaba como ingeniero en sistemas.
                        </li>
                        <li>
                            Luego de un tiempo y crear algunos proyectos personales, publiqué mi
                            primera página web para producción y desde entonces comprendí todo lo
                            que podía hacer.
                        </li>
                        <li>
                            Después de 2 años de continuo aprendizaje conseguí mi primer trabajo
                            como desarrollador, donde además de mantener un sitio web pequeño,
                            también impartía clases de programación básica y diseño web.
                        </li>
                        <li>
                            Cuando estás inmerso en la tecnología te das cuenta que nunca paras de
                            aprender, gracias a ello y mi curiosidad por descubirir cosas nuevas,
                            aprendí nuevas tecnologías las cuales me permitieron construir
                            aplicaciones de gran escala.
                        </li>
                        <li>
                            Actualmente soy desarrollador Full Stack con más de 3 años de
                            experiencia, pero sé que el camino es largo y aún tengo mucho por
                            aprender, por hacer.
                        </li>
                    </ul>
                </article>
                <div>
                    <Image
                        src={'/images/cristian_orrego.webp'}
                        fill={true}
                        alt={'Programador de frente con espacio de trabajo de fondo'}
                    />
                </div>
            </div>
        </section>
    )
}
