import { LogoMark } from './Logo'
import ScoreRing from './ScoreRing'

export default function AppDashboard() {
  return (
    <div className="flex h-full flex-col gap-2.5 pb-3 text-white">
      <div className="flex items-center justify-between pt-0.5">
        <div className="flex items-center gap-1.5"><LogoMark size={16} /><span className="text-[10px] font-semibold tracking-[0.18em] text-white/90">PREVENTURA</span></div>
        <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[9px]">+ Add test</span>
      </div>
      <div className="text-[10px] text-white/50">Hello, Markus</div>
      <div className="flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.03] py-2">
        <ScoreRing size={148} value={76} delta="+11 since last test" thickness={10} label="HEALTH SCORE" />
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/65">Potential for improvement</span>
          <span className="rounded-full bg-[rgba(123,227,106,0.18)] px-1.5 py-0.5 text-[9px] font-semibold text-[#a8f0a8]">+7</span>
        </div>
        <div className="mt-1.5 flex items-end justify-between text-white/80">
          <div><div className="text-[9px] text-white/45">CURRENT</div><div className="text-base font-semibold">76</div></div>
          <div className="text-right"><div className="text-[9px] text-white/45">PROJECTED</div><div className="text-base font-semibold">83</div></div>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{width:'76%',background:'linear-gradient(90deg,#1F8BFF,#34D399,#7BE36A)'}} />
        </div>
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-2.5">
        <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-white/65">Top 3 Impact</div>
        <div className="space-y-1.5">
          {[{n:'Vitamin D',c:'24 ng/ml',t:'≥ 30',d:'+3'},{n:'Ferritin',c:'28 ng/ml',t:'≥ 50',d:'+2'},{n:'ApoB',c:'102 mg/dl',t:'≤ 80',d:'+2'}].map(b=>(
            <div key={b.n} className="flex items-center justify-between">
              <div><div className="text-[11px] font-semibold">{b.n}</div><div className="text-[9px] text-white/40">{b.c} → {b.t}</div></div>
              <span className="rounded-full bg-[rgba(123,227,106,0.16)] px-1.5 py-0.5 text-[9px] font-semibold text-[#a8f0a8]">{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
