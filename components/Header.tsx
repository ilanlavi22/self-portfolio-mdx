import NavLink from '@/components/NavLinks'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'

export default function Header() {
  return (
    <div className='relative z-30 w-full overflow-hidden'>
      <header className='fixed left-0 top-0 flex w-full items-center justify-between bg-theme-black/85 p-6 py-14 backdrop-blur-lg lg:px-14 lg:py-10'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Ilan Lavi - Web Developer Berlin'
            className='w-12 lg:w-14'
          ></Image>
        </Link>

        <nav className='flex flex-col items-end font-proxima font-bold uppercase leading-[1.5625rem] text-theme-gray-shade lg:text-[0.9rem] lg:tracking-[0.15rem]'>
          <NavLink href='/work'>Work</NavLink>
          <NavLink href='/posts'>Posts</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}
