import Image from 'next/image'
import React from 'react'
import { AiOutlineFileProtect } from 'react-icons/ai'
import '@/sass/containers/About.scss'

export const About = () => {
    return (
        <section className="About-container container" id="about">
            <h2 className="primary-color section-title">Sobre mí</h2>
            <div className="About-content">
                <div className="About-image">
                    <Image
                        src={'/images/cristian_orrego.webp'}
                        fill={true}
                        alt={'Programador de frente con espacio de trabajo de fondo'}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <article>
                    {/* <span className="text">Hola,</span>
                    <h1 className="text">Mi nombre es Cristian Orrego y soy desarrollador web full stack.</h1> */}
                    <ul className="text">
                        <li>
                            <span>2022 - Presente:</span> Nuevo rol como desarrollador Full Stack, aportando ideas y
                            soluciones en empresa del sector financiero e inmobiliario mejorando procesos internos y la
                            interacción con el usuario final.
                        </li>
                        <li>
                            <span>2020 - 2021:</span> Web master en institución del sector educativo donde además de
                            administrar el sitio web institucional, dí clases de programación y desarrollo web.
                        </li>
                        <li>
                            <span>2020:</span> Primer proyecto web para producción, mejorando la presencia en internet
                            de un colegio local desarrollando un sitio web institucional informativo.
                        </li>
                        <li>
                            <span>2018 - 2019:</span> Primeros pasos en el desarrollo web aprendiendo en mis clases de
                            ingeniería y de forma autodidacta con cursos virtuales, donde creé algunos proyectos
                            personales los cuáles me abrieron las puertas al mundo laboral dentro de la insdustria TI.
                        </li>
                    </ul>
                </article>
            </div>
            <div className="Btn-cv">
                <a
                    href="https://docs.google.com/document/d/1qroZkOm9Bxvuf5LKPC12N-yTHao0oP0hR7HS_8qyZas/edit?usp=sharing"
                    target="_blank"
                >
                    Curriculum <AiOutlineFileProtect />
                </a>
            </div>
        </section>
    )
}
