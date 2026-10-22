import { ArrowRight } from 'lucide-react'
import { sectionClass, SectionHeading } from './shared'

const values = ['Practical problem-solving', 'Reliable software systems', 'Continuous learning and growth', 'Collaboration and teamwork', 'User-focused design', 'Adaptability and flexibility']

export default function AboutSection() {
  return (
    <section className={sectionClass} id="about">
      <SectionHeading label="02 / ABOUT" />
      <div className="grid grid-cols-[1.1fr_.9fr] gap-[55px] py-[59px] max-md:gap-[30px] max-sm:block max-sm:py-[42px]">
        <h2 className="m-0 text-[clamp(34px,4.1vw,51px)] leading-[1.1] font-normal tracking-[-.055em] text-slate-100 max-sm:text-[39px]">Curious about how<br />good systems <em className="font-display font-normal text-slate-400">work.</em></h2>
        <div className="max-w-[475px] max-sm:mt-[23px]">
          <p className="mb-[15px] text-[13px] leading-[1.85] text-slate-400">I'm a software engineer focused on building practical, reliable software solutions. My interests span backend development, full-stack engineering, and enterprise applications that solve real-world problems.</p>
          <p className="mb-[15px] text-[13px] leading-[1.85] text-slate-400">Through my work and projects, I've explored Workflow management systems, digital information platforms,Role-Based Access, Attendance Tracking and wellness solutions. I enjoy turning complex requirements into software that is useful, maintainable, and easy to work with.</p>
          <a className="mt-2 inline-flex items-center gap-[7px] text-[11px] text-portfolio-blue" href="#experience">More about my journey <ArrowRight size={16} /></a>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-line pt-[18px] max-sm:grid-cols-1 max-sm:gap-[11px]">
        {values.map((value, index) => <div className="flex items-baseline gap-[14px] max-sm:gap-[13px]" key={value}><span className="text-[9px] text-portfolio-blue">0{index + 1}</span><p className="m-0 text-[10px] text-slate-300">{value}</p></div>)}
      </div>
    </section>
  )
}
