import { ArticleCard } from '@/components/ArticleCard'
import { getData } from '@/helpers/getData'
import { API_URL } from '@/config'

export const Articles = async () => {
    const { data } = await getData(`${API_URL}/posts`)
    const articles = data.slice(0, 6)
    return (
        <section className="Articles-container container">
            <h2 className="primary-color section-title">Últimos artículos</h2>
            <div className="Articles-cards-container">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    )
}
