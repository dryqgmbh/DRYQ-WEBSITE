import Section from './Section'
const rows=[
  {label:'At-home testing',lab:false,app:false,prev:true},
  {label:'Lab-based biomarkers',lab:true,app:false,prev:true},
  {label:'Health Score',lab:false,app:'partial',prev:true},
  {label:'Prioritized actions',lab:false,app:'partial',prev:true},
  {label:'Trend tracking over time',lab:false,app:'partial',prev:true},
  {label:'Retest recommendation',lab:false,app:false,prev:true},
  {label:'App-first experience',lab:false,app:true,prev:true},
] as const
function Cell({v}:{v:true|false|'partial'}) {
  if(v===true) return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(123,227,106,0.14)] text-[#9be6a1]"><svg width="13" height="13" viewBox="0 0 11 11" aria-hidden><path d="M1.5 6 L4.5 9 L9.5 2" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
  if(v==='partial') return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/45"><span className="h-[2px] w-3 bg-current"/></span>
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-white/[0.02] text-white/28"><svg width="11" height="11" viewBox="0 0 11 11" aria-hidden><path d="M2.5 2.5 L8.5 8.5 M8.5 2.5 L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></span>
}
export default function ComparisonSection() {
  return (
    <Section eyebrow="The difference"
      title={<>More than a <span className="gradient-text">lab report.</span></>}
      intro="A traditional blood test gives you a snapshot. A generic health app gives you noise. Preventura ties testing, scoring, prioritization and retesting into one continuous system.">
      <div className="glass-strong overflow-hidden rounded-3xl">
        <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] items-center border-b border-white/8 bg-white/[0.02] px-5 py-4 text-[10.5px] uppercase tracking-[0.18em] text-white/45 sm:px-6">
          <div>Capability</div>
          <div className="text-center">Traditional lab</div>
          <div className="text-center">Generic app</div>
          <div className="text-center text-white">Preventura</div>
        </div>
        {rows.map((r,i)=>(
          <div key={r.label} className={`grid grid-cols-[1.5fr_repeat(3,1fr)] items-center px-5 py-3.5 text-[13.5px] sm:px-6 ${i%2===1?'bg-white/[0.014]':''}`}>
            <div className="text-white/80">{r.label}</div>
            <div className="flex justify-center"><Cell v={r.lab}/></div>
            <div className="flex justify-center"><Cell v={r.app}/></div>
            <div className="flex justify-center"><Cell v={r.prev}/></div>
          </div>
        ))}
      </div>
    </Section>
  )
}
