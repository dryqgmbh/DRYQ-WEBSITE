import Section from './Section'
const groups=[
  {name:'Heart & Lipids',color:'#1F8BFF',items:['ApoB','LDL','HDL','Triglycerides','Total Cholesterol','Non-HDL']},
  {name:'Metabolism',color:'#22D3EE',items:['HbA1c','Glucose','Triglyceride pattern']},
  {name:'Inflammation',color:'#F59E0B',items:['hs-CRP']},
  {name:'Kidney',color:'#A78BFA',items:['Cystatin C','Creatinine / eGFR']},
  {name:'Thyroid',color:'#34D399',items:['TSH']},
  {name:'Vitamins & Minerals',color:'#7BE36A',items:['Vitamin D','Ferritin','Vitamin B12 / HoloTC']},
]
export default function CorePanel() {
  return (
    <Section id="core" eyebrow="Preventura Core"
      title={<>Preventura Core: your <span className="gradient-text">recurring health baseline.</span></>}
      intro="A focused biomarker panel tracking key signals across metabolism, cardiovascular health, inflammation, kidney, thyroid and vitamin status. Examples include the markers below — the exact panel may vary by market and laboratory setup.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(g=>(
          <div key={g.name} className="glass reveal rounded-2xl p-5 transition hover:border-white/20">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span className="h-2 w-2 rounded-full" style={{background:g.color,boxShadow:`0 0 12px ${g.color}`}}/>
              </span>
              <h3 className="text-[15px] font-semibold text-white">{g.name}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map(i=>(
                <span key={i} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11.5px] text-[var(--color-dim)]">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="max-w-lg text-[13px] text-[var(--color-mute)]">Lp(a) is available as an optional one-time cardiovascular marker. Preventura provides health information for prevention and self-tracking — it does not replace medical advice, diagnosis or treatment.</p>
        <a href="#cta" className="btn-primary">Start with Core <span aria-hidden>→</span></a>
      </div>
    </Section>
  )
}
