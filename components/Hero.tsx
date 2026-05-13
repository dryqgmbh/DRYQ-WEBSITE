export default function Hero() {
  return (
    <section className="relative bg-[#101820] hero-grid pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#35D04F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#35D04F]/10 border border-[#35D04F]/20 text-[#35D04F] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#35D04F] rounded-full animate-pulse" />
              Einsatzplanung im Rheinland
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-6">
              Wasserschaden?{' '}
              <span className="text-[#35D04F]">DRYQ</span>{' '}
              übernimmt Trocknung, Rückbau und Dokumentation.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Professionelle Wasserschadensanierung für Eigentümer, Hausverwaltungen und
              Gewerbekunden – mit Leckortung, technischer Trocknung, eigener Gerätetechnik
              und nachvollziehbarer Dokumentation für die weitere Abstimmung mit Versicherung
              oder Verwaltung.
            </p>

            {/* Trust bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {[
                'ISO 9001 zertifizierte Prozesse',
                'Eigene moderne Trocknungstechnik',
                'Messprotokolle & Fotodokumentation',
                'Einsatzplanung im Rheinland',
                'Für Privatkunden, Verwaltungen & Gewerbe',
              ].map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#35D04F]/15 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-[#35D04F]/20"
              >
                Schaden melden
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+492241000000"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors"
              >
                <svg className="w-4 h-4 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direkt anrufen
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#1A1F26] shadow-2xl">
              {/* Replace with real image: <Image src="/assets/dryqtech-setup.jpg" alt="DRYQ Trocknungstechnik im Einsatz" fill className="object-cover" /> */}
              {/* Premium placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1F26] via-[#20252B] to-[#101820] p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="bg-[#35D04F]/10 border border-[#35D04F]/20 rounded-xl p-4">
                    <svg className="w-8 h-8 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Live-Messung</div>
                    <div className="text-2xl font-black text-white">68<span className="text-base font-normal text-gray-400">% rF</span></div>
                  </div>
                </div>

                {/* Equipment mockup */}
                <div className="grid grid-cols-3 gap-3 my-6">
                  {[
                    { label: 'Luftentfeuchter', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
                    { label: 'Turbo-Gebläse', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
                    { label: 'Air Scrubber', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' },
                  ].map((eq) => (
                    <div key={eq.label} className="bg-[#101820]/60 border border-white/6 rounded-xl p-3 text-center">
                      <svg className="w-7 h-7 text-[#35D04F] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={eq.icon} />
                      </svg>
                      <span className="text-[10px] text-gray-400 leading-tight block">{eq.label}</span>
                    </div>
                  ))}
                </div>

                {/* Measurement bar */}
                <div className="bg-[#101820]/60 border border-white/6 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Trocknungsfortschritt</span>
                    <span className="text-[#35D04F] font-semibold">Tag 4 / 14</span>
                  </div>
                  <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full w-[28%] bg-gradient-to-r from-[#35D04F] to-[#28A83F] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-600 mt-1.5">
                    <span>Start: 92% rF</span>
                    <span>Ziel: ≤50% rF</span>
                  </div>
                </div>

                {/* Replace placeholder text */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-600 italic">
                    {/* Platzhalter → echtes Bild: /assets/dryqtech-setup.jpg */}
                    Echte Gerätebilder werden eingefügt
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3.5 flex items-center gap-3 border border-gray-100">
              {/* Replace with: <Image src="/assets/iso-9001-badge.png" alt="ISO 9001" width={40} height={40} /> */}
              <div className="w-10 h-10 bg-[#1a3d8f] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[9px] font-black leading-tight text-center">ISO{`\n`}9001</span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#101820]">ISO 9001</div>
                <div className="text-[10px] text-gray-500">Zertifizierte Prozesse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
