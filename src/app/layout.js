import { GlobalContextProvider } from '@/context'
import { Navbar } from '@/components/Navbar'
import { Providers } from './Providers'
import { Footer } from '@/components/Footer'

export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | FullStack, React, Next, Laravel, NodeJS, Desarrollo',
    description:
        'Mi nombre es Cristian Orrego y soy desarrollador web full stack. Inicié en el mundo del desarrollo web hace 5 años, realizando algunos cursos virtuales mientras me formaba como ingeniero en sistemas. Luego de un tiempo y crear algunos proyectos personales, publiqué mi primera página web para producción y desde entonces comprendí todo lo que podía hacer. Después de 2 años de continuo aprendizaje conseguí mi primer trabajo como desarrollador, donde además de mantener un sitio web pequeño, también impartía clases de programación básica y diseño web. Cuando estás inmerso en la tecnología te das cuenta que nunca paras de aprender, gracias a ello y mi curiosidad por descubirir cosas nuevas, aprendí nuevas tecnologías las cuales me permitieron construir aplicaciones de gran escala. Actualmente soy desarrollador Full Stack con más de 3 años de experiencia, pero sé que el camino es largo y aún tengo mucho por aprender, por hacer.',
}

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
