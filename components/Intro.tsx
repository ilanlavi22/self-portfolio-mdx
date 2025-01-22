import Image from 'next/image'
import authorImage from '@/public/images/profile-sm.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='font-proxima mt-2 flex-1 md:mt-0'>
        <h1 className='title font-proxima no-underline'>Hey, I&#39;m Ilan.</h1>
        <p className='font-proxima mt-3 text-pretty text-lg tracking-wide text-muted-foreground'>
          I&#39;m a Frontend Developer | Specialized in React.js and Next.js |
          Responsive Design and Performance Optimization | Full-Stack Solutions
          | Building High-Performance, User-Focused Applications.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Ilan Lavi'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
