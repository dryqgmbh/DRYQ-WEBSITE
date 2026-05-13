import Section from './Section'
import PhoneFrame from './PhoneFrame'
import AppDashboard from './AppDashboard'
import AppResults from './AppResults'
const features=[
  {t:'Health Score',d:'A single trackable signal that summarizes your current biomarker baseline.'},
  {t:'Biomarker Dashboard',d:'Every value in context, with reference ranges and historical trends.'},
  {t:'Top 3 Impact',d:'The three markers with the highest improvement potential — surfaced first.'},
  {t:'Action Plan',d:'Personalized, actionable steps tied directly to your results.'},
  {t:'Retest Engine',d:'Know when to test again, which kit, and what to monitor.'},
  {t:'Trend Comparison',d:'Compare results across tests and see how your score evolves over time.'},
]
export default function AppShowcase() {
  return (
    <Section id="app" eyebrow="The Preventura App"
      title={<>Your results, translated into a <span className="gradient-text">premium app experience.</span></>}
      intro="No more isolated lab numbers. Your data becomes a score, a focus, and a plan — designed for clarity.">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="order-2 grid gap-3 sm:grid-cols-2 lg:order-1">
          {features.map(f=>(
            <div key={f.t} className="glass reveal rounded-2xl p-5 transition hover:border-white/20">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/5">
                  <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden><path d="M1.5 6 L4.5 9 L9.5 2" stroke="#7be36a" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-[14.5px] font-semibold text-white">{f.t}</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-[var(--color-dim)]">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="order-1 relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:order-2">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-55" style={{background:'radial-gradient(closest-side,rgba(74,222,128,0.28),transparent 70%)'}}/>
          <div className="-mr-12 rotate-[-6deg] float-y"><PhoneFrame width={252}><AppResults/></PhoneFrame></div>
          <div className="-ml-14 mt-14 rotate-[5deg] float-y-lg"><PhoneFrame width={270}><AppDashboard/></PhoneFrame></div>
        </div>
      </div>
    </Section>
  )
}
