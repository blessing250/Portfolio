import { ArrowUpRight, Code2 } from 'lucide-react'
import { profile, projects } from '../data/portfolio'
import { sectionClass, SectionHeading } from './shared'

const projectThemes = [
  { surface: 'bg-[#141d29]', accent: 'bg-blue-400', orbit: 'border-blue-400/25' },
  { surface: 'bg-[#17212b]', accent: 'bg-teal-300', orbit: 'border-teal-300/25' },
  { surface: 'bg-[#171d2a]', accent: 'bg-violet-300', orbit: 'border-violet-300/25' },
  { surface: 'bg-[#1a1f2b]', accent: 'bg-rose-400', orbit: 'border-rose-400/25' },
]

function ProjectArtwork({ index }: { index: number }) {
  const theme = projectThemes[index % projectThemes.length]
  return (
    <div className={`relative h-[251px] overflow-hidden border border-white/10 ${theme.surface} max-sm:h-[218px]`} aria-hidden="true">
      <div className="absolute top-[13px] right-[15px] left-[15px] flex justify-between text-[7px] tracking-[.14em] text-slate-500"><span>{projects[index].artLabel}</span><span>0{index + 1} / 03</span></div>
      <div className="absolute top-[20%] left-[13%] flex h-[72%] w-3/4 -rotate-y-6 -rotate-x-2 border border-white/10 bg-[#0d131b] shadow-[0_18px_50px_#05080c88]">
        <div className="flex w-[18%] flex-col gap-[10px] border-r border-white/10 px-[9px] py-[14px]"><b className={`mb-[5px] size-[13px] rounded ${theme.accent} opacity-80`} /><i className="h-[3px] w-4/5 bg-slate-700" /><i className="h-[3px] w-4/5 bg-blue-400/60" /><i className="h-[3px] w-4/5 bg-slate-700" /><i className="h-[3px] w-4/5 bg-slate-700" /></div>
        <div className="flex-1 p-[13px]">
          <div className="flex h-[22px] items-center gap-[7px]"><b className="mr-auto h-[5px] w-[31%] bg-slate-400" /><span className="h-[9px] w-[17px] bg-slate-800" /><span className="h-[9px] w-[17px] bg-slate-800" /></div>
          <div className="my-[9px] mt-[5px] flex gap-[7px]">{[1, 2, 3].map((item) => <i className="h-[35px] flex-1 border border-slate-700 bg-gradient-to-br from-[#172638] to-[#111922]" key={item} />)}</div>
          <div className="flex h-[51px] items-end gap-[5px] border-b border-slate-700 px-[9px] pt-[5px]">{[25, 57, 78, 45, 66, 33, 74, 51].map((height, item) => <b className={`flex-1 ${theme.accent} opacity-70`} style={{ height: `${height}%` }} key={item} />)}</div>
          <div className="flex flex-col gap-[5px] pt-[9px]"><i className="h-[3px] w-full bg-slate-700" /><i className="h-[3px] w-[77%] bg-slate-700" /><i className="h-[3px] w-full bg-slate-700" /></div>
        </div>
      </div>
      <div className={`absolute right-[-75px] bottom-[-91px] size-[155px] rounded-full border shadow-[0_0_0_18px_rgba(101,168,255,.03),0_0_0_38px_rgba(101,168,255,.02)] ${theme.orbit}`} />
    </div>
  )
}

function ProjectCard({ index }: { index: number }) {
  const project = projects[index]
  return (
    <article className="grid min-h-[299px] grid-cols-[.95fr_1.05fr] items-center gap-[54px] border-b border-line py-[23px] max-md:gap-[26px] max-sm:flex max-sm:flex-col max-sm:items-stretch max-sm:gap-[19px] max-sm:py-5">
      <ProjectArtwork index={index} />
      <div className="relative grid min-h-[220px] grid-cols-[88px_1fr] gap-[19px] max-md:min-h-0 max-md:grid-cols-[55px_1fr] max-md:gap-3">
        <div className="flex flex-col gap-2 pt-[5px] text-[8px] uppercase tracking-[.09em] text-slate-500"><span className="text-[10px] text-portfolio-blue">0{index + 1}</span><span>{project.category}</span></div>
        <div><h3 className="mr-[30px] mb-3 text-[21px] leading-[1.28] font-normal tracking-[-.025em] text-slate-200 max-md:text-lg max-sm:text-[19px]">{project.name}</h3><p className="mb-2 max-w-[390px] text-[11px] leading-[1.75] text-slate-400">{project.description}</p><p className="mb-2 max-w-[390px] text-[10px] leading-[1.75] text-slate-500">{project.detail}</p><div className="mt-4 flex flex-wrap gap-[6px]">{project.stack.map((item) => <span className="border border-line bg-[#141e2a] px-2 py-[5px] text-[8px] text-slate-400" key={item}>{item}</span>)}</div></div>
        {project.href && <a className="absolute top-0 right-0 text-slate-400 transition hover:text-portfolio-blue" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={18} /></a>}
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section className={sectionClass} id="projects">
      <SectionHeading label="03 / PROJECTS" aside="A few systems I’ve contributed to" />
      <div className="mt-[38px] border-t border-line">{projects.map((project, index) => <ProjectCard index={index} key={project.name} />)}</div>
      <a className="ml-auto mt-[27px] flex w-fit items-center gap-[13px] border border-line px-[15px] py-3 transition hover:border-portfolio-blue/60 hover:bg-[#111a25] max-sm:ml-0 max-sm:w-full" href={profile.github} target="_blank" rel="noreferrer">
        <span className="grid size-[34px] place-items-center bg-[#172b43] text-portfolio-blue"><Code2 size={19} /></span><span><b className="block text-[10px] font-medium text-slate-200">More code on GitHub</b><small className="mt-1 block text-[9px] text-slate-500">Browse repositories and ongoing work</small></span><ArrowUpRight className="ml-[15px] text-slate-400 max-sm:ml-auto" size={17} />
      </a>
    </section>
  )
}
