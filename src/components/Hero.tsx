import PhoneFrame from './PhoneFrame'
import AppDashboard from './AppDashboard'

function Chip({className='',title,value,delta,tone='ok'}:{className?:string;title:string;value:string;delta?:string;tone?:'ok'|'warn'|'info'}) {
  const bar=tone==='ok'?'bg-[#7be36a]':tone==='warn'?'bg-[#f2b66b]':'bg-[#1F8BFF]'
  return (
    <div className={`glass-strong relative overflow-hidden rounded-2xl px-3.5 py-3 shadow-2xl ${className}`}>
      <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-r ${bar}`}/>
      <div className="pl-2">
        <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">{title}</div>
        <div className="mt-0.5 flex items-baseline gap-1.5">
          <span className="text-[15px] font-semibold text-white tabular-nums">{value}</span>
          {delta&&<span className="text-[10px] font-medium text-[#9be6a1]">{delta}</span>}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg"/>
      <div className="pointer-events-none absolute left-1/2 -top-48 -z-10 h-[700px] w-[1400px] -translate-x-1/2 rounded-full opacity-50 blur-3xl" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.38),transparent 70%)'}}/>
      <div className="pointer-events-none absolute right-[-200px] top-[180px] -z-10 h-[500px] w-[700px] rounded-full opacity-35 blur-3xl" style={{background:'radial-gradient(closest-side,rgba(74,222,128,0.32),transparent 70%)'}}/>

      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7be36a] shadow-[0_0_0_4px_rgba(123,227,106,0.18)]"/>
              Digital prevention platform
            </div>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[62px]">
              <span className="gradient-text">Understand your health</span><br/>
              <span className="text-white">before problems become visible.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-[var(--color-dim)] sm:text-[17px]">
              Preventura combines at-home biomarker testing, lab-based analysis and a premium app experience — turning your blood values into a clear Health Score, prioritized insights and a personal retest plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="btn-primary">Get Early Access <span aria-hidden>→</span></a>
              <a href="#how" className="btn-ghost">See how it works</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[var(--color-mute)]">
              {['At-home sample collection','Lab-based analysis','App-based insights'].map((t,i)=>(
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className={`h-1 w-1 rounded-full ${i===0?'bg-[#7be36a]':i===1?'bg-[#1F8BFF]':'bg-[#22D3EE]'}`}/>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center">
            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-60" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.38),transparent 70%)'}}/>
            <div className="float-y"><PhoneFrame width={306}><AppDashboard/></PhoneFrame></div>
            <Chip className="absolute -left-4 top-10 w-[158px] float-y-lg" title="ApoB" value="102 mg/dl" delta="−8 vs last" tone="warn"/>
            <Chip className="absolute -right-4 top-28 w-[160px] float-y" title="hs-CRP" value="0.7 mg/l" delta="optimal" tone="ok"/>
            <Chip className="absolute -left-8 bottom-28 w-[165px] float-y" title="Vitamin D" value="32 ng/ml" delta="+8 vs last" tone="ok"/>
            <Chip className="absolute -right-6 bottom-10 w-[170px] float-y-lg" title="Next retest" value="in 24 days" tone="info"/>
          </div>
        </div>
      </div>
    </section>
  )
}
