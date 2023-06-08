import Link from 'next/link'
import React from 'react'

export const ArticleCard = ({ article }) => {
    return (
        <Link href={`/articles/${article.slug}`} className="Article-card Article-hover">
            <div className="Article-card-content">
                <div className="Article-caegory">
                    <span className="text">{article.category}</span>
                </div>
                <h1 className="text">{article.title}</h1>
                <h4
                    className="dangerously-html-text ellipsis-2-lines"
                    dangerouslySetInnerHTML={{ __html: article.abstract }}
                ></h4>
                <div className="Article-author">
                    <span>{article.date}</span>
                    <span>By {article.author}</span>
                </div>
            </div>
        </Link>
    )
}
