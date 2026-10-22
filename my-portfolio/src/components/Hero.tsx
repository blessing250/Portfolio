import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
import { containerClass, eyebrowClass, linkMotionClass } from './shared'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const portrait = portraitRef.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !portrait) return

    const entrance = animate(heroRef.current?.querySelectorAll('[data-enter]') ?? [], {
      opacity: [0, 1], y: [22, 0], delay: stagger(110, { start: 120 }),
      duration: 760, ease: 'out(3)',
    })
    const portraitMotion = animate(portrait, {
      translateY: [-4, 4], scale: [1, 1.018], duration: 2800,
      ease: 'inOutSine', alternate: true, loop: true,
    })

    return () => {
      entrance.cancel()
      portraitMotion.cancel()
    }
  }, [])

  return (
    <section className={`${containerClass} relative grid min-h-[660px] grid-cols-[1.15fr_.85fr] items-center pt-[106px] pb-20 max-md:min-h-0 max-md:grid-cols-[1fr_.72fr] max-md:gap-0 max-md:pt-[86px] max-md:pb-[109px] max-sm:flex max-sm:flex-col max-sm:items-stretch max-sm:pt-[60px]`} id="home" ref={heroRef}>
      <div className="relative z-10 pb-[38px] max-sm:pb-0">
        <p className={`${eyebrowClass} flex items-center`} data-enter><span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#72d9a077]" /> 01 / HOME <span className="px-2 text-slate-600">·</span> SOFTWARE ENGINEER</p>
        <p className="mt-[22px] mb-[-13px] font-display text-2xl text-portfolio-blue" data-enter>{profile.name || 'Your Name'}</p>
        <h1 className="mt-[27px] mb-5 max-w-[670px] text-[clamp(46px,6.4vw,79px)] leading-[.99] font-medium tracking-[-.065em] text-slate-100 max-md:text-[clamp(44px,8vw,65px)] max-sm:mt-[23px] max-sm:text-[clamp(44px,13vw,63px)]">
          <span data-enter className="block">Building useful</span>
          <span data-enter className="block font-display font-normal italic tracking-[-.055em] text-slate-400">software for people.</span>
        </h1>
        <p className="max-w-[430px] text-sm leading-[1.8] text-slate-400 max-sm:text-[13px]" data-enter>I'm a software engineer focused on building practical software solutions, reliable applications, and data-driven systems. I enjoy turning complex requirements into useful digital tools through backend development and full-stack engineering.</p>
        <div className="mt-7 flex items-center gap-6" data-enter>
          <a className="inline-flex items-center gap-4 bg-portfolio-blue px-4 py-[13px] text-[11px] font-semibold text-[#08111c] transition hover:-translate-y-0.5 hover:bg-blue-300" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
          <a className={`inline-flex items-center gap-2 text-[11px] text-slate-200 ${linkMotionClass}`} href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={15} /></a>
        </div>
        <div className="mt-[65px] flex items-baseline gap-5 border-t border-line pt-[17px] max-md:mt-[45px] max-md:block" data-enter>
          <span className="shrink-0 text-[8px] tracking-[.15em] text-slate-500">FOCUS AREAS</span>
          <p className="mt-0 flex flex-wrap items-center gap-[10px] text-[10px] text-slate-400 max-md:mt-[9px]">Backend engineering <i className="size-[3px] rounded-full bg-portfolio-blue" /> Full-stack development <i className="size-[3px] rounded-full bg-portfolio-blue" /> Enterprise Applications</p>
        </div>
      </div>
      <div className="relative ml-auto grid h-[470px] w-full max-w-[410px] place-items-center max-md:h-[385px] max-sm:mt-[38px] max-sm:mr-auto max-sm:h-[365px] max-sm:w-[82%]">
        <div className="absolute inset-[11px_23px_25px_38px] overflow-hidden rounded-t-[190px] rounded-b-sm bg-slate-100 shadow-[0_28px_80px_rgba(0,0,0,.2)] max-md:inset-[13px_0_22px_12px] max-sm:inset-[8px_19px_21px_26px]">
          <img ref={portraitRef} className="h-full w-full object-cover object-[center_27%] saturate-[.78] contrast-[1.02] will-change-transform" src="/images/profile.jpeg" alt="Portrait of the portfolio owner" />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/35 to-transparent" />
        </div>
        <div className="absolute -z-10 top-[5px] right-[-20px] size-[380px] rounded-full border border-portfolio-blue/20 max-md:right-[-38px] max-md:size-[300px] max-sm:right-[-21px] max-sm:size-[290px]" />
        <div className="absolute bottom-0 left-[-8px] z-10 flex items-center gap-3 font-display text-[13px] leading-[1.4] italic text-slate-300 max-md:left-[-25px] max-md:text-[11px] max-sm:left-[-24px]">
          <span className="h-px w-[35px] bg-portfolio-blue" /><span>Thoughtful by design.<br />Practical by nature.</span>
        </div>
        <p className="absolute right-[-2px] bottom-2 m-0 text-[9px] tracking-[.14em] text-slate-400">01 <span className="px-[5px] text-portfolio-blue">—</span> 04</p>
      </div>
      <a className="absolute bottom-[29px] left-0 inline-flex items-center gap-3 text-[8px] tracking-[.17em] text-slate-500 max-md:bottom-9 max-sm:bottom-8" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown className="text-portfolio-blue" size={15} /></a>
    </section>
  )
}
