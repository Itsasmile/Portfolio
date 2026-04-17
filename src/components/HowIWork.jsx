import SectionHeader from './SectionHeader'

const PRINCIPLES = [
  {
    title: 'I learn by building',
    desc: 'I don\'t wait until I feel ready. I pick up a new tool, build something real with it, and figure out the hard parts along the way.',
  },
  {
    title: 'I use AI as a tool, not a crutch',
    desc: 'I use AI to move faster — but I make sure I understand everything I ship. I can explain every decision in my code.',
  },
  {
    title: 'I care about the fundamentals',
    desc: 'Frameworks come and go. I focus on the underlying concepts — OOP, clean code, and how systems talk to each other, because those are transferable anywhere.',
  },
  {
    title: 'Ship, then improve',
    desc: 'Working software on a real URL beats perfect code that never deploys. I get things live, then iterate.',
  },
]

export default function HowIWork() {
  return (
    <section id="approach" className="max-w-[1100px] mx-auto px-14 py-24">
      <SectionHeader title="How I" italic="Work" />

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border reveal">
        {PRINCIPLES.map((p) => (
          <div
            className="bg-bg px-10 py-10 group hover:bg-surface transition-colors"
          >
            <span className="text-[11px] text-gold-dim tracking-[0.15em] font-normal block mb-5">
            </span>
            <h3 className="font-display text-[19px] font-bold tracking-tight mb-4 leading-snug group-hover:text-gold transition-colors">
              {p.title}
            </h3>
            <p className="text-[13px] text-muted leading-[1.75]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
