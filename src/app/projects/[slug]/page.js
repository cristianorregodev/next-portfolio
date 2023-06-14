import { AiOutlineTag, AiOutlineUser, AiOutlineCalendar, AiOutlineCodeSandbox } from 'react-icons/ai'
import { Banner } from '@/components/Banner'
import { API_URL, BASE_API_URL } from '@/config'
import { getData } from '@/helpers/getData'
import Image from 'next/image'

export default async function ProjectPage({ params }) {
    const { slug } = params
    const { data } = await getData(`${API_URL}/projects/${slug}`)

    return (
        <>
            <Banner title={data.title} image="/banner-two.svg" />
            <section className="Project-main-container container">
                <ul className="Project-info">
                    <li>
                        <AiOutlineUser />{' '}
                        <a href={data?.links?.url} target="_blank">
                            {data.client}
                        </a>
                    </li>
                    <li>
                        <AiOutlineCalendar /> {data.created_at}
                    </li>
                    <li>
                        <AiOutlineTag /> {data.category}
                    </li>
                    <li>
                        <AiOutlineCodeSandbox />
                        <ul>
                            {data.technologies.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.abstract }}></div>
                <div className="Project-main-image box-shadow">
                    <Image src={BASE_API_URL + data.cover} alt={data.title} fill={true} />
                </div>
                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                <Image
                    src={BASE_API_URL + data.image}
                    alt={data.title}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="Project-preview-image box-shadow"
                />

                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.conclusion }}></div>
            </section>
        </>
    )
}
