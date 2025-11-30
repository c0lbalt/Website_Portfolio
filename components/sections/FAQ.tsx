'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Did you seriously live in Saudi Arabia?',
      answer: 'Yes, I did for several years. I spent a little more than half a decade within the city of Riyadh.',
    },
    {
      question: 'What brought you over there?',
      answer: 'One of my parents got a job offer back in 2015, eventually causing us to move later that year.',
    },
    {
      question: 'How was the school environment and transistion?',
      answer: 'Going to the American International School of Riyadh (AISR), was a great experience. The school class was incredible diverse with different people coming from each continent. The school transistion itself was not challenging for myself as I found my footing rather fast with a particular cliche involving basketball.',
    },

    {
      question: 'Have you done any traveling while over there?',
      answer: 'Yes! I am an extremely well season traveler. I have visited nearly 30 unique countries for personal experience, non-profit humanitarian work, and leadership experience.',
    },

    {
      question: 'Do you speak another language like Arabic?',
      answer: 'Unfortunately, I do not. I am able to understand and read some French at a beginner level, and understand a few words and phrases in arabic.',
    },

    {
      question: 'Why did you come back to the US?',
      answer: 'Well, after being overseas for so long I wanted some stability in my life so I decided to move back to the US after my senior year of high school.',
    },

    {
      question: 'Why did you choose LSU as your university of choice?',
      answer: 'I chose LSU because my father, my grandfather and great-grandfather all either went here or graduated here. This would make me a 4th generation alumni, when I graduate!',
    },

    {
      question: 'Why Software Engineering and what is with all the Chemistry?',
      answer: 'I was originally in the Chemical Engineering program, however quickly learned it was not what I expected. After that I decided to switch into Software Engineering since it is still apart of the College of Engineering, and wanted to make use of all the extra Chemistry classes I had took so I declared for a minor in the subject. In retrospect, I wish I stuck with the ChemE program (even if is extremely hard) and still picked up a Chemistry minor.',
    },

    {
      question: 'So what is the plan after college?',
      answer: 'The plan is to get a job at a Chemical based company, and work for a couple of years to pay off college. Then apply for Law School and become a patent attorney like my father. ',
    },

  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions!</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-4 flex items-center justify-between"
              >
                <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white flex-shrink-0"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="opacity-80 text-white text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

