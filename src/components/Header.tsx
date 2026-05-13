'use client'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
const NAV=[{href:'#how',label:'How it works'},{href:'#core',label:'Core'},{href:'#app',label:'App'},{href:'#biomarkers',label:'Biomarkers'},{href:'#companies',label:'For Companies'},{href:'#faq',label:'FAQ'}]
export default function Header() {
  const [scrolled,setScrolled]=useState(false)
  const [open,setOpen]=useState(false)
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>12)
    fn(); window.addEventListener('scroll',fn,{passive:true})
    return ()=>window.removeEventListener('scroll',fn)
  },[])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled?'bg-[rgba(5,7,13,0.75)] backdrop-blur-xl border-b border-white/8':''}`}>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-8">
        <a href="#top"><Logo /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(n=><a key={n.href} href={n.href} className="text-[13.5px] text-[var(--color-dim)] transition hover:text-white">{n.label}</a>)}
        </nav>
        <div className="hidden lg:block">
          <a href="#cta" className="btn-primary text-sm">Get Early Access <span aria-hidden>→</span></a>
        </div>
        <button aria-label="Menu" className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5" onClick={()=>setOpen(v=>!v)}>
          <span className="flex flex-col gap-[5px]">
            {[0,1,2].map(i=><span key={i} className={`block h-[1.5px] w-4 bg-white transition-all ${open&&i===0?'translate-y-[6.5px] rotate-45':open&&i===1?'opacity-0':open&&i===2?'-translate-y-[6.5px] -rotate-45':''}`}/>)}
          </span>
        </button>
      </div>
      {open&&(
        <div className="border-t border-white/8 bg-[rgba(5,7,13,0.95)] backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-[1200px] px-5 py-5">
            <nav className="flex flex-col gap-1">
              {NAV.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] text-white/85 hover:bg-white/5">{n.label}</a>)}
              <a href="#cta" onClick={()=>setOpen(false)} className="btn-primary mt-3 w-full justify-center">Get Early Access</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
