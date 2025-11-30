'use client'

import { useTheme } from './ThemeProvider'
import { useSFX } from './SFXProvider'
import { HiMoon, HiVolumeUp, HiVolumeOff } from 'react-icons/hi'

interface NavigationProps {
  onOpenModal: (section: string) => void
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const { theme, toggleTheme } = useTheme()
  const { sfxEnabled, toggleSFX, playSFX } = useSFX()

  const handleNavClick = (section: string) => {
    playSFX()
    onOpenModal(section)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              playSFX()
              toggleSFX()
            }}
            className="text-white hover:opacity-70 transition-opacity p-2"
            aria-label="Toggle SFX"
            title="Toggle sound effects"
          >
            {sfxEnabled ? (
              <HiVolumeUp className="w-5 h-5" />
            ) : (
              <HiVolumeOff className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => {
              playSFX()
              toggleTheme()
            }}
            className="text-white hover:opacity-70 transition-opacity p-2"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <HiMoon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

