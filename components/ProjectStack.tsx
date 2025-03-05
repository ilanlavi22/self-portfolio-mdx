import Image from 'next/image'
import uxiusvg from '../public/images/projects/uxui.svg'
import { cn } from '@/lib/utils'
import React from 'react'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiPrisma,
  SiFigma,
  SiPostgresql,
  SiZod,
  SiAuth0
} from '@icons-pack/react-simple-icons'

interface StackProps {
  name: string
  icon?: React.ReactNode
  className?: string
  size?: number
}

const iconMap: Record<string, React.ElementType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  vercel: SiVercel,
  github: SiGithub,
  prisma: SiPrisma,
  figma: SiFigma,
  postgresql: SiPostgresql,
  zod: SiZod,
  auth0: SiAuth0
}

export default function ProjectStack({
  className,
  name,
  size = 18
}: StackProps) {
  const Icon = iconMap[name.toLowerCase()]

  if (Icon) {
    return <Icon className={cn('text-theme-gray', className)} size={size} />
  }

  if (name.toLowerCase() === 'uxui') {
    return (
      <Image src={uxiusvg} alt={name.toUpperCase()} className={className} />
    )
  }

  return null
}
