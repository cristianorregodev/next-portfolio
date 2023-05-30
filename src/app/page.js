import Hero from '@/containers/Home/Hero'
import '../sass/main.scss'
import { About } from '@/containers/Home/About'
import { Projects } from '@/containers/Home/Projects'
import { Articles } from '@/containers/Home/Articles'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Articles />
        </main>
    )
}
