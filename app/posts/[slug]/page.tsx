import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { ArrowLeftIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))
  return slugs
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const post = await getPostBySlug(slug)
  const title = post?.metadata.title

  return {
    title: `${title} | React.js Frontend Developer | Next.js Full-Stack  Developer`,
    description:
      post?.metadata.summary ||
      'I am a React.js Frontend Developer and Next.js Full-Stack Developer. I write about React.js, Next.js, TypeScript, Tailwind CSS, and more.',
    openGraph: {
      images: [
        {
          url: post?.metadata.image || ''
        }
      ]
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, publishedAt } = metadata

  return (
    <section className='mt-44'>
      <div className='mx-auto max-w-6xl px-8'>
        <header>
          <h1 className='text-balance text-3xl font-bold leading-[1.1] text-theme-gray lg:text-[52px]'>
            {title}
          </h1>
          <p className='mt-3 font-bold uppercase text-theme-red'>
            {formatDate(publishedAt ?? '')}
          </p>
        </header>
      </div>

      <div className='mx-auto max-w-6xl px-8 py-12 font-adventor'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-bold text-theme-gray'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <main className='prose mt-16 max-w-none font-proxima text-base text-theme-gray dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>{/* <NewsletterForm /> */}</footer>
      </div>
    </section>
  )
}
