import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  const title = post?.metadata.title

  return {
    title: `${title} | React.js Frontend Developer | Next.js Full-Stack  Developer`,

    description:
      'Ilan Lavi is a Berlin-based React.js Frontend Developer with a focus on Next.js Full-Stack Development.'
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='mt-40'>
      <div className='mx-auto max-w-6xl px-8'>
        <header>
          <h1 className='text-theme-gray text-balance text-3xl font-bold leading-[1.1] lg:text-[52px]'>
            {title}
          </h1>
          <p className='text-theme-red mt-3 font-bold uppercase'>
            {formatDate(publishedAt ?? '')}
          </p>
        </header>
      </div>

      <div className='mx-auto max-w-6xl px-8 py-12 font-adventor'>
        <Link
          href='/posts'
          className='text-theme-gray mb-8 inline-flex items-center gap-2 text-sm font-bold'
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

        <main className='text-theme-gray prose mt-16 max-w-none font-proxima text-base dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>{/* <NewsletterForm /> */}</footer>
      </div>
    </section>
  )
}
