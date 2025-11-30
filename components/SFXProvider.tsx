'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface SFXContextType {
  sfxEnabled: boolean
  toggleSFX: () => void
  playSFX: (sound?: string) => void
}

const SFXContext = createContext<SFXContextType | undefined>(undefined)

export function SFXProvider({ children }: { children: React.ReactNode }) {
  const [sfxEnabled, setSfxEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('sfxEnabled')
    if (saved !== null) {
      setSfxEnabled(saved === 'true')
    }
  }, [])

  const toggleSFX = () => {
    const newValue = !sfxEnabled
    setSfxEnabled(newValue)
    localStorage.setItem('sfxEnabled', String(newValue))
  }

  const playSFX = (sound?: string) => {
    if (!sfxEnabled) return
    // You can add actual sound effects here
    // For now, we'll just use a simple beep or click sound
    if (typeof window !== 'undefined' && 'Audio' in window) {
      // Create a simple click sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 800
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }

  // Always provide the context, even before mounting
  return (
    <SFXContext.Provider value={{ sfxEnabled, toggleSFX, playSFX }}>
      {children}
    </SFXContext.Provider>
  )
}

export function useSFX() {
  const context = useContext(SFXContext)
  if (context === undefined) {
    throw new Error('useSFX must be used within a SFXProvider')
  }
  return context
}

