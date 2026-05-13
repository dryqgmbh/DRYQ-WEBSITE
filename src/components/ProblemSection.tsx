import Section from './Section'
const cards=[
  {icon:<path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>, t:'Lab values are hard to interpret', b:"Standard reports list numbers without context — leaving most people unable to tell what's actually relevant for them."},
  {icon:<><circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>, t:'One-time tests show no trends', b:'A single test is a snapshot. Without repeated measurement you cannot see what is improving, stable or drifting over time.'},
  {icon:<><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></>, t:'Generic advice misses priorities', b:'Most platforms tell you everything at once. Preventura tells you what to focus on first — based on your own values.'},
]
export default function ProblemSection() {
  return (
    <Section eyebrow="The prevention gap"
      title={<>Most people only see their blood values <span className="gradient-text">once something feels wrong.</span></>}
      intro="Preventive health often fails because lab results are hard to understand, rarely tracked over time and not translated into concrete next steps. Preventura makes biomarker tracking simple, repeatable and actionable.">
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(c=>(
          <div key={c.t} className="glass reveal rounded-2xl p-6 transition hover:border-white/20">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{c.icon}</svg>
            </div>
            <h3 className="text-[17px] font-semibold text-white">{c.t}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-dim)]">{c.b}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
