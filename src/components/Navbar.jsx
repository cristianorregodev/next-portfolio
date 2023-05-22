'use client'
import Link from 'next/link'
import React, { useRef, useContext } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiMoon, BiSun } from 'react-icons/bi'
import Switch from 'react-switch'
import { GlobalContext } from '@/context'

export const Navbar = () => {
    const { theme, toggleTheme } = useContext(GlobalContext)
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className={`'navbar background' ${theme ? 'dark' : 'light'}`}>
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
                <Switch
                    onChange={toggleTheme}
                    checked={theme}
                    offColor="#494646"
                    onColor="#007D99"
                    uncheckedIcon={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: 15,
                                color: 'white',
                                paddingRight: 2,
                            }}
                        >
                            <BiSun />
                        </div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: 15,
                                color: 'white',
                                paddingRight: 2,
                            }}
                        >
                            <BiMoon />
                        </div>
                    }
                    uncheckedHandleIcon={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: 20,
                            }}
                        >
                            <BiMoon />
                        </div>
                    }
                    checkedHandleIcon={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                color: '#007D99',
                                fontSize: 18,
                            }}
                        >
                            <BiSun />
                        </div>
                    }
                />
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
