import { SKILLS } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-14 py-24">
      <SectionHeader title="Technical" italic="Toolkit" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border reveal">
        {SKILLS.map((group) => (
          <div
            key={group.label}
            className="bg-bg px-8 py-9 group hover:bg-surface transition-colors"
          >
            <p className="text-[10px] tracking-[0.18em] uppercase text-gold mb-5 font-normal">
              {group.label}
            </p>
            <div className="flex flex-col gap-[9px]">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-[10px] text-[13px] text-muted group-hover:text-ink transition-colors"
                >
                  <span className="w-4 h-px bg-faint shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
