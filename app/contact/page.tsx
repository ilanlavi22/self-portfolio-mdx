import infoImage from '../../assets/images/info.png'
import { Linkedin, Github, AtSign } from 'lucide-react'
import Image from 'next/image'

export default async function ContactPage() {
  return (
    <section className='mt-44'>
      <div className='mx-auto max-w-6xl px-8'>
        <h2 className='text-balance text-3xl font-bold leading-[1.1] text-theme-gray lg:text-[52px]'>
          <span className='text-theme-red'>Let’s talk</span>{' '}
          <span> about your project</span>
        </h2>
        <p className='mt-14 pb-3 font-proxima text-lg font-medium text-theme-gray'>
          I'm eager to embrace fresh challenges in both freelancing and
          traditional employment. Whether you seek a freelance partner or aim to
          enhance your team with a committed professional, I'm ready to
          collaborate with innovative organizations and individuals who
          appreciate expertise, creativity, and unwavering dedication.
        </p>

        <div className='flex items-center justify-center md:justify-start'>
          <Image src={infoImage} alt='info' className='my-10' />

          {/* <div className='flex items-center space-x-3'>
            <a href='https://github.com/ilanlavi22'>
              <Github
                size={22}
                className='fill-theme-gray stroke-transparent text-theme-gray'
              />
            </a>

            <a href='https://www.linkedin.com/in/ilanlavi/'>
              <Linkedin
                size={22}
                className='fill-theme-gray stroke-transparent text-theme-gray'
              />
            </a>

            <a href='mailto:refaelberlin@gmail.com'>
              <AtSign size={22} className='text-theme-gray' />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
