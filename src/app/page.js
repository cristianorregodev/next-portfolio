'use client'
import { useContext } from 'react'
import { GlobalContext } from '@/context'
import Hero from '@/containers/Home/Hero'
import '../sass/main.scss'
import { About } from '@/containers/Home/About'
import { Projects } from '@/containers/Home/Projects'
import { Articles } from '@/containers/Home/Articles'

export default function Home() {
    const { theme } = useContext(GlobalContext)
    return (
        <main className={theme ? 'dark' : 'light'}>
            <Hero />
            <hr className="separator" />
            <About />
            <hr className="separator" />
            <Projects />
            <hr className="separator" />
            <Articles />
        </main>
    )
}
