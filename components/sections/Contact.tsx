'use client'

export default function Contact() {
  return (
    <div className="text-white">
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">yayy mail!</h3>
          <p className="opacity-80 mb-6 text-white">
            The easiest way to contact me is through email! i don't really check my social media messages, so please direct questions to my email instead 👍
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-5xl">✉️</span>
          </div>
          <div>
            <p className="mb-4 opacity-80 text-white">email me at:</p>
            <a
              href="mailto:coalcolbalt@gmail.com"
              className="text-xl font-semibold hover:opacity-70 transition-opacity text-blue-400"
            >
              coalcolbalt@gmail.com
            </a>
          </div>
          <p className="text-white opacity-80 mb-4">or press the button below to open your mail app.</p>
          <a
            href="mailto:coalcolbalt@gmail.com"
            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:opacity-80 transition-opacity inline-block"
          >
            send me an email!
          </a>
        </div>
      </div>
    </div>
  )
}

