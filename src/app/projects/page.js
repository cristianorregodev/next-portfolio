import { Banner } from '@/components/Banner'
import { ListOfProjects } from '@/containers/Projects/ListOfProjects'
import React, { Suspense } from 'react'
import '@/sass/containers/Projects/ListOfProjects.scss'
import { ProjectItemPlaceHolder } from '@/components/placehoolders/ProjectItemPlaceHolder'

export default function ProjectsPage() {
    return (
        <>
            <Banner
                title="Proyectos"
                description="Mis proyectos más destacados. Proyectos personales y para empresaras que he desarrollado."
            />
            <section className="List-of-projects container">
                <Suspense
                    fallback={[1, 2, 3, 4, 5].map((item, idx) => (
                        <ProjectItemPlaceHolder key={idx} />
                    ))}
                >
                    <ListOfProjects />
                </Suspense>
            </section>
        </>
    )
}
