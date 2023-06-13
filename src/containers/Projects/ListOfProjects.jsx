import { getData } from '@/helpers/getData'
import { API_URL } from '@/config'
import { ProjectCard } from '@/components/ProjectCard'
export const ListOfProjects = async () => {
    const { data } = await getData(`${API_URL}/projects`)
    return data.map((project) => <ProjectCard key={project.id} project={project} />)
}
