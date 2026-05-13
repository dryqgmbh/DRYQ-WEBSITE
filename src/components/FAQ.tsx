'use client'
import { useState } from 'react'
import Section from './Section'
const faqs=[
  {q:'Is Preventura a replacement for a doctor?',a:'No. Preventura is designed for prevention, tracking and health optimization. It does not replace medical diagnosis or treatment. For medical concerns, please consult a physician.'},
  {q:'How does the at-home test work?',a:'You activate your kit in the app, collect a small capillary sample at home, send it to the lab in the prepaid envelope, and receive your results directly in the Preventura app.'},
  {q:'What is the Preventura Score?',a:'The Preventura Score summarizes selected biomarker results into a clear, trackable signal and highlights where improvement potential exists. It is a structured insight, not a diagnosis.'},
  {q:'Why retest?',a:'Single measurements are only a snapshot. Retesting helps you understand trends, confirm improvements and adjust your focus over time — which is where prevention actually happens.'},
  {q:'Which biomarkers are included?',a:'Preventura Core focuses on key prevention markers across cardiovascular health, metabolism, inflammation, kidney, liver, thyroid and vitamin / mineral status. The exact panel may vary by market and laboratory setup.'},
  {q:'Is my data secure?',a:'Health data is handled with a strong focus on privacy, security and GDPR-conscious processes. You stay in control of your data.'},
]
export default function FAQ() {
  const [open,setOpen]=useState<number|null>(0)
  return (
    <Section id="faq" eyebrow="Frequently asked" title="Answers, before you ask.">
      <div className="mx-auto max-w-3xl divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
        {faqs.map((f,i)=>{
          const isOpen=open===i
          return (
            <button key={f.q} onClick={()=>setOpen(isOpen?null:i)} aria-expanded={isOpen}
              className="block w-full px-5 py-5 text-left transition hover:bg-white/[0.02] sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-[15px] font-medium text-white">{f.q}</span>
                <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform ${isOpen?'rotate-45':''}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </span>
              </div>
              <div className={`faq-body ${isOpen?'open':''}`}>
                <div><p className="pt-3 text-[13.5px] leading-relaxed text-[var(--color-dim)]">{f.a}</p></div>
              </div>
            </button>
          )
        })}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] leading-relaxed text-[var(--color-mute)]">
        Preventura provides health information for prevention and self-tracking purposes and does not replace medical advice, diagnosis or treatment.
      </p>
    </Section>
  )
}
