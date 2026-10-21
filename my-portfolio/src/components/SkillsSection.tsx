import { Code2, Database } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { sectionClass, SectionHeading } from './shared'

export default function SkillsSection() {
  return (
    <section className={sectionClass} id="skills">
      <SectionHeading label="04 / SKILLS" aside="Tools I’ve worked with" />
      <div className="grid grid-cols-2 items-end gap-[55px] py-[50px] pb-[42px] max-sm:block max-sm:pt-10 max-sm:pb-[29px]">
        <h2 className="m-0 text-[clamp(34px,4.1vw,51px)] leading-[1.1] font-normal tracking-[-.055em] text-slate-100 max-sm:text-[39px]">Good tools.<br /><em className="font-display font-normal text-slate-400">Thoughtful work.</em></h2>
        <p className="mb-1 max-w-[395px] text-xs leading-[1.8] text-slate-400 max-sm:mt-[17px]">My toolkit keeps growing as I take on new problems. These are the languages, frameworks, and databases I’ve used so far.</p>
      </div>
      <div className="grid grid-cols-4 border-y border-line max-sm:grid-cols-2">
        {skillGroups.map((group, index) => <div className={`py-[21px] pr-[17px] pb-[23px] ${index > 0 ? 'border-l border-line pl-[18px] max-sm:pl-[13px]' : ''} ${index > 1 ? 'max-sm:border-t max-sm:border-line' : ''} ${index === 2 ? 'max-sm:pl-0 max-sm:border-l-0' : ''}`} key={group.name}>
          <div className="mb-4 flex items-center gap-[9px]"><span className="text-portfolio-blue">{index < 2 ? <Code2 size={17} /> : <Database size={17} />}</span><h3 className="m-0 text-[11px] font-medium text-slate-200 max-sm:text-[10px]">{group.name}</h3></div>
          <div className="flex flex-wrap gap-[7px]">{group.items.map((skill) => <span className="border border-line px-2 py-[6px] text-[9px] text-slate-400 max-sm:text-[8px]" key={skill}>{skill}</span>)}</div>
        </div>)}
      </div>
      <div className="pt-5 text-right text-[9px] text-slate-500"><span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-300" />Open to learning what the work calls for</div>
    </section>
  )
}
