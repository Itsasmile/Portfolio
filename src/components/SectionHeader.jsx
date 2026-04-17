export default function SectionHeader({ number, title, italic }) {
  return (
    <div className="flex items-baseline gap-5 mb-14 reveal">
      <span className="text-[11px] text-gold-dim tracking-[0.15em] font-normal">
        {number}
      </span>
      <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight leading-tight">
        {title} <em className="italic font-normal text-gold">{italic}</em>
      </h2>
    </div>
  )
}
