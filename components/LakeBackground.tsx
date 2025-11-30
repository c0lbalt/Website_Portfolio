'use client'

export default function LakeBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky/Lake Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#1a2a3a] to-[#2a4a5a]">
        {/* Lake Section - Bottom Third */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#2a4a5a] to-[#3a6a7a]">
          {/* Animated Wave Layer */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3a6a7a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2a4a5a" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a7a8a" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3a6a7a" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* First wave layer */}
              <path
                d="M-100,150 Q200,100 500,150 T1100,150 Q1400,200 1700,150 L1700,300 L-100,300 Z"
                fill="url(#waveGradient1)"
                className="animate-wave"
              />
              {/* Second wave layer - delayed */}
              <path
                d="M-200,170 Q300,120 700,170 T1500,170 Q1800,220 2100,170 L2100,300 L-200,300 Z"
                fill="url(#waveGradient2)"
                className="animate-wave-delayed"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

