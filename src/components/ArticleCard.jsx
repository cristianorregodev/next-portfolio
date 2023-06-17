import Link from 'next/link'
import React from 'react'
import '@/sass/components/ArticleCard.scss'

export const ArticleCard = ({ article }) => {
    return (
        <Link href={`/articles/${article.slug}`} className="Article-card Article-hover">
            <div className="Article-card-content">
                <div className="Article-caegory">
                    <span className="text">{article.category}</span>
                </div>
                <h1 className="primary-color">{article.title}</h1>
                <h4
                    className="dangerously-html-text ellipsis-2-lines"
                    dangerouslySetInnerHTML={{ __html: article.abstract }}
                ></h4>
                <div className="Article-author">
                    <span className="secondary-color">{article.date}</span>
                </div>
            </div>
        </Link>
    )
}
