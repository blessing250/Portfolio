import { BriefcaseBusiness } from 'lucide-react'
import { experience } from '../data/portfolio'
import { sectionClass, SectionHeading } from './shared'

export default function ExperienceSection() {
  return (
    <section className={sectionClass} id="experience">
      <SectionHeading label="05 / EXPERIENCE" />
      <div className="grid grid-cols-[.78fr_1.22fr] gap-[70px] pt-[54px] max-md:gap-[35px] max-sm:block max-sm:pt-[41px]">
        <div><h2 className="m-0 text-[clamp(34px,4.1vw,51px)] leading-[1.1] font-normal tracking-[-.055em] text-slate-100 max-sm:text-[39px]">Learning through<br /><em className="font-display font-normal text-slate-400">real work.</em></h2><p className="mt-[18px] max-w-[280px] text-[11px] leading-[1.8] text-slate-400 max-sm:mb-8">Experience across software development, technical contribution, and IT support.</p></div>
        <div className="relative">
          <span className="absolute top-[18px] bottom-[30px] left-[17px] w-px bg-line" aria-hidden="true" />
          {experience.map((item) => <article className="relative grid grid-cols-[35px_1fr] gap-[17px] pb-[31px]" key={item.organization}>
            <div className="z-10 grid size-[35px] place-items-center rounded-full border border-[#26364a] bg-[#111923] text-portfolio-blue"><BriefcaseBusiness size={16} /></div>
            <div className="pt-0.5"><p className="m-0 text-[9px] tracking-wide text-slate-500">{item.period}</p><h3 className="mt-[9px] mb-1 text-[15px] font-medium text-slate-200">{item.role}</h3><h4 className="m-0 text-[11px] font-normal text-slate-400">{item.organization}</h4><p className="mt-[10px] max-w-[440px] text-[10px] leading-[1.75] text-slate-500">{item.description}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
