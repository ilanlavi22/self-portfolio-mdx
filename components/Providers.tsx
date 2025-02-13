'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { useEffect, useState, createContext } from 'react'
import Lenis from 'lenis'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      <ToasterProvider />
      <ScrollContext>{children}</ScrollContext>
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

const SmoothScrollContext = createContext<Lenis | null>(null)

function ScrollContext({ children }: { children: React.ReactNode }) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null)
  const [rafState, setRafState] = useState<number | null>(null)

  useEffect(() => {
    const scroller = new Lenis({
      // duration: 0.5,
      // infinite: false,
      // easing: t => t
    })
    const rf = requestAnimationFrame(raf)

    function raf(time: number) {
      scroller.raf(time)
      requestAnimationFrame(raf)
    }
    setRafState(rf)
    setLenisRef(scroller)

    return () => {
      if (rafState !== null) {
        cancelAnimationFrame(rafState)
      }
      if (lenisRef !== null) {
        lenisRef.destroy()
      }
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
