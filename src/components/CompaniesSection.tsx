import Section from './Section'
const pts=[
  {t:'Recurring employee check-ins',d:'Offer your team a structured, repeatable prevention cadence.'},
  {t:'Health credits per employee',d:'Allocate kits and app access per role, team or cohort.'},
  {t:'Anonymized cohort reporting',d:'Aggregate insights above minimum cohort sizes — never individual data.'},
  {t:'Compliant by design',d:'No individual employee data is shared with the employer.'},
]
export default function CompaniesSection() {
  return (
    <Section id="companies" eyebrow="For Companies"
      title={<>Preventive health for <span className="gradient-text">modern teams.</span></>}
      intro="Preventura supports companies with recurring employee health check-ins, app-based insights and anonymized cohort-level reporting — where legally and ethically appropriate.">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full opacity-35 blur-3xl" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.38),transparent 70%)'}}/>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {pts.map(p=>(
              <div key={p.t} className="reveal">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/5">
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1.5 5.5 L4 8 L8.5 2" stroke="#7be36a" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <h3 className="text-[14.5px] font-semibold text-white">{p.t}</h3>
                </div>
                <p className="mt-1.5 pl-8 text-[13px] leading-relaxed text-[var(--color-dim)]">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">Anonymized cohort</div>
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {[{l:'Avg. score',v:'74'},{l:'Top focus',v:'Vit D'},{l:'Participation',v:'68%'}].map(s=>(
                  <div key={s.l} className="rounded-xl border border-white/8 bg-white/[0.03] p-3 text-center">
                    <div className="text-[9px] uppercase tracking-[0.16em] text-white/40">{s.l}</div>
                    <div className="mt-1 text-lg font-semibold text-white">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className="h-full rounded-full" style={{width:'68%',background:'linear-gradient(90deg,#1F8BFF,#7BE36A)'}}/>
              </div>
            </div>
            <a href="#cta" className="btn-primary self-start">Request company access <span aria-hidden>→</span></a>
          </div>
        </div>
      </div>
    </Section>
  )
}
