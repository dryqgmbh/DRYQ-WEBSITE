import ScoreRing from './ScoreRing'
const rows=[{n:'Ferritin',v:'28.6 ng/ml',ok:false},{n:'Magnesium',v:'1.65 mg/dl',ok:false},{n:'Cortisol',v:'29.8 μg/24h',ok:false},{n:'Vitamin B12',v:'278 pg/ml',ok:true},{n:'Vitamin D',v:'24 ng/ml',ok:true}]
export default function AppResults() {
  return (
    <div className="flex h-full flex-col gap-2.5 pb-3 text-white">
      <div className="flex items-center gap-2 pt-0.5">
        <span className="text-white/60 text-sm">←</span>
        <span className="text-[11px] font-semibold">Health Check — May 2026</span>
      </div>
      <div className="flex justify-center">
        <ScoreRing size={140} value={62} delta="vs. previous −10" thickness={10} label="HEALTH SCORE" />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[{l:'↘ +10',s:'Vs. last',c:'text-[#f2b66b]'},{l:'✓ 2',s:'Optimal',c:'text-[#9be6a1]'},{l:'! 3',s:'Noticeable',c:'text-[#f2b66b]'}].map(x=>(
          <div key={x.s} className="rounded-xl border border-white/8 bg-white/[0.03] p-1.5 text-center">
            <div className={`text-[10px] font-semibold ${x.c}`}>{x.l}</div>
            <div className="text-[9px] text-white/45">{x.s}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {rows.map(r=>(
          <div key={r.n} className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${r.ok?'bg-[#7be36a]':'bg-[#f2b66b]'}`}/>
              <span className="text-[11px] font-medium">{r.n}</span>
            </div>
            <span className="text-[10px] text-white/60">{r.v}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-2.5">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-white/75">Priority Intervention</div>
        <div className="mt-1 text-[9px] text-white/45">Highest impact on your score</div>
        <div className="mt-1.5 flex items-center justify-between">
          <div><div className="text-[11px] font-semibold">Vitamin D</div><div className="text-[9px] text-white/40">24 → ≥ 30 ng/ml</div></div>
          <span className="rounded-full bg-[rgba(123,227,106,0.18)] px-1.5 py-0.5 text-[9px] font-semibold text-[#a8f0a8]">+3</span>
        </div>
      </div>
    </div>
  )
}
