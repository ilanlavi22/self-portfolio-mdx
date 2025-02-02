import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='text-theme-gray-shade container flex max-w-3xl items-center justify-between font-proxima text-[0.9rem] font-bold uppercase leading-[30px] tracking-[0.15rem]'>
        <div>
          <Link
            href='/'
            className='font-adventor text-[1.25rem] font-bold tracking-[0.15rem] text-[#B7AB98]'
          >
            Ilan Lavi
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-[#B7AB98]/50 sm:gap-10'>
          <li className='transition-colors hover:text-[#B7AB98]'>
            <Link href='/posts'>Posts</Link>
          </li>
          {/* <li className='transition-colors hover:text-[#B7AB98]'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-[#B7AB98]'>
            <Link href='/contact'>Contact</Link>
          </li> */}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
