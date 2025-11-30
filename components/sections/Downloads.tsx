'use client'

export default function Downloads() {
  const downloads = [
    {
      title: 'Download Item 1',
      subtitle: 'Sticker Pack',
      description: 'from "project name"',
      links: [
        { text: 'footer link', url: '#' },
        { text: 'footer link', url: '#' },
        { text: 'footer link', url: '#' },
      ],
    },
    {
      title: 'Download Item 2',
      subtitle: 'Sticker Pack',
      description: 'personal project',
      links: [
        { text: 'footer link', url: '#' },
        { text: 'footer link', url: '#' },
      ],
    },
    {
      title: 'Download Item 3',
      subtitle: 'Wallpaper',
      description: 'fan art description',
      links: [
        { text: 'footer link', url: '#' },
      ],
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">downloadables</h2>
      <p className="mb-8 opacity-80">
        here&apos;s some free downloadable content from me!
        <br />
        everything&apos;s free for personal use. enjoy :)
      </p>
      <div className="space-y-8">
        {downloads.map((item, idx) => (
          <div key={idx} className="border-b border-foreground/10 pb-8 last:border-0">
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm opacity-60 mb-1">{item.subtitle}</p>
            <p className="text-sm opacity-80 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.links.map((link, linkIdx) => (
                <a
                  key={linkIdx}
                  href={link.url}
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

