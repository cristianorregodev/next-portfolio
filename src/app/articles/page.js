import { PostItemPlaceHolder } from '@/components/placehoolders/PostItemPlaceHolder'
import { Banner } from '@/components/Banner'
import { ListOfPosts } from '@/containers/Articles/ListOfPosts'
import React, { Suspense } from 'react'

export default function ArticlesPage() {
    return (
        <>
            <Banner
                title="Codeblog"
                description="Blog de programación, noticias sobre tecnología, tutoriales, recursos web y código"
                image="/banner-one.svg"
            />
            <section className="List-of-posts container">
                <Suspense fallback={<PostItemPlaceHolder />}>
                    <ListOfPosts />
                </Suspense>
            </section>
        </>
    )
}
