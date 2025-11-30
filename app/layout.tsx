'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SFXProvider } from '@/components/SFXProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Portfolio - Cole</title>
        <meta name="description" content="Chemist and Developer" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SFXProvider>
            {children}
          </SFXProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

