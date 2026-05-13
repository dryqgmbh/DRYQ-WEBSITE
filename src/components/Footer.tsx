import { Logo } from './Logo'
const cols=[
  {h:'Product',links:[{l:'How it works',href:'#how'},{l:'Preventura Core',href:'#core'},{l:'The App',href:'#app'},{l:'Biomarkers',href:'#biomarkers'}]},
  {h:'Company',links:[{l:'For Companies',href:'#companies'},{l:'FAQ',href:'#faq'},{l:'Get Early Access',href:'#cta'}]},
  {h:'Legal',links:[{l:'Privacy',href:'#'},{l:'Imprint',href:'#'},{l:'Terms',href:'#'}]},
]
export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[rgba(5,7,13,0.55)]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:px-8">
        <div>
          <Logo/>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--color-dim)]">
            Preventura is a digital prevention platform for at-home biomarker testing, app-based insights and long-term health tracking.
          </p>
        </div>
        {cols.map(c=>(
          <div key={c.h}>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/38">{c.h}</div>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(l=>(
                <li key={l.l}><a href={l.href} className="text-[13.5px] text-white/70 transition hover:text-white">{l.l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-[11.5px] text-[var(--color-mute)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Preventura. All rights reserved.</span>
          <span className="max-w-2xl">For prevention and self-tracking purposes only. Not a substitute for medical advice, diagnosis or treatment.</span>
        </div>
      </div>
    </footer>
  )
}
