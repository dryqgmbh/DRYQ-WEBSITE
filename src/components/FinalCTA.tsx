'use client'
import { useState } from 'react'
export default function FinalCTA() {
  const [email,setEmail]=useState('')
  const [done,setDone]=useState(false)
  return (
    <section id="cta" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[600px] max-w-[1200px] blur-3xl opacity-45" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.32),transparent 70%)'}}/>
      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-[30px] p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full opacity-35 blur-3xl" style={{background:'radial-gradient(closest-side,rgba(74,222,128,0.38),transparent 70%)'}}/>
          <div className="pointer-events-none absolute -right-28 -bottom-28 h-72 w-72 rounded-full opacity-35 blur-3xl" style={{background:'radial-gradient(closest-side,rgba(31,139,255,0.38),transparent 70%)'}}/>
          <div className="eyebrow justify-center">Join Preventura</div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            Start tracking your health <span className="gradient-text">with clarity.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-dim)]">
            Turn your biomarkers into a score, a plan and measurable progress. Be among the first to access Preventura Core.
          </p>
          {!done?(
            <form onSubmit={e=>{e.preventDefault();if(email)setDone(true)}}
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-2.5 sm:flex-row">
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com"
                className="h-12 flex-1 rounded-full border border-white/12 bg-white/[0.04] px-5 text-[14px] text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.06]"/>
              <button type="submit" className="btn-primary h-12">Get Early Access <span aria-hidden>→</span></button>
            </form>
          ):(
            <div className="mx-auto mt-8 max-w-md rounded-full border border-[rgba(123,227,106,0.28)] bg-[rgba(123,227,106,0.09)] px-6 py-3 text-[14px] text-[#9be6a1]">
              You&apos;re on the list — we&apos;ll reach out as access opens up.
            </div>
          )}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11.5px] text-[var(--color-mute)]">
            <span>No spam — early-access updates only.</span>
            <span className="hidden h-3 w-px bg-white/10 sm:inline-block"/>
            <span>Cancel anytime.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
