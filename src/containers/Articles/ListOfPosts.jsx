import { PostItem } from '@/components/PostItem'
import { getData } from '@/helpers/getData'
import { API_URL } from '@/config'

export const ListOfPosts = async () => {
    const { data } = await getData(`${API_URL}/posts`)
    return data.map((post) => <PostItem key={post.id} post={post} />)
}
