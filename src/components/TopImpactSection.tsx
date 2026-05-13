import Section from './Section'
const items=[
  {name:'Vitamin D',cur:'24 ng/ml',tgt:'≥ 30 ng/ml',hint:'Daily light exposure or targeted supplementation can support healthy levels.',impact:'+3',color:'#7BE36A'},
  {name:'Ferritin',cur:'28 ng/ml',tgt:'≥ 50 ng/ml',hint:'Monitor iron storage and consider iron-rich dietary patterns.',impact:'+2',color:'#22D3EE'},
  {name:'ApoB',cur:'102 mg/dl',tgt:'≤ 80 mg/dl',hint:'A key cardiovascular risk marker — discuss optimization with your physician.',impact:'+2',color:'#1F8BFF'},
]
export default function TopImpactSection() {
  return (
    <Section id="biomarkers" eyebrow="Top 3 Impact"
      title={<>Focus on what <span className="gradient-text">moves the needle first.</span></>}
      intro="Preventura highlights the three biomarkers with the highest improvement potential — so you know what to focus on first.">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((b,i)=>(
          <div key={b.name} className="glass reveal relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-25 blur-3xl" style={{background:b.color}}/>
            <div className="flex items-center justify-between">
              <span className="chip">Priority {i+1}</span>
              <span className="rounded-full bg-[rgba(123,227,106,0.18)] px-2 py-0.5 text-[11px] font-semibold text-[#a8f0a8]">{b.impact} score</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{b.name}</h3>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Current</div>
                <div className="mt-0.5 text-[14px] font-semibold text-white tabular-nums">{b.cur}</div>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">Target</div>
                <div className="mt-0.5 text-[14px] font-semibold text-white tabular-nums">{b.tgt}</div>
              </div>
            </div>
            <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full rounded-full" style={{width:`${52+i*7}%`,background:`linear-gradient(90deg,${b.color},#7BE36A)`}}/>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-dim)]">{b.hint}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-[12px] text-[var(--color-mute)]">Preventura provides structured insights for prevention and self-tracking. Consult a physician for medical decisions.</p>
    </Section>
  )
}
