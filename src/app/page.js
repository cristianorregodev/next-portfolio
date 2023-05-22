'use client'
import { useContext } from 'react'
import { GlobalContext } from '@/context'
import Hero from '@/containers/Home/Hero'
import '../sass/main.scss'
import { About } from '@/containers/Home/About'

export default function Home() {
    const { theme } = useContext(GlobalContext)
    return (
        <main className={theme ? 'dark' : 'light'}>
            <Hero />
            <About />
        </main>
    )
}
