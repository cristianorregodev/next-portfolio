import { Banner } from '@/components/Banner'
import { ListOfProjects } from '@/containers/Projects/ListOfProjects'
import React from 'react'

export default function ProjectsPage() {
    return (
        <>
            <Banner
                title="Proyectos"
                description="Mis proyectos más destacados. Proyectos personales y para empresaras que he desarrollado."
            />
            <section className="List-of-projects container">
                <ListOfProjects />
            </section>
        </>
    )
}
