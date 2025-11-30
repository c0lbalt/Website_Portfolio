'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="text-white">
      <div className="space-y-6">
        <div className="flex items-start gap-4">

        <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
  <div className="w-full h-full rounded-full overflow-hidden">
    <Image
      src="/images/about/profile.JPG"
      alt="Cole Heausler"
      width={96}
      height={96}
      className="w-full h-full object-cover rounded-full scale-80"
      style={{
        objectPosition: 'left bottom', // or '20% 80%' for fine-tuning
      }}
    />
  </div>
</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Cole Heausler</h3>
            <p className="opacity-80 mb-2 text-white">A Software Engineer w/Chemistry Background</p>
            <p className="opacity-60 text-sm text-white">Looking for Work Opportunities!</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="mb-4 text-white">
            Hi! I'm Cole, I used to live overseas in Saudi Arabia, 
            but now I'm back in the US doing what I love: Software Engineering and Chemistry!
          </p>
          <div className="mb-6">
            <p className="mb-2 text-white font-semibold">What I've Been Up to:</p>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Sythesizing many compounds: Organic, Polymers, and a few Inorganic!</li>
              <li>Producing Deep Learning Models for Identifcation if MNIST Dataset and more!</li>
              <li>Creating a File System in C along w/ a MLFQS Scheduler!</li>
              <li>Currently working front-end for "Whirl", an app for conneting students at LSU! </li>
            </ul>
          </div>
          <p className="opacity-80 text-white">
            Have I interested you? Send me an email! I'm always looking for new opportunities!
          </p>
        </div>

        <div className="border-t border-white/20 pt-6">
          <h4 className="font-semibold mb-3 text-white">EDUCATION</h4>
          <p className="mb-2 text-white">Bachelors of Engineering in Computer Science, Minor in Chemistry
             from Louisiana State University</p>
          <p className="opacity-60 text-sm text-white">Class of 2026</p>
        

          <p className="mb-2 text-white mt-4">High School Diploma from American International School of Riyadh, Saudi Arabia</p>
          <p className="opacity-60 text-sm text-white">Class of 2020</p>
        </div>

        <div className="border-t border-white/20 pt-6">
          <h4 className="font-semibold mb-3 text-white">OTHER INTERESTS</h4>
          <ul className="list-disc list-inside space-y-1 opacity-80 text-white">
            <li>Traveling and Exploring new Cultures</li>
            <li>Taking Pictures (@penrose_pics on Instagram)</li>
            <li>NBA (Go Pelicans!) and NFL (Go Saints!)</li>
            <li>Playing Strategy Games (Civilization, Fire Emblem , etc.)</li>
          </ul>
        </div>
      </div>
    
  )
}

