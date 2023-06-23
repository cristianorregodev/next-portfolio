import { BASE_API_URL } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillTag } from 'react-icons/ai'
import '@/sass/components/PostItem.scss'

export const PostItem = ({ post }) => {
    return (
        <Link href={`/articles/${post.slug}`} className="Post-item Article-hover">
            <div className="Post-item-image">
                <Image
                    src={BASE_API_URL + post.cover}
                    alt="Alt"
                    fill={true}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="Post-item-content">
                <span>{post.date}</span>
                <h1 className="primary-color">{post.title}</h1>
                <div
                    className="dangerously-html-text ellipsis-2-lines"
                    dangerouslySetInnerHTML={{ __html: post.abstract }}
                ></div>
                <footer>
                    <ul>
                        <li className="primary-color">
                            {' '}
                            <AiFillTag />
                            {post.category}
                        </li>
                    </ul>
                </footer>
            </div>
        </Link>
    )
}
