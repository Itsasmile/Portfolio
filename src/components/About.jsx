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
            <>I'm a <strong className="text-ink font-normal">Computer Science graduate</strong> focused on cloud infrastructure and Software/AI engineering — specifically the Microsoft Azure ecosystem.</>,
            <>My path is deliberate: <strong className="text-ink font-normal">C# and Python in parallel</strong>, Azure certifications as milestones, and real projects that demonstrate what I can actually build — not just what I've studied.</>,
            <>I use AI as a force multiplier. Every project in this portfolio is something I understand end-to-end. I can walk through the architecture, explain every decision, and extend it further.</>,
            <>Long-term I'm building toward a <strong className="text-ink font-normal">Solutions Architect</strong> role within the Microsoft ecosystem — starting with a Platform or Software/AI engineering position where I can grow alongside strong senior engineers.</>,
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
              title: 'Currently Learning',
              rows: [
                { label: 'AZ-900 Azure Fundamentals', value: 'Active' },
                { label: 'C# · .NET', value: 'Active' },
                { label: 'Python DSA via NeetCode', value: 'Active' },
              ],
            },
            {
              title: 'Target Roles',
              rows: [
                { label: 'Cloud Engineer', value: '↗' },
                { label: 'Software/AI Engineer', value: '↗' },
                { label: 'Platform Engineer', value: '↗' },
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
