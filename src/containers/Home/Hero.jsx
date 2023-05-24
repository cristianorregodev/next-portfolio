import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Stack } from '../../helpers/prueba'

export default function Hero() {
    return (
        <section className="Hero-container container">
            <div className="Hero-content">
                <h1 className="text">Cristian Orrego</h1>
                <span className="text">Fullstack developer</span>
                <p className="text">
                    Bienvenido a mi sitio web, te invito a que conozcas un poco sobre mí, veas mis
                    proyectos o leas mi blog.
                </p>
                <div className="Stack">
                    <div className="Stack-slide-track">
                        {Stack.map((item) => (
                            <div key={item.id} className="Stack-slide text">
                                {item.element}
                            </div>
                        ))}
                        {Stack.map((item) => (
                            <div key={item.id} className="Stack-slide text">
                                {item.element}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Hero-buttons">
                    <Link href={'/projects'} className="btn btn-primary">
                        Proyectos
                    </Link>
                    <Link href={'/articles'} className="btn btn-secondary">
                        Artículos
                    </Link>
                </div>
            </div>
            <div className="Hero-image">
                <Image src="/images/picture.png" alt="Programador con buzo" fill={true} />
            </div>
        </section>
    )
}
