import { Banner } from '@/components/Banner'
import { API_URL, BASE_API_URL } from '@/config'
import { getData } from '@/helpers/getData'
import { ArticleBody } from '@/components/ArticleBody'
import '@/sass/containers/Articles/Page.scss'
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

            <ArticleBody data={data} />
        </>
    )
}
