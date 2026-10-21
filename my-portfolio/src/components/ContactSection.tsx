import { AtSign, ArrowUpRight, Code2, Link2, Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { eyebrowClass, linkMotionClass, sectionClass, SectionHeading } from './shared'

export default function ContactSection() {
  return (
    <section className={sectionClass} id="contact">
      <SectionHeading label="07 / CONTACT" />
      <div className="mt-8 border border-portfolio-blue/20 bg-gradient-to-br from-[#121a25] via-[#101721] to-[#131e2b] px-[30px] pt-[23px] pb-5 max-sm:px-[17px] max-sm:pt-[19px] max-sm:pb-4">
        <div className="flex items-center justify-between"><p className={eyebrowClass}><span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-300" /> LET’S TALK ABOUT WHAT YOU’RE BUILDING</p><span className="text-[9px] tracking-[.1em] text-slate-500">07 / 07</span></div>
        <div className="flex items-end justify-between gap-5 py-[42px] max-md:flex-col max-md:items-start max-sm:py-[37px]">
          <div><h2 className="m-0 text-[clamp(38px,5vw,57px)] leading-[1.02] font-normal tracking-[-.06em] text-slate-100 max-sm:text-[47px]">Have a good<br />problem to <em className="font-display font-normal text-slate-400">solve?</em></h2><p className="mt-[14px] text-[11px] text-slate-400">I’d be glad to hear what you’re building.</p></div>
        </div>
        <div className="grid grid-cols-3 border-t border-line max-md:grid-cols-2 max-sm:grid-cols-1">
          <a className={`flex min-w-0 items-center gap-3 border-b border-line py-4 pr-4 ${linkMotionClass}`} href={`mailto:${profile.email}`}><span className="grid size-9 shrink-0 place-items-center bg-[#172b43] text-portfolio-blue"><Mail size={17} /></span><span className="min-w-0"><b className="block text-[11px] font-medium text-slate-200">Email</b><small className="mt-1 block truncate text-[10px] text-slate-500">{profile.email}</small></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={15} /></a>
          <a className={`flex min-w-0 items-center gap-3 border-b border-line px-4 py-4 max-md:px-0 ${linkMotionClass}`} href={profile.github} target="_blank" rel="noreferrer"><span className="grid size-9 shrink-0 place-items-center bg-[#172b43] text-portfolio-blue"><Code2 size={17} /></span><span><b className="block text-[11px] font-medium text-slate-200">GitHub</b><small className="mt-1 block text-[10px] text-slate-500">github.com/blessing250</small></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={15} /></a>
          <a className={`flex min-w-0 items-center gap-3 border-b border-line py-4 pl-4 max-md:px-0 ${linkMotionClass}`} href={profile.linkedin} target="_blank" rel="noreferrer"><span className="grid size-9 shrink-0 place-items-center bg-[#172b43] text-portfolio-blue"><Link2 size={17} /></span><span className="min-w-0"><b className="block text-[11px] font-medium text-slate-200">LinkedIn</b><small className="mt-1 block truncate text-[10px] text-slate-500">nshuti-blessing-prince</small></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={15} /></a>
          <a className={`flex min-w-0 items-center gap-3 border-b border-line py-4 pr-4 ${linkMotionClass}`} href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}><span className="grid size-9 shrink-0 place-items-center bg-[#172b43] text-portfolio-blue"><Phone size={17} /></span><span><b className="block text-[11px] font-medium text-slate-200">Contacts</b><small className="mt-1 block text-[10px] text-slate-500">Call or text · {profile.phone}</small></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={15} /></a>
          {profile.instagram ? <a className={`flex min-w-0 items-center gap-3 border-b border-line px-4 py-4 max-md:px-0 ${linkMotionClass}`} href={profile.instagram} target="_blank" rel="noreferrer"><span className="grid size-9 shrink-0 place-items-center bg-[#172b43] text-portfolio-blue"><AtSign size={17} /></span><span className="min-w-0"><b className="block text-[11px] font-medium text-slate-200">Instagram</b><small className="mt-1 block truncate text-[10px] text-slate-500">View Instagram profile</small></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={15} /></a> : <div className="flex min-w-0 items-center gap-3 border-b border-line px-4 py-4 text-slate-500 max-md:px-0"><span className="grid size-9 shrink-0 place-items-center bg-[#17202b]"><AtSign size={17} /></span><span><b className="block text-[11px] font-medium text-slate-400">Instagram</b><small className="mt-1 block text-[10px]">Profile link to add</small></span></div>}
        </div>
        <div className="pt-4 text-right"><a className={`inline-flex items-center gap-[7px] text-[9px] text-slate-400 ${linkMotionClass}`} href="#home">Back to top <ArrowUpRight size={13} /></a></div>
      </div>
    </section>
  )
}
