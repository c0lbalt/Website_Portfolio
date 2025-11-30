'use client'

import { useState, useCallback } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/sections/About'
import Links from '@/components/sections/Links'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Work from '@/components/sections/Work'
import Footer from '@/components/Footer'
import DesktopNotice from '@/components/DesktopNotice'
import WindowManager, { WindowData } from '@/components/WindowManager'
import LakeBackground from '@/components/LakeBackground'

export default function Home() {
  const [windows, setWindows] = useState<WindowData[]>([])

  const openWindow = useCallback((section: string) => {
    setWindows((prev) => {
      // Check if window is already open
      if (prev.some((w) => w.id === section)) {
        return prev
      }

      const windowTitles: Record<string, string> = {
        about: 'about',
        links: 'links',
        work: 'work',
        faq: 'frequently asked questions',
        contact: 'contact',
      }

      const windowContent: Record<string, React.ReactNode> = {
        about: <About />,
        links: <Links />,
        work: <Work />,
        faq: <FAQ />,
        contact: <Contact />,
      }

      // Calculate position to stagger windows
      const offsetX = prev.length * 50
      const offsetY = prev.length * 50

      const newWindow: WindowData = {
        id: section,
        title: windowTitles[section] || section,
        content: windowContent[section] || <div>Content not found</div>,
        position: { x: 100 + offsetX, y: 100 + offsetY },
      }

      return [...prev, newWindow]
    })
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <LakeBackground />
      <DesktopNotice />
      <Navigation onOpenModal={openWindow} />
      <Hero onOpenModal={openWindow} />
      <Footer />

      {/* Windows */}
      <WindowManager windows={windows} onCloseWindow={closeWindow} />
    </main>
  )
}

