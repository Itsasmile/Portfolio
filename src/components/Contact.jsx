import { PERSONAL } from '../data/content'

const LINKS = [
  { type: 'Email',    val: PERSONAL.email,         href: `mailto:${PERSONAL.email}`,  arrow: '→' },
  { type: 'GitHub',   val: PERSONAL.githubLabel,   href: PERSONAL.github,             arrow: '→' },
  { type: 'LinkedIn', val: PERSONAL.linkedinLabel, href: PERSONAL.linkedin,           arrow: '→' },
  { type: 'Resume',   val: 'Download PDF',         href: PERSONAL.resume,             arrow: '↓', download: true },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-[1100px] mx-auto px-14 py-24 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div className="reveal">
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight mb-5">
            Let's build<br />
            <em className="italic font-normal text-gold">something.</em>
          </h2>
          <p className="text-[14px] text-muted mb-10 leading-[1.8]">
            Open to junior cloud, AI, and software engineering roles — especially within the Microsoft ecosystem. Always happy to connect.
          </p>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-[10px] text-[12px] font-medium tracking-[0.1em] uppercase px-7 py-[13px] bg-gold text-bg border border-gold hover:bg-transparent hover:text-gold transition-all"
          >
            Send an Email
          </a>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-[2px] reveal">
          {LINKS.map((l) => (
            <a
              key={l.type}
              href={l.href}
              target={l.download ? undefined : '_blank'}
              rel="noreferrer"
              download={l.download}
              className="flex items-center justify-between px-6 py-5 border border-border bg-surface hover:border-gold-dim hover:bg-lifted transition-all group"
            >
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-gold-dim mb-[3px] font-normal">
                  {l.type}
                </p>
                <p className="text-[14px] text-ink">{l.val}</p>
              </div>
              <span className="text-[18px] text-muted group-hover:translate-x-1 group-hover:text-gold transition-all">
                {l.arrow}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
