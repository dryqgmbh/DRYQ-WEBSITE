'use client'

import { useRef, useState, useCallback } from 'react'

export default function BeforeAfterSection() {
  const [pos, setPos] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95)
    setPos(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    move(e.clientX)
    const onMove = (ev: MouseEvent) => { if (dragging.current) move(ev.clientX) }
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => move(ev.touches[0].clientX)
    const onEnd = () => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    move(e.touches[0].clientX)
  }

  return (
    <section className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Vorher / Nachher</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-4">
            Vom Schadenbild zur kontrollierten Trocknung.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Der sichtbare Unterschied ist nicht nur Ordnung – sondern ein strukturierter technischer
            Prozess: Feuchtigkeit messen, Ursache eingrenzen, Trocknung aufbauen, Fortschritt dokumentieren.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="ba-slider rounded-2xl overflow-hidden shadow-xl border border-gray-200 reveal"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          style={{ aspectRatio: '16/7' }}
        >
          {/* BEFORE panel */}
          {/* Replace bg with: <Image src="/assets/water-damage-before.jpg" alt="Schadenbild Vorher" fill className="object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex flex-col items-center justify-center">
            <svg className="w-16 h-16 text-blue-400/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 014 0v5a2 2 0 004 0V7a2 2 0 014 0v7a2 2 0 004 0V9" />
            </svg>
            <span className="text-slate-400 text-sm italic">Bild: Schadenbild nach Wasserschaden</span>
            <span className="text-slate-600 text-xs mt-1">/assets/water-damage-before.jpg</span>
          </div>
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
            Schadenbild
          </div>

          {/* AFTER panel (clipped) */}
          <div className="ba-after" style={{ width: `${pos}%` }}>
            {/* Replace bg with: <Image src="/assets/drying-setup-after.jpg" alt="Kontrollierte Trocknung" fill className="object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F26] via-[#20252B] to-[#101820] flex flex-col items-center justify-center" style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }}>
              <svg className="w-16 h-16 text-[#35D04F]/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span className="text-gray-400 text-sm italic">Bild: Trocknungsaufbau mit DRYQTECH</span>
              <span className="text-gray-600 text-xs mt-1">/assets/drying-setup-after.jpg</span>
            </div>
            <div className="absolute top-4 left-4 bg-[#35D04F]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
              Kontrollierte Trocknung
            </div>
          </div>

          {/* Handle */}
          <div className="ba-handle" style={{ left: `${pos}%` }}>
            <div className="ba-handle-btn">
              <svg className="w-5 h-5 text-[#101820]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center reveal">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors"
          >
            Schaden einschätzen lassen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
