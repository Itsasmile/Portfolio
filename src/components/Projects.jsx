import { PROJECTS } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-14 py-24">
      <SectionHeader title="Selected" italic="Work" />

      <div className="flex flex-col reveal">
        {PROJECTS.map((p, i) => (
          <div
            key={p.index}
            className="grid grid-cols-[72px_1fr_auto] gap-10 items-start py-10 border-b border-border first:border-t first:border-border hover:bg-surface hover:-mx-8 hover:px-8 transition-all"
          >
            {/* Index */}
            <span className="text-[11px] text-gold-dim tracking-[0.1em] pt-1">
              {p.index}
            </span>

            {/* Body */}
            <div>
              <h3 className="font-display text-[22px] font-bold tracking-tight mb-[10px]">
                {p.title}
              </h3>
              <p className="text-[14px] text-muted max-w-[560px] mb-5 leading-[1.75]">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.1em] uppercase text-muted border border-border2 px-[10px] py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="text-right pt-1 hidden md:block">
              <p
                className={`text-[10px] tracking-[0.12em] uppercase mb-3 ${
                  p.live ? 'text-gold' : 'text-muted'
                }`}
              >
                {p.status}
              </p>
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-muted tracking-[0.08em] hover:text-ink transition-colors"
                >
                  GitHub ↗
                </a>
              ) : (
                <span className="text-[11px] text-faint tracking-[0.06em]">
                  In development
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Coming soon placeholder */}
      <div className="mt-[2px] border border-dashed border-border2 px-12 py-12 text-center reveal">
        <p className="font-display text-[17px] italic text-muted mb-2">
          More projects arriving over the next 4 months
        </p>
        <p className="text-[12px] text-faint tracking-[0.08em]">
          Building in public · Follow on GitHub for updates
        </p>
      </div>
    </section>
  )
}
