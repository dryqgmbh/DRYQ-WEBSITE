import Section from './Section'
export default function RetestSection() {
  return (
    <Section eyebrow="The Retest Engine"
      title={<>Prevention only works when you <span className="gradient-text">measure again.</span></>}
      intro="Preventura recommends when to retest, which kit makes sense next, and what to monitor — so improvement becomes visible, not assumed." center={false}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-5">
            {[{t:'A clear next test date',d:'Every result ends with a tailored retest recommendation based on your current markers.'},
              {t:'Priority markers to monitor',d:'Focus on the biomarkers that matter most for your next data point.'},
              {t:'Recommended kit for next round',d:'We suggest whether to repeat Preventura Core or add a targeted panel.'},
              {t:'Trends you can act on',d:'See exactly what improved, what regressed, and where to adjust.'}
            ].map(it=>(
              <li key={it.t} className="flex gap-4 reveal">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5">
                  <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden><circle cx="5.5" cy="5.5" r="3" stroke="#7be36a" strokeWidth="1.4" fill="none"/></svg>
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white">{it.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-dim)]">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-45" style={{background:'radial-gradient(closest-side,rgba(34,211,238,0.28),transparent 70%)'}}/>
          <div className="glass-strong rounded-[22px] p-6">
            <div className="flex items-center justify-between">
              <span className="chip">Next evaluation</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">Retest plan</span>
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">Window opens in</div>
                <div className="mt-1 text-5xl font-semibold tabular-nums text-white">24<span className="ml-1 text-base font-medium text-white/45">days</span></div>
              </div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="5" width="18" height="16" rx="3" stroke="#9be6a1" strokeWidth="1.5"/>
                  <path d="M3 9h18M8 3v4M16 3v4" stroke="#9be6a1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Priority marker</div>
                <div className="mt-1 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#7be36a]"/><span className="text-[14px] font-semibold text-white">Vitamin D</span></div>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Recommended kit</div>
                <div className="mt-1 text-[14px] font-semibold text-white">Preventura Core</div>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-white/55">Progress since last test</span>
                <span className="font-semibold text-[#9be6a1]">+11 score</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className="h-full rounded-full" style={{width:'76%',background:'linear-gradient(90deg,#22D3EE,#7BE36A)'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
