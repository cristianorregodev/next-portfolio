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
                            Inicié en el desarrollo web hace 5 años, realizando algunos cursos
                            virtuales mientras me formaba como ingeniero en sistemas.
                        </li>
                        <li>
                            Luego de más de 1 año y crear algunos proyectos personales, publiqué el
                            primer sitio web para un cliene en producción, saber que otras personas
                            harían uso de algo hecho por mí fue una gran motivación.
                        </li>
                        <li>
                            Después de 2 años de continuo aprendizaje conseguí mi primer trabajo
                            como desarrollador en una institución educativa, donde además de diseñar
                            y desarrollar el sitio web institucional, impartí clases de programación
                            básica y diseño web.
                        </li>
                        <li>
                            Con la tecnología te das cuenta que nunca paras de aprender, gracias a
                            ello y mi curiosidad por descubirir, aprendí nuevas tecnologías las
                            cuales me permitieron construir aplicaciones web completas y obener un
                            nuevo cargo en el área de tecnología de una empresa a nivel nacional.
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
