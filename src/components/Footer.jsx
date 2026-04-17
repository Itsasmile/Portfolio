import { PERSONAL } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border px-14 py-6 flex justify-between items-center flex-wrap gap-2">
      <span className="text-[11px] text-muted tracking-[0.06em]">
        © 2026 <span className="text-gold">{PERSONAL.name}</span>
      </span>
      <span className="text-[11px] text-muted tracking-[0.06em]">
        {PERSONAL.role} · {PERSONAL.location}
      </span>
    </footer>
  )
}
