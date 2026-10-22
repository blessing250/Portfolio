import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import { sectionClass, SectionHeading } from './shared'

export default function EducationSection() {
  return (
    <section className={sectionClass} id="education">
      <SectionHeading label="06 / EDUCATION" />
      <div className="mt-12 grid grid-cols-[.78fr_1.22fr] gap-[70px] max-md:gap-[35px] max-sm:mt-9 max-sm:grid-cols-1">
        <h2 className="m-0 text-[clamp(34px,4.1vw,51px)] leading-[1.1] font-normal tracking-[-.055em] text-slate-100 max-sm:text-[39px]">A foundation<br />in <em className="font-display font-normal text-slate-400">computing.</em></h2>
        <article className="flex items-start gap-5 border-y border-line py-6">
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#26364a] bg-[#111923] text-portfolio-blue"><GraduationCap size={20} /></span>
          <div><p className="m-0 text-[10px] tracking-wide text-slate-500">{education.period}</p><h3 className="mt-2 mb-1 text-lg font-medium text-slate-200">{education.degree}</h3><p className="m-0 text-xs text-slate-400">{education.option}</p><p className="m-0 text-xs text-slate-400">{education.school}</p></div>
        </article>
      </div>
    </section>
  )
}
