import { useEffect, useState } from 'react'
import { navItems } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('home')

  // Navbar background + scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 40)
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = navItems.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={() => setOpen(false)}
        aria-current={active === id ? 'true' : undefined}
        className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active === id ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
        }`}
      >
        {label}
      </a>
    </li>
  ))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled || open ? 'bg-night/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#home" className="font-display text-xl font-medium text-white">
          Portfolio
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-1">{links}</ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main navigation" className="px-6 pb-5 md:hidden">
          <ul className="flex flex-col gap-1">{links}</ul>
        </nav>
      )}

      {/* Scroll progress */}
      <div
        aria-hidden="true"
        className="h-0.5 bg-linear-to-r from-violet-glow via-magenta-glow to-mint-glow"
        style={{ width: `${progress}%` }}
      />
    </header>
  )
}
