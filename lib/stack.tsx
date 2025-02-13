import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiPrisma,
  SiGit,
  SiCss,
  SiFigma,
  SiContentful,
  SiSanity,
  SiReactquery,
  SiPostgresql,
  SiZod
} from '@icons-pack/react-simple-icons'

import { ReactElement } from 'react'

export interface StackProps {
  name: string
  icon: ReactElement | string
  id: number
}

export const stacks: StackProps[] = [
  {
    id: 1,
    name: 'React.js',
    icon: <SiReact width={22} />
  },
  {
    id: 2,
    name: 'Next.js',
    icon: <SiNextdotjs width={22} />
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: <SiTypescript width={21} />
  },
  {
    id: 4,
    name: 'Node.js',
    icon: <SiNodedotjs width={22} />
  },
  {
    id: 5,
    name: 'React Query',
    icon: <SiReactquery width={22} />
  },
  {
    id: 6,
    name: 'GraphQL',
    icon: <SiGraphql width={22} />
  },
  {
    id: 7,
    name: 'PostgreSQL',
    icon: <SiPostgresql width={22} />
  },
  {
    id: 8,
    name: 'Prisma',
    icon: <SiPrisma width={22} />
  },
  {
    id: 9,
    name: 'Zod',
    icon: <SiZod width={22} />
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: <SiMongodb width={22} />
  },
  {
    id: 11,
    name: 'Headless CMS',
    icon: (
      <>
        <span>
          <SiContentful width={20} />
        </span>
        <span>
          <SiSanity width={20} />
        </span>
      </>
    )
  },
  {
    id: 12,
    name: 'HTML5',
    icon: <SiHtml5 width={22} />
  },
  {
    id: 13,
    name: 'CSS',
    icon: <SiCss width={22} />
  },
  {
    id: 14,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss width={22} />
  },
  {
    id: 15,
    name: 'Git',
    icon: <SiGit width={22} />
  },
  {
    id: 18,
    name: 'Figma',
    icon: <SiFigma width={22} />
  }
]
