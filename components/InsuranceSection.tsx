const docItems = [
  { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Fotodokumentation', desc: 'Systematische Bildaufnahme aller betroffenen Bereiche' },
  { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Feuchtemessungen', desc: 'Kalibrierte Messwerte an allen relevanten Bauteilen' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', label: 'Messprotokoll', desc: 'Dokumentierter Trocknungsverlauf mit Datum und Werten' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Stromverbrauchsmitteilung', desc: 'Transparente Auflistung des Geräteeinsatzes' },
  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Trocknungsverlauf', desc: 'Chronologische Fortschrittsdokumentation' },
  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Leistungsnachweise', desc: 'Klare Abgrenzung erbrachter Maßnahmen' },
]

export default function InsuranceSection() {
  return (
    <section id="versicherung" className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Versicherung & Dokumentation</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">
              Dokumentation, die Versicherungen und Verwaltungen verstehen.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bei Wasserschäden zählt nicht nur die Ausführung, sondern auch die Nachvollziehbarkeit.
              DRYQ dokumentiert relevante Feststellungen, Maßnahmen, Messwerte und Fotos strukturiert
              und verständlich.
            </p>
            <div className="bg-[#101820]/4 border border-[#101820]/8 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Wichtiger Hinweis:</span> Ob Ihre Versicherung die
                Kosten übernimmt, hängt vom Vertrag und Schadenfall ab. DRYQ unterstützt mit
                nachvollziehbarer Dokumentation für die weitere Abstimmung mit Ihrer Versicherung.
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              Rückruf anfordern
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — doc grid */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {docItems.map((d) => (
              <div
                key={d.label}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#35D04F]/20 transition-all"
              >
                <div className="w-9 h-9 bg-[#35D04F]/10 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={d.icon} />
                  </svg>
                </div>
                <div className="text-sm font-bold text-[#101820] mb-1">{d.label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
