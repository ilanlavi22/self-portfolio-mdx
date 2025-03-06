import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Code Corner - Posts for Pros',
  description: 'Web development in action. Posts for pros.'
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='mt-48'>
      <div className='mx-auto max-w-6xl px-8'>
        <h2 className='text-balance text-3xl font-bold leading-[1.1] text-theme-gray lg:text-[52px]'>
          <span className='text-theme-red'>The Code Corner</span>
          <span> Posts for Pros </span>
          <span className='text-theme-red'>Web Development</span>
          {''} in Action
        </h2>
      </div>

      <div className='py-12'>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
