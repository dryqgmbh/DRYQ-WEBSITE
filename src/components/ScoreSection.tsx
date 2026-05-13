import Section from './Section'
import ScoreRing from './ScoreRing'
export default function ScoreSection() {
  return (
    <Section eyebrow="The Preventura Score"
      title={<>One score. Clear priorities. <span className="gradient-text">Measurable progress.</span></>}
      intro="The Preventura Score summarizes your current biomarker baseline into a single trackable signal — so you see what matters now and how it changes over time." center={false}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-65" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.38),transparent 70%)'}}/>
          <div className="glass-strong w-full rounded-[26px] p-7" style={{boxShadow:'0 0 0 1px rgba(31,139,255,0.30),0 24px 60px -18px rgba(31,139,255,0.50)'}}>
            <div className="flex justify-center"><ScoreRing size={240} value={76} delta="+11 since last test"/></div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Current</div>
                <div className="mt-1 text-2xl font-semibold tabular-nums text-white">76</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Projected</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold tabular-nums text-white">83</span>
                  <span className="rounded-full bg-[rgba(123,227,106,0.18)] px-1.5 py-0.5 text-[10px] font-semibold text-[#a8f0a8]">+7</span>
                </div>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full rounded-full" style={{width:'76%',background:'linear-gradient(90deg,#1F8BFF,#34D399,#7BE36A)'}}/>
            </div>
          </div>
        </div>
        <div>
          <ul className="space-y-5">
            {[{t:'See where you stand today',d:'Your current score reflects how your selected biomarkers compare to optimal ranges.'},
              {t:'Understand what changed',d:'Compare against previous tests with clear delta indicators across each marker.'},
              {t:'Know what to improve next',d:'The score is tied to your Top 3 Impact areas — so you always know where to focus first.'}
            ].map(it=>(
              <li key={it.t} className="flex gap-4 reveal">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5">
                  <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden><path d="M1.5 6 L4.5 9 L9.5 2" stroke="#7be36a" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <h3 className="text-[16.5px] font-semibold text-white">{it.t}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-dim)]">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[12.5px] text-[var(--color-mute)]">Your Preventura Score turns complex lab values into a clear, trackable health signal — not a diagnosis.</p>
        </div>
      </div>
    </Section>
  )
}
