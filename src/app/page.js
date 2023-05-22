import Hero from '@/containers/Home/Hero'
import '../sass/main.scss'
import { About } from '@/containers/Home/About'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
        </>
    )
}
