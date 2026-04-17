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
