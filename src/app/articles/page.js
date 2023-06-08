import { PostItemPlaceHolder } from '@/components/placehoolders/PostItemPlaceHolder'
import { Banner } from '@/containers/Articles/Banner'
import { ListOfPosts } from '@/containers/Articles/ListOfPosts'
import React, { Suspense } from 'react'

export default function ArticlesPage() {
    return (
        <>
            <Banner />
            <section className="List-of-posts container">
                <Suspense fallback={<PostItemPlaceHolder />}>
                    <ListOfPosts />
                </Suspense>
            </section>
        </>
    )
}
