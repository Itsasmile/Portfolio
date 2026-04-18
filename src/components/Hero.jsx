import { PERSONAL, CERTIFICATIONS } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center gap-20 px-14 pt-[40px] pb-20 border-b border-border"
    >
      {/* LEFT */}
      <div>
        <div className="flex items-center gap-3 mb-9 animate-rise-1">
          <div className="w-8 h-px bg-gold" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-normal">
            Software Engineer · Cloud & AI
          </span>
        </div>

        <h1 className="font-display text-[clamp(48px,6vw,82px)] font-bold leading-none tracking-tight mb-2 animate-rise-2">
          Ismaeil
        </h1>
        <h1 className="font-display text-[clamp(48px,6vw,82px)] font-normal italic leading-none tracking-tight text-gold mb-10 animate-rise-3">
          Mohammed.
        </h1>

        <p className="text-[15px] text-muted max-w-[420px] leading-[1.85] mb-4 animate-rise-4">
          CS graduate building{' '}
          <strong className="text-ink font-normal">
            AI-powered systems on Microsoft Azure
          </strong>{' '}
          — working toward roles in cloud engineering, Software/AI engineering, and
          solutions architecture.
        </p>

        <p className="text-[13px] text-gold-dim italic max-w-[380px] mb-12 border-l-2 border-gold-dim pl-4 animate-rise-5">
          {PERSONAL.tagline}
        </p>

        <div className="flex flex-wrap gap-4 animate-rise-6">
          <a
            href="#projects"
            className="text-[12px] font-medium tracking-[0.1em] uppercase px-7 py-[13px] bg-gold text-bg border border-gold hover:bg-transparent hover:text-gold transition-all"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-[12px] font-medium tracking-[0.1em] uppercase px-7 py-[13px] text-muted border border-border2 hover:border-muted hover:text-ink transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="md:border-l md:border-border md:pl-14 flex flex-col gap-10 border-t border-border pt-10 md:border-t-0 md:pt-0 animate-rise-panel">
        {/* Status */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dim mb-3 font-normal">
            Status
          </p>
          <p className="text-[14px] text-ink font-light">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#5aad6e] mr-2 animate-blink" />
            Open to opportunities
          </p>
          <p className="text-[13px] text-muted mt-1">
            {PERSONAL.location} · {PERSONAL.remote}
          </p>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dim mb-3 font-normal">
            Languages
          </p>
          <div className="cert-row flex items-center justify-between py-[10px] border-b border-border gap-3">
            <span className="text-[13px] text-ink">C# · .NET</span>
            <span className="text-[10px] tracking-[0.08em] px-[9px] py-[3px] bg-white/[0.03] text-muted border border-border2">Intermediate</span>
          </div>
          <div className="flex items-center justify-between py-[10px] border-b border-border gap-3">
            <span className="text-[13px] text-ink">Python</span>
            <span className="text-[10px] tracking-[0.08em] px-[9px] py-[3px] bg-white/[0.03] text-muted border border-border2">Intermediate</span>
          </div>
          <div className="flex items-center justify-between py-[10px] border-b border-border gap-3">
            <span className="text-[13px] text-ink">SQL</span>
            <span className="text-[10px] tracking-[0.08em] px-[9px] py-[3px] bg-white/[0.03] text-muted border border-border2">Intermediate</span>
          </div>
          <div className="flex items-center justify-between py-[10px] gap-3">
            <span className="text-[13px] text-ink">React · TypeScript</span>
            <span className="text-[10px] tracking-[0.08em] px-[9px] py-[3px] bg-white/[0.03] text-muted border border-border2">Intermediate</span>
          </div>
        </div>

        {/* Stack */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dim mb-3 font-normal">
            Currently
          </p>
          <p className="text-[14px] text-ink font-light">Open to opportunities</p>
          <p className="text-[13px] text-muted mt-1">Junior · Mid-level roles</p>
        </div>
      </div>
    </section>
  )
}
