import type { Metadata } from 'next'
import { adventor, proxima } from '@/assets/fonts/fonts'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template:
      '%s | Frontend and Full Stack Developer in Berlin | React.js and Next.js',
    default: 'Ilan Lavi - Frontend and Full-Stack Developer in Berlin'
  },

  description:
    'Ilan Lavi, a Berlin-based frontend and full-stack developer specializing in React.js and Next.js. Providing modern web development, UX/UI design, and cutting-edge solutions to elevate your digital presence.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${adventor.variable} ${proxima.variable}`}
    >
      <head>
        <meta name='robots' content='index,follow' />

        <meta
          property='og:title'
          content='Ilan Lavi - Frontend and Full-Stack Developer in Berlin'
        />
        <meta
          property='og:description'
          content='Ilan Lavi, a Berlin-based frontend and full-stack developer specializing in React.js and Next.js. Providing modern web development, UX/UI design, and cutting-edge solutions to elevate your digital presence.'
        />
        <meta
          property='og:image'
          content='https://ilanlavi.com/images/og-img.png'
        ></meta>
        <meta property='og:url' content='https://ilanlavi.com' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Ilan Lavi' />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@ilanlavi'></meta>
      </head>
      <body
        className={cn(
          `${`${proxima.className}`} flex min-h-svh flex-col bg-theme-black antialiased`
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
