'use client'

import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Window from './Window'

export interface WindowData {
  id: string
  title: string
  content: React.ReactNode
  position?: { x: number; y: number }
}

interface WindowManagerProps {
  windows: WindowData[]
  onCloseWindow: (id: string) => void
}

export default function WindowManager({ windows, onCloseWindow }: WindowManagerProps) {
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null)

  // Set focus to the most recently opened window
  useEffect(() => {
    if (windows.length > 0) {
      const lastWindow = windows[windows.length - 1]
      setFocusedWindowId(lastWindow.id)
    } else {
      setFocusedWindowId(null)
    }
  }, [windows.length])

  const handleFocus = useCallback((id: string) => {
    setFocusedWindowId(id)
  }, [])

  // Calculate z-index: focused window gets highest, others get base + index
  const baseZIndex = 1000
  const getZIndex = (index: number, id: string) => {
    if (id === focusedWindowId) {
      return baseZIndex + windows.length + 100
    }
    return baseZIndex + index
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 999 }}>
      <AnimatePresence>
        {windows.map((window, index) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            zIndex={getZIndex(index, window.id)}
            onFocus={() => handleFocus(window.id)}
            onClose={() => onCloseWindow(window.id)}
            initialPosition={window.position}
          >
            {window.content}
          </Window>
        ))}
      </AnimatePresence>
    </div>
  )
}

