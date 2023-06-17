import { PostItemPlaceHolder } from '@/components/placehoolders/PostItemPlaceHolder'
import { Banner } from '@/components/Banner'
import { ListOfPosts } from '@/containers/Articles/ListOfPosts'
import React, { Suspense } from 'react'
import '@/sass/containers/Articles/ListOfPosts.scss'

export default function ArticlesPage() {
    return (
        <>
            <Banner
                title="Codeblog"
                description="Blog de programación, noticias sobre tecnología, tutoriales, recursos web y código"
                image="/banner-one.svg"
            />
            <section className="List-of-posts container">
                <Suspense
                    fallback={[1, 2, 3, 4, 5].map((item, idx) => (
                        <PostItemPlaceHolder key={idx} />
                    ))}
                >
                    <ListOfPosts />
                </Suspense>
            </section>
        </>
    )
}
