'use client'

import { useState, useEffect } from 'react'

const PHONE = '+49 2241 000000' // → replace with real number
const PHONE_LINK = 'tel:+492241000000'
const WA_LINK = 'https://wa.me/492241000000'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const nav = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#ablauf', label: 'Ablauf' },
    { href: '#technik', label: 'Technik' },
    { href: '#verwaltungen', label: 'Für Verwaltungen' },
    { href: '#versicherung', label: 'Versicherung' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/96 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 flex-shrink-0">
          {/* Replace img below with real logo: <Image src="/assets/logo-dryq.svg" alt="DRYQ GmbH" width={110} height={36} priority /> */}
          <span className="text-[1.6rem] font-black tracking-tight text-[#101820] leading-none">DRY</span>
          <span className="text-[1.6rem] font-black tracking-tight text-[#35D04F] leading-none">Q</span>
          <span className="ml-1 text-xs text-gray-400 font-medium hidden sm:inline-block mt-1 self-end pb-0.5">GmbH</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Hauptnavigation">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.85rem] font-medium text-gray-600 hover:text-[#35D04F] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA group */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-sm font-semibold text-[#101820] hover:text-[#35D04F] transition-colors"
          >
            <svg className="w-4 h-4 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden xl:inline">{PHONE}</span>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-sm font-semibold px-3 py-2 rounded-lg transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="#kontakt"
            className="bg-[#35D04F] hover:bg-[#28A83F] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Schaden melden
          </a>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#35D04F]"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center py-3 text-sm font-medium text-gray-700 hover:text-[#35D04F] border-b border-gray-50"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-2">
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 bg-[#101820] text-white font-semibold py-3.5 rounded-xl text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Anrufen
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-[#35D04F] text-white font-semibold py-3.5 rounded-xl text-sm"
              >
                Schaden melden
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
