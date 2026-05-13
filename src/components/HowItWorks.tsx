import Section from './Section'
const steps=[
  {n:'01',t:'Order your kit',d:'Choose Preventura Core and activate your kit directly in the app.'},
  {n:'02',t:'Collect at home',d:'Take a small capillary sample in minutes, guided step-by-step.'},
  {n:'03',t:'Send to the lab',d:'Drop the prepaid envelope. Your sample is analyzed by a professional lab partner.'},
  {n:'04',t:'Get your score',d:'Results appear in the app as a Preventura Score with prioritized insights.'},
  {n:'05',t:'Improve and retest',d:'Follow your Action Plan and retest at the recommended interval to track progress.'},
]
export default function HowItWorks() {
  return (
    <Section id="how" eyebrow="How Preventura works"
      title={<>Preventura turns biomarkers into a <span className="gradient-text">clear prevention system.</span></>}
      intro="From sample to score to action — designed to be repeatable, measurable and effortless.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map(s=>(
          <div key={s.n} className="glass reveal rounded-2xl p-5 transition hover:border-white/20">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[12px] font-semibold text-white/75">{s.n}</div>
            <h3 className="mt-4 text-[15.5px] font-semibold text-white">{s.t}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-dim)]">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
