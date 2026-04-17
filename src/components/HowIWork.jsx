import SectionHeader from './SectionHeader'

const PRINCIPLES = [
  {

    title:  'I build with AI, not just alongside it',
    desc:   'Every project I ship uses LLMs as a core architectural layer — not a feature bolted on at the end. I understand what\'s underneath the API call.',
  },
  {
    title:  'Azure-first',
    desc:   'Cloud infrastructure is the foundation. I don\'t just call APIs — I deploy, manage, and architect what runs them on Azure.',
  },
  {
    title:  'I can explain every line',
    desc:   'Nothing in my portfolio is copy-pasted and forgotten. I can walk through architecture decisions, tradeoffs, and implementation details in any interview.',
  },
  {
    title:  'Ship, then improve',
    desc:   'Working software on a real URL beats perfect code that never deploys. I get things live, then iterate — that\'s how real products are built.',
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
