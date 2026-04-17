import { PERSONAL } from '../data/content'

const NAV_LINKS = [
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  return (
    <>
      {/* Slim cert banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gold/[0.06] border-b border-gold/10 py-[7px] flex justify-center px-6">
        <p className="text-[11px] tracking-[0.14em] text-gold-dim uppercase">
          Azure Certification Track in Progress &mdash;&nbsp;
          <span className="text-gold">AZ-900 · AZ-104 · AI-102</span>
        </p>
      </div>

      {/* Main nav */}
      <nav className="fixed top-[33px] left-0 right-0 z-50 flex items-center justify-between px-14 py-5 border-b border-border bg-bg/90 backdrop-blur-md">
        <a href="#hero" className="font-display text-[19px] text-ink">
          Ismaeil <em className="italic text-gold not-italic">Mohammed</em>
        </a>

        <div className="flex items-center gap-9">
          <ul className="hidden md:flex gap-9 list-none">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={PERSONAL.resume}
            download
            className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold border border-gold-dim px-4 py-[7px] hover:bg-gold hover:text-bg transition-all"
          >
            ↓ Resume
          </a>
        </div>
      </nav>
    </>
  )
}
