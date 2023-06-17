'use client'
import { useEffect } from 'react'
import Prism from 'prismjs'
import '@/helpers/prism.css'
import Image from 'next/image'
import { BASE_API_URL } from '@/config'

export const ArticleBody = ({ data }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    const JSCode = `const App = props => {
        return (
          <div>
            <h1> Prism JS </h1>
            <div>Awesome Syntax Highlighter</div>
          </div>
        );
      };
      `
    return (
        <section className="Article-main-container container">
            <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.abstract }}></div>
            <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.main_content }}></div>
            <div className="Article-main-image box-shadow">
                <Image src={BASE_API_URL + data.image} alt={data.title} fill={true} />
            </div>
            <div className="dangerously-html-text" dangerouslySetInnerHTML={{ __html: data.second_content }}></div>
        </section>
    )
}
