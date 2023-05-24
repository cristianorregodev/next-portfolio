import { ArticleCard } from '@/components/ArticleCard'
import React from 'react'

export const Articles = () => {
    return (
        <section className="Articles-container container">
            <h2>Últimos artículos</h2>
            <div className="Articles-cards-container">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </section>
    )
}
