'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mx-auto mb-12 flex max-w-6xl items-center gap-3 px-8 font-adventor text-theme-gray'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full rounded-lg border-theme-gray font-adventor placeholder-theme-gray'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 text-base lg:px-3'
          >
            Reset
            <X className='ml-2 h-5 w-5' />
          </Button>
        )}
      </div>
      {filtered.length === 0 ? (
        <div className='flex flex-col items-center justify-center px-8 font-adventor text-theme-gray'>
          No posts found for &quot;{query}&quot;
          <span className='block'> Please try another search term.</span>
        </div>
      ) : (
        <Posts posts={filtered} />
      )}
    </div>
  )
}
