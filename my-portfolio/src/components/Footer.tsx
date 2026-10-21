import { profile } from '../data/portfolio'
import { containerClass } from './shared'

export default function Footer() {
  return (
    <footer className={`${containerClass} flex h-[61px] items-center justify-between border-t border-line text-[9px] text-slate-500`}>
      <span>© {new Date().getFullYear()} <b className="font-medium text-slate-300">{profile.title}</b></span>
      <span>Built with care <span className="pl-[3px] text-[7px] text-portfolio-blue">●</span></span>
    </footer>
  )
}
