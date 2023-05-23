import Image from 'next/image'
import React from 'react'

export const ArticleCard = () => {
    return (
        <article className="Article-card box-shadow">
            <div className="Article-card-image">
                <Image
                    src={
                        'https://cristiandeveloper.com/storage/projects//YekAje4tXu4AKdtnzVXd2jQIQqVRO1rHp7Des8Jq.webp'
                    }
                    fill={true}
                    alt={'Aler'}
                />
            </div>
            <div className="Article-card-content">
                <div className="Article-caegory">
                    <span>Categoty name</span>
                </div>
                <h1 className="text">Lorem ipsum dolor sit.</h1>
                <h4 className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eveniet!
                </h4>
                <a href="#">Leer</a>
            </div>
        </article>
    )
}
