import Section from './Section'
const pts=[
  {t:'Built for proactive health tracking',d:'Designed for people who want clarity before symptoms, not after.'},
  {t:'Made for recurring prevention',d:'A continuous loop of test, score, focus and retest — not a one-time number.'},
  {t:'Engineered for clarity',d:'Every value in context. Every result tied to a concrete next step.'},
]
export default function TrustPillars() {
  return (
    <Section eyebrow="Why Preventura"
      title={<>A platform built for people who <span className="gradient-text">don&apos;t wait for symptoms.</span></>}>
      <div className="grid gap-5 md:grid-cols-3">
        {pts.map(p=>(
          <div key={p.t} className="glass reveal rounded-2xl p-6 transition hover:border-white/20">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2l.9-5.5L4 8.8l5.5-.8L12 3z" stroke="#7be36a" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[17px] font-semibold text-white">{p.t}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-dim)]">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
