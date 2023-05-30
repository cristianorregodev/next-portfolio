import React from 'react'

export const ArticleCard = ({ article }) => {
    return (
        <a href="#" className="Article-card box-shadow">
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
        </a>
    )
}
