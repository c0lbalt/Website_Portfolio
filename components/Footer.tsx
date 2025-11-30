'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2">

          <p className="text-center text-sm text-white opacity-60">
            © {currentYear} Cole.H
          </p>
          
        </div>
      </div>
    </footer>
  )
}

