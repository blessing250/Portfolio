export const containerClass = 'mx-auto w-[calc(100%-2.75rem)] max-w-[1160px]'
export const sectionClass = `${containerClass} border-t border-line py-24 md:py-28 max-sm:py-[72px]`
export const eyebrowClass = 'm-0 text-[9px] font-semibold tracking-[.18em] text-portfolio-blue'
export const linkMotionClass = 'transition-colors duration-200 hover:text-portfolio-blue'

export function SectionHeading({ label, aside }: { label: string; aside?: string }) {
  return (
    <div className="flex min-h-[18px] items-center gap-5 max-sm:gap-3">
      <p className={eyebrowClass}>{label}</p>
      <span className="h-px flex-1 bg-line" />
      {aside && <p className="text-[10px] text-slate-500 max-sm:text-[9px]">{aside}</p>}
    </div>
  )
}
