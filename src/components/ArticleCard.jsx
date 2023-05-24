import React from 'react'

export const ArticleCard = () => {
    return (
        <a href="#" className="Article-card box-shadow">
            <div className="Article-card-content">
                <div className="Article-caegory">
                    <span className="text">Categoty name</span>
                </div>
                <h1 className="text">Lorem ipsum dolor sit.</h1>
                <h4 className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eveniet!
                </h4>
                <div className="Article-author">
                    <span>02-12-2022</span>
                    <span>Cristian Orrego</span>
                </div>
            </div>
        </a>
    )
}
