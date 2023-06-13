import Image from 'next/image'
import Script from 'next/script'
import { Banner } from '@/components/Banner'
import { API_URL, BASE_API_URL } from '@/config'
import { getData } from '@/helpers/getData'
import '@/helpers/prism.css'

export default async function ArticlePage({ params }) {
    const { slug } = params
    const { data } = await getData(`${API_URL}/posts/${slug}`)

    return (
        <>
            <Banner
                title={data.title}
                author={data.author}
                category={data.category}
                date={data.date}
                image={BASE_API_URL + data.cover}
            />
            <section className="Article-main-container container">
                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.abstract }}></div>
                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.main_content }}></div>
                <div className="Article-main-image">
                    <Image src={BASE_API_URL + data.image} alt={data.title} fill={true} />
                </div>
                <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.second_content }}></div>
            </section>
            <Script src="/prismjs/prism.js" />
        </>
    )
}
