'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Draggable from 'react-draggable'
import { useSFX } from './SFXProvider'

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  onClose: () => void
  zIndex: number
  onFocus: () => void
  initialPosition?: { x: number; y: number }
}

export default function Window({
  id,
  title,
  children,
  onClose,
  zIndex,
  onFocus,
  initialPosition,
}: WindowProps) {
  const { playSFX } = useSFX()
  const [position, setPosition] = useState(
    initialPosition || { x: 100, y: 100 }
  )
  const nodeRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    playSFX()
    onClose()
  }

  const handleMouseDown = () => {
    onFocus()
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-title-bar"
      position={position}
      onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div
        ref={nodeRef}
        style={{ zIndex, position: 'absolute', pointerEvents: 'auto' }}
        onMouseDown={handleMouseDown}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-[#1a1a2e] border-2 border-white rounded-sm shadow-2xl min-w-[400px] max-w-[90vw] max-h-[85vh] overflow-hidden flex flex-col"
        >
          {/* Title Bar */}
          <div className="window-title-bar bg-[#1a1a2e] border-b border-white/20 px-3 py-2 flex items-center justify-between cursor-move select-none">
            <span className="text-white text-sm font-medium lowercase">{title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              onMouseDown={(e) => e.stopPropagation()}
              className="text-white hover:opacity-70 transition-opacity p-1 flex items-center justify-center"
              aria-label="Close window"
            >
              <span className="text-lg font-bold">×</span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-[#1a1a2e] text-white p-6">
            {children}
          </div>
        </motion.div>
      </div>
    </Draggable>
  )
}

