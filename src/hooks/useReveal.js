import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child with className "reveal" will animate in when scrolled into view.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll ? [el] : []
    const allTargets = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 90)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    allTargets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
