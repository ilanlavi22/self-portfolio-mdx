'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  className,
  ...props
}: {
  href: string
  [key: string]: any
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'transition-colors duration-300 hover:text-theme-gray',
        isActive ? `text-theme-gray transition-colors ${className}` : className
      )}
      href={href}
      {...props}
    />
  )
}
