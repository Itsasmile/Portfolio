import { ROADMAP } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Roadmap() {
  return (
    <section id="roadmap" className="max-w-[1100px] mx-auto px-14 py-24">
      <SectionHeader number="00" title="The" italic="Roadmap" />

      <div className="flex flex-col">
        {ROADMAP.map((item) => (
          <div
            key={item.period}
            className="grid grid-cols-[140px_1fr] reveal"
          >
            {/* Left — period + timeline dot */}
            <div className="relative flex flex-col items-end pr-8 pt-7 border-r border-border">
              <span
                className={`text-[11px] tracking-[0.12em] uppercase font-normal ${
                  item.active ? 'text-gold' : 'text-muted'
                }`}
              >
                {item.period}
              </span>
              {/* Timeline dot */}
              <div
                className={`absolute -right-[5px] top-9 w-[9px] h-[9px] rounded-full border ${
                  item.active
                    ? 'bg-gold border-gold shadow-[0_0_0_4px_rgba(201,169,110,0.12)]'
                    : item.done
                    ? 'bg-gold-dim border-gold-dim'
                    : 'bg-bg border-border2'
                }`}
              />
            </div>

            {/* Right — content */}
            <div className="pl-10 pb-10 pt-7 border-b border-border last:border-b-0">
              {item.active && (
                <div className="inline-flex items-center gap-[6px] text-[10px] tracking-[0.1em] uppercase text-gold border border-gold/25 bg-gold/[0.06] px-[9px] py-[3px] mb-3">
                  <span className="w-[5px] h-[5px] rounded-full bg-gold animate-blink" />
                  In Progress
                </div>
              )}
              <h3
                className={`font-display text-[19px] font-bold tracking-tight mb-2 ${
                  item.active ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.7] max-w-[520px] mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-[6px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] tracking-[0.1em] uppercase px-[9px] py-[3px] border ${
                      item.active
                        ? 'border-gold/20 text-gold-dim'
                        : 'border-border2 text-muted'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
