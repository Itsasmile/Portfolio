import { CURRENTLY_BUILDING, PROGRESS_STEPS, CURRENT_STEP } from '../data/content'

export default function CurrentlyBuilding() {
  return (
    <div id="building" className="border-b border-border bg-surface">
      <div className="max-w-[1100px] mx-auto px-14 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold whitespace-nowrap font-normal">
            Currently Building
          </span>
          <div className="w-px h-8 bg-border2" />
          <span className="text-[13px] text-muted">
            <strong className="text-ink font-normal">{CURRENTLY_BUILDING.split('·')[0].trim()}</strong>
            {' ·' + CURRENTLY_BUILDING.slice(CURRENTLY_BUILDING.indexOf('·') + 1)}
          </span>
        </div>

        {/* Progress steps */}
        <div className="flex items-center gap-[6px] shrink-0">
          {PROGRESS_STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-[6px]">
              <div className="flex flex-col items-center gap-[6px]">
                <div
                  className={`w-2 h-2 rounded-full border transition-all ${
                    i < CURRENT_STEP
                      ? 'bg-gold-dim border-gold-dim'
                      : i === CURRENT_STEP
                      ? 'bg-transparent border-gold animate-step-pulse'
                      : 'bg-faint border-border2'
                  }`}
                />
                <span className="text-[9px] text-muted tracking-[0.1em] whitespace-nowrap">
                  {step}
                </span>
              </div>
              {i < PROGRESS_STEPS.length - 1 && (
                <div
                  className={`w-7 h-px mb-[14px] ${
                    i < CURRENT_STEP ? 'bg-gold-dim' : 'bg-border2'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
