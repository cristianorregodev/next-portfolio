import { Banner } from '@/components/Banner'

export default function ProjectPage({ params }) {
    return <Banner title={params.slug} image="/banner-two.svg" />
}
