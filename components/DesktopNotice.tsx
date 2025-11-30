'use client'

import { useState, useEffect } from 'react'

export default function DesktopNotice() {
  const [showNotice, setShowNotice] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenNotice = localStorage.getItem('desktopNoticeDismissed')
      if (!hasSeenNotice) {
        // Check if mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        if (isMobile) {
          setShowNotice(true)
        }
      } else {
        setDismissed(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    setShowNotice(false)
    setDismissed(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem('desktopNoticeDismissed', 'true')
    }
  }

  if (!showNotice || dismissed) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-background border border-foreground/20 rounded-lg shadow-lg p-4">
      <p className="text-sm mb-2">hey there!</p>
      <p className="text-sm mb-4 opacity-80">
        Just letting you know that this site is best experienced on desktop, some features might be wonky on different devices.
      </p>
      <button
        onClick={handleDismiss}
        className="px-4 py-2 bg-foreground text-background rounded hover:opacity-80 transition-opacity text-sm"
      >
        okay
      </button>
    </div>
  )
}

