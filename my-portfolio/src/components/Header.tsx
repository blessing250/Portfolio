import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'
import { containerClass, linkMotionClass } from './shared'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${containerClass} relative z-20 flex h-[82px] items-center justify-between border-b border-line max-sm:h-[70px]`}>
      <a className="inline-flex items-center gap-[11px] text-xs font-semibold tracking-wide text-slate-200" href="#home" aria-label="Home" onClick={closeMenu}>
        <img className="size-10 rounded-full border border-portfolio-blue/30 object-cover" src="/images/nbp-mark.png" alt="" />
        <span>{profile.title}</span>
      </a>
      <button className="hidden border-0 bg-transparent p-2 text-slate-100 max-md:block" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute top-full right-0 left-0 flex-col border border-line bg-[#111720] p-4 text-xs text-slate-300 md:static md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 lg:gap-[34px]`} aria-label="Main navigation">
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#home" onClick={closeMenu}>Home</a>
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#about" onClick={closeMenu}>About</a>
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#projects" onClick={closeMenu}>Projects</a>
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#skills" onClick={closeMenu}>Skills</a>
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#experience" onClick={closeMenu}>Experience</a>
        <a className={`px-2 py-3 md:p-0 ${linkMotionClass}`} href="#education" onClick={closeMenu}>Education</a>
        <a className="mt-2 inline-flex items-center justify-between gap-1 border border-line px-3 py-[10px] text-slate-100 transition-colors hover:border-portfolio-blue/50 md:mt-0" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}
