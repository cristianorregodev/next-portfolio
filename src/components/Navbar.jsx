'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { ThemeSwitch } from './ThemeSwitch'
import Image from 'next/image'

export const Navbar = () => {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className={'navbar background'}>
            <Link href="/" className="logo">
                <h2 className="text">
                    <Image src={'/images/p.svg'} width={40} height={40} alt="logo" />
                    co<span className="primary-color">dev</span>
                </h2>
            </Link>

            <nav ref={navRef} className="background">
                <Link href="/" onClick={showNavBar} className="text nav-link-hover">
                    Inicio
                </Link>
                <Link href="/#about" onClick={showNavBar} className="text nav-link-hover">
                    Sobre mí
                </Link>
                <Link href="/projects" onClick={showNavBar} className="text nav-link-hover">
                    Proyectos
                </Link>
                <Link href="/articles" onClick={showNavBar} className="text nav-link-hover">
                    Artículos
                </Link>

                <ThemeSwitch />

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
