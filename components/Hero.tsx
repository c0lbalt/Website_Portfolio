'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSFX } from './SFXProvider'
import { 
  HiInformationCircle, 
  HiLink, 
  HiFolder, 
  HiQuestionMarkCircle, 
  HiMail 
} from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'

interface HeroProps {
  onOpenModal: (section: string) => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const { playSFX } = useSFX()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = (section: string) => {
    playSFX()
    onOpenModal(section)
  }

  const navItems = [
    { id: 'about', icon: HiInformationCircle, label: 'about' },
    { id: 'links', icon: HiLink, label: 'links' },
    { id: 'work', icon: HiFolder, label: 'work' },
    { id: 'faq', icon: HiQuestionMarkCircle, label: 'faq' },
    { id: 'contact', icon: HiMail, label: 'contact' },
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Star decoration */}
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-20 right-10 sm:right-20 hero-star"
        >
          <FaStar className="w-8 h-8 text-blue-400" />
        </motion.div>
      ) : (
        <div className="absolute top-20 right-10 sm:right-20 hero-star">
          <FaStar className="w-8 h-8 text-blue-400" />
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a2e] border-2 border-white rounded-sm p-8 mb-8 hero-container"
          >
            <div className="border-b border-white/20 pb-2 mb-4">
              <span className="text-white text-sm uppercase">home</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400 hero-title"
            >
              Hi! I'm Cole :)
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl mb-8 text-white hero-subtitle"
            >
              Software Developer and Chemist
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-8 hero-buttons"
            >
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClick(item.id)}
                    className="flex flex-col items-center gap-2 text-white hover:opacity-70 transition-opacity"
                  >
                    <Icon className="w-8 h-8" />
                    <span className="text-sm lowercase">{item.label}</span>
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        ) : (
          <div className="bg-[#1a1a2e] border-2 border-white rounded-sm p-8 mb-8 hero-container">
            <div className="border-b border-white/20 pb-2 mb-4">
              <span className="text-white text-sm uppercase">home</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-400 hero-title">
              Hi! I'm Cole :)
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-8 text-white hero-subtitle">
              Software Developer and Chemist
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8 hero-buttons">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className="flex flex-col items-center gap-2 text-white hover:opacity-70 transition-opacity"
                  >
                    <Icon className="w-8 h-8" />
                    <span className="text-sm lowercase">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

