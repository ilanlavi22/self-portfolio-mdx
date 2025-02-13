import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='bg-theme-black flex flex-col'>
      {posts.map(post => (
        <li key={post.slug} className='odd:bg-theme-dark-gray px-8 py-12'>
          <div className='mx-auto max-w-6xl px-5 sm:px-8'>
            {post.publishedAt && (
              <p className='text-theme-red pb-3.5 font-adventor text-lg font-bold'>
                {formatDate(post.publishedAt)}
              </p>
            )}
            <Link
              href={`/posts/${post.slug}`}
              className='flex flex-col justify-between sm:flex-row'
            >
              <p className='text-theme-gray pb-3 font-proxima text-xl font-bold'>
                {post.title}
              </p>
            </Link>
            <p className='text-theme-gray line-clamp-3 font-proxima text-lg'>
              {post.summary}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
