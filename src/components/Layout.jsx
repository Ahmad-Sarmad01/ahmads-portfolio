import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiArrowUp } from 'react-icons/fi'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' }, { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' }, { id: 'certs', label: 'Certifications' },
  { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 })
    NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    const onScroll = () => setSticky(window.scrollY > 18)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <div className="min-h-screen flex flex-col overflow-clip">
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isSticky ? 'border-white/10 bg-[#0b1113]/90 backdrop-blur-xl' : 'border-transparent bg-[#0b1113]/75 backdrop-blur-md'}`}>
      <div className="section-wrap flex min-h-[76px] items-center justify-between gap-4">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }} className="shrink-0 text-white font-extrabold tracking-tight text-lg">Ahmad<span className="text-primary">.</span></a>
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className={`rounded-full px-3 py-2 text-xs transition ${active === item.id ? 'text-primary bg-primary/10' : 'text-slate-400 hover:text-white'}`}>{item.label}</button>)}
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white hover:border-primary/60">
          {open ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </div>
      {open && <nav className="xl:hidden border-t border-white/10 bg-[#0b1113]/98 px-4 py-3" aria-label="Mobile navigation"><div className="section-wrap grid grid-cols-2 gap-2 sm:grid-cols-4">
        {NAV_ITEMS.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className={`rounded-xl border px-3 py-3 text-left text-sm ${active === item.id ? 'border-primary/40 bg-primary/10 text-primary' : 'border-white/10 text-slate-300'}`}>{item.label}</button>)}
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="col-span-2 rounded-xl border border-primary/40 px-3 py-3 text-center text-sm text-primary sm:col-span-4">Download résumé ↗</a>
      </div></nav>}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="border-t border-white/10 py-7">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Ahmad Sarmad.</p>
        <div className="flex items-center gap-5 text-xs text-slate-400"><a className="hover:text-primary" href="https://github.com/Ahmad-Sarmad01" target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-primary" href="https://www.linkedin.com/in/muhammad-ahmad-849b2a2a8/?isSelfProfile=false" target="_blank" rel="noreferrer">LinkedIn</a><button onClick={() => scrollTo('hero')} className="flex items-center gap-1 text-primary"><FiArrowUp /> Back to top</button></div>
      </div>
    </footer>
  </div>
}
