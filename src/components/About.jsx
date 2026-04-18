import { PERSONAL } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-14 py-24">
      <SectionHeader title="About" italic="Me" />

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Text */}
        <div className="flex flex-col gap-5 reveal">
          {[
            <>I'm a <strong className="text-ink font-normal">Computer Science graduate</strong> from the University of North Texas, class of 2025 — focused on Software engineering.</>,
            <>My first real project was a Discord bot. Watching people actually use it — benefit from it, enjoy it — sparked something I hadn't felt before. That moment is what made me curious about software engineering.</>,
            <>I build with that same intention now. I care about writing code that does something real for real people, not just code that works on my machine.</>,
            <>I'm looking for an entry-level software engineering role where I can contribute, keep growing, and work alongside senior engineers I can learn from.</>,
          ].map((text, i) => (
            <p key={i} className="text-[15px] text-muted leading-[1.85]">
              {text}
            </p>
          ))}
        </div>

        {/* Aside */}
        <div className="flex flex-col gap-4 reveal">
          {/* GitHub block */}
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-7 py-6 border border-border bg-surface hover:border-gold-dim transition-all group"
          >
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-gold mb-1 font-normal">
                GitHub · Building in public
              </p>
              <p className="text-[14px] text-ink">{PERSONAL.githubLabel}</p>
            </div>
            <span className="text-[18px] text-muted group-hover:translate-x-1 group-hover:text-gold transition-all">
              →
            </span>
          </a>

          {/* Info blocks */}
          {[
            {
              title: 'Education',
              rows: [{ label: 'Computer Science — B.S.', value: '2025' }],
            },
            {
              title: 'Target Roles',
              rows: [
                { label: 'Junior Software Engineer', value: '↗' },
                { label: 'Entry-Level SWE', value: '↗' },
                { label: 'Associate Software Engineer', value: '↗' },
              ],
            },
          ].map((block) => (
            <div key={block.title} className="border border-border bg-surface px-7 py-7">
              <p className="text-[10px] tracking-[0.18em] uppercase text-gold mb-4 font-normal">
                {block.title}
              </p>
              {block.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2 border-b border-border last:border-b-0 text-[13px]"
                >
                  <span className="text-muted">{row.label}</span>
                  <span className="text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
