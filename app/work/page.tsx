import Image from 'next/image'
import type { Metadata } from 'next'
import mutegroup from '/public/images/projects/mut-group.png'
import arggroup from '/public/images/projects/agric-group.png'
import immogroup from '/public/images/projects/immo-group.png'
import ProjectStack from '@/components/ProjectStack'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Latest Projects'
}

export default async function ProjectPage() {
  return (
    <section className='mt-48'>
      <div className='mx-auto max-w-6xl px-8'>
        <h2 className='text-balance text-3xl font-bold leading-[1.1] text-theme-gray lg:text-[52px]'>
          <span>Latest</span> <span className='text-theme-red'>Projects</span>
        </h2>
        <p className='mt-8 pb-3 font-proxima text-lg font-medium text-theme-gray'>
          Here’s a selection of my latest projects, ranging from SaaS
          applications to scalable web platforms. Each project is built with a
          strong focus on UX/UI, performance, and maintainability. My tech stack
          includes React, TypeScript, Next.js, PostgreSQL with Prisma, and
          TailwindCSS, ensuring modern, scalable, and reusable components.
        </p>

        {/* project 1 */}
        <div className='mt-20 flex flex-col'>
          <p className='pb-3.5 font-adventor text-lg font-bold text-theme-red'>
            MUT – Multi-Tenant Posting Application
          </p>
          <p className='pb-3 font-proxima text-lg font-medium text-theme-gray'>
            A powerful multi-tenant platform designed for managing and
            publishing content across multiple clients. This application enables
            businesses to efficiently handle posting workflows while maintaining
            tenant-specific customization. Tech Stack: Next.js, TypeScript,
            Prisma (PostgreSQL), TailwindCSS, Authentication & Role-Based Access
            Solution Highlights: Multi-tenant architecture, scalable API design,
            and a seamless user experience for managing multiple accounts under
            one system.
          </p>

          <div className='ml-2 mt-6 flex items-center space-x-3'>
            <ProjectStack name='uxui' className='mt-1 w-10' />
            <ProjectStack name='react' size={24} />
            <ProjectStack name='nextjs' size={24} />
            <ProjectStack name='auth0' size={22} />
            <ProjectStack name='tailwindcss' size={24} />
          </div>

          {/* <div className='mt-3 flex items-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
          <div>
            <Image
              src={mutegroup}
              alt='MUT - Multi-Tenant Posting Application'
            />
          </div>
          {/* <div className='my-4 mt-3 flex items-center justify-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
        </div>
        {/* project 2 */}

        <div className='mt-20 flex flex-col'>
          <p className='pb-3.5 font-adventor text-lg font-bold text-theme-red'>
            Agriculture Activity Management
          </p>
          <p className='pb-3 font-proxima text-lg font-medium text-theme-gray'>
            A web-based platform that helps agricultural businesses streamline
            operations, track activities, and optimize workflows. Farmers and
            agribusinesses can log tasks, manage resources, and analyze
            productivity. Tech Stack: React, TypeScript, Next.js, PostgreSQL,
            Prisma, TailwindCSS Solution Highlights: Custom dashboards,
            real-time data tracking, and user-friendly interfaces designed for
            non-technical users.
          </p>

          <div className='ml-2 mt-6 flex items-center space-x-3'>
            <ProjectStack name='uxui' className='mt-1 w-10' />
            <ProjectStack name='react' size={24} />
            <ProjectStack name='nextjs' size={24} />
            <ProjectStack name='tailwindcss' size={24} />
          </div>

          {/* <div className='mt-3 flex items-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
          <div>
            <Image src={arggroup} alt='Agriculture Activity Management' />
          </div>
          {/* <div className='my-4 mt-3 flex items-center justify-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
        </div>
        {/* project 3 */}

        <div className='mt-20 flex flex-col'>
          <p className='pb-3.5 font-adventor text-lg font-bold text-theme-red'>
            Immdealers - Deutschlands Innovativste Immobilien Plattform
          </p>
          <p className='pb-3 font-proxima text-lg font-medium text-theme-gray'>
            A next-generation real estate platform revolutionizing how
            properties are listed, searched, and managed. Designed with a
            seamless UX/UI and a scalable architecture to support high user
            engagement. Tech Stack: Next.js, TypeScript, Prisma (PostgreSQL),
            TailwindCSS, Authentication & Role-Based Permissions Solution
            Highlights: Advanced property search filters, interactive UI
            components, and high-performance API integrations.
          </p>

          <div className='ml-2 mt-6 flex items-center space-x-3'>
            <ProjectStack name='uxui' className='mt-1 w-10' />
            <ProjectStack name='react' size={24} />
            <ProjectStack name='nextjs' size={24} />
            <ProjectStack name='typescript' size={24} />
            <ProjectStack name='tailwindcss' size={24} />
          </div>

          {/* <div className='mt-3 flex items-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
          <div>
            <Image
              src={immogroup}
              alt='Deutschlands Innovativste Immobilien Plattform'
            />
          </div>
          {/* <div className='my-4 mt-3 flex items-center justify-center space-x-5'>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='vercel' size={15} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                View
              </span>
            </a>
            <a href='' className='flex items-center gap-1.5'>
              <ProjectStack name='github' size={17} />
              <span className='font-adventor text-sm font-bold uppercase text-theme-gray'>
                Github
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
