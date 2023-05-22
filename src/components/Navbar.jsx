'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className="navbar background">
            <Link href="/" className="logo">
                <h2 className="text">
                    co<span>dev</span>
                </h2>
            </Link>

            <nav ref={navRef} className="background">
                <Link href="/#about" onClick={showNavBar} className="text">
                    Sobre mí
                </Link>
                <Link href="/projects" onClick={showNavBar} className="text">
                    Proyectos
                </Link>
                <Link href="/articles" onClick={showNavBar} className="text">
                    Artículos
                </Link>
                <a href="/image-generator" onClick={showNavBar} className="text">
                    Contacto
                </a>

                <button className="nav_close_btn text" onClick={showNavBar}>
                    <AiOutlineClose />
                </button>
            </nav>

            <button className="nav_open_btn text" onClick={showNavBar}>
                <AiOutlineMenu />
            </button>
        </header>
    )
}
