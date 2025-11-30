'use client'

import Image from 'next/image'

export default function Work() {
  const tools = [
    'Figma',
  ]

  const devSkills = [

    'C++','C','Python', 'Pytensor',
    'Jupyter Notebooks','Java','Kotlin', 
    'JavaScript', 'HTML/CSS', 'React', 'Git',



  ]

  const projects = [
    {
      title: 'Whirl',
      description: "Whirl is a mobile application built for Louisian State University (LSU) students in  order to meet new people, join other student activites and stay connected with campus life!",
      link: 'https://github.com/ghebert3/4330-Group-Project',
      linkText: 'Github Link',
    },
    {
      title: 'BASF Database Simulation',
      description: 'This is a simulation of a possible database system that may be present at BASF Chemicals, the goal is immitate and create a database that may be present at a refinery.',
      link: 'https://github.com/bengutow1/csc4402-database-project',
      linkText: 'Github Link',
    },
  ]

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">Work</h2>
      <p className="mb-6 opacity-80 text-white">
        <strong>Accepting work offers via my work email!</strong>
        <br />
        I mainly develop software, make small projects, research chemicals and preform lab experiments.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">TOOLS</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">DEVELOPMENT</h3>
          <div className="flex flex-wrap gap-2">
            {devSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>



        <div className="border-t border-white/20 pt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">PROJECTS:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="aspect-square bg-white/10 rounded-lg flex items-center justify-center"
              >
                <span className="opacity-40 text-sm text-white">gallery image</span>
              </div>
            ))}
          </div>
    
        </div>

        <div className="border-t border-white/20 pt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">CURRENT DEVELOPMENTS:</h3>
          {projects.map((project, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <h4 className="text-2xl font-semibold mb-2 text-white">{project.title}</h4>
              <p className="opacity-80 mb-4 text-white">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 underline hover:opacity-70 transition-opacity"
              >
                {project.linkText}
              </a>
            </div>
          ))}
          <div className="mt-6">
            <p className="opacity-80 mb-2 text-white">Other dev projects:</p>
            <ul className="list-disc list-inside space-y-1 opacity-80 text-white">
              <li>This website! :)</li>
              <li>Nearly everything in my Github!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

