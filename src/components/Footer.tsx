'use client'
import Link from 'next/link'
import { Github } from 'lucide-react'
import Image from 'next/image'
import { APP_URL } from '@/constants/constant'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: `${APP_URL}/Pricing` },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: 'https://docs.ultronai.me/' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://docs.ultronai.me/' },
      { label: 'API Reference', href: 'https://docs.ultronai.me/fetch-assets' },
      {
        label: (
          <span className="flex items-center gap-1">
            GitHub <Github className="h-4 w-4" />
          </span>
        ),
        href: '#',
      },
    ],
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-950 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              {/* <Bot className="h-7 w-7 text-primary group-hover:text-accent transition-colors" /> */}
              <Image
                src="/ultron_logo_ico.svg"
                alt="UltronAI"
                width={32}
                height={32}
                className="h-7 w-7"
              />
              <span className="text-xl font-headline font-bold text-foreground group-hover:text-accent transition-colors">
                UltronAI
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Intelligent Avatars, Human-like Interactions.
            </p>
          </div>

          {/* Dynamic Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-md font-semibold mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[var(--brand)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-8 border-t border-border/50 text-center text-sm text-gray-400">
          &copy; {currentYear} UltronAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
