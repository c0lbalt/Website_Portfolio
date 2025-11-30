'use client'

import { 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaCoffee,
  FaTshirt,
  FaImage
} from 'react-icons/fa'
import { BsCloud } from 'react-icons/bs'

export default function Links() {
  const links = [

    { name: 'discord', url: 'https://discord.com', icon: FaDiscord },
    { name: 'instagram', url: 'https://www.instagram.com/cole_heausler/', icon: FaInstagram },
    { name: 'github', url: 'https://github.com/c0lbalt', icon: FaGithub },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/cole-heausler/', icon: FaLinkedin },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Links</h2>
      <p className="mb-6 opacity-80">
        Clicking any of the links will open a new tab about me!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-white"
            >
              <Icon className="w-8 h-8 mb-2" />
              <span className="text-sm lowercase">{link.name}</span>
            </a>
          )
        })}
      </div>
      <div className="mt-6">
        <p className="text-sm opacity-60 text-center">
        </p>
      </div>
    </div>
  )
}

