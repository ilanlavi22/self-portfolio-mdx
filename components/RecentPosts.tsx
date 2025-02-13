import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='bg-theme-dark-gray py-12 md:py-20'>
      <div className='mx-auto max-w-6xl px-8'>
        <h2 className='text-theme-gray mb-10 max-w-lg font-adventor text-base font-bold uppercase tracking-wide'>
          Recent posts
        </h2>

        <h3 className='text-theme-gray mb-4 text-balance text-3xl font-bold leading-[1.1] lg:text-[52px]'>
          <span className='text-theme-red'>The Code Corner</span>
          <span> Posts for Pros </span>
          <span className='text-theme-red'>Web Development</span>
          {''} in Action
        </h3>
      </div>
      <Posts posts={posts} />
    </section>
  )
}
