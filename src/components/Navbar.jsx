'use client'
import React, { useRef } from 'react'

export const Navbar = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className="navbar background">
            <a href="/" className="logo">
                <h2 className="text">cristianorregodev</h2>
            </a>

            <nav ref={navRef} className="background">
                <a href="/#about" onClick={showNavBar} className="text">
                    Sobre mí
                </a>
                <a href="/welcome" onClick={showNavBar} className="text">
                    Proyectos
                </a>
                <a href="/text-generator" onClick={showNavBar} className="text">
                    Artículos
                </a>
                <a href="/image-generator" onClick={showNavBar} className="text">
                    Contacto
                </a>

                <button className="nav_close_btn text" onClick={showNavBar}>
                    X
                </button>
            </nav>

            <button className="nav_open_btn text" onClick={showNavBar}>
                O
            </button>
        </header>
    )
}
