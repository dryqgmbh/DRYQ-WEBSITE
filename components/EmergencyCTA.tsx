export default function EmergencyCTA() {
  return (
    <section className="bg-[#F6F8F7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-[1fr_auto] items-stretch">
            {/* Info */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Wichtiger Hinweis</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#101820] mb-3">
                Ein Wasserschaden muss schnell, aber richtig behandelt werden.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
                Entscheidend sind eine präzise Schadenaufnahme, passende Trocknungstechnik,
                dokumentierte Messwerte und eine saubere Abstimmung mit Versicherung, Verwaltung
                oder Eigentümer. Je früher Feuchtigkeit geprüft und kontrolliert getrocknet wird,
                desto geringer ist das Risiko für Folgeschäden.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    step: '01',
                    title: 'Wasser stoppen & Schaden begrenzen',
                    desc: 'Wasserzufuhr absperren, elektrische Sicherheit prüfen, betroffene Bereiche sichern.',
                  },
                  {
                    step: '02',
                    title: 'Feuchtigkeit messen & Ursache eingrenzen',
                    desc: 'Professionelle Feuchtemessung an Wänden, Böden und Bauteilen.',
                  },
                  {
                    step: '03',
                    title: 'Trocknung planen & dokumentieren',
                    desc: 'Maßnahmenplan, Geräteauswahl und strukturierte Dokumentation.',
                  },
                ].map((c) => (
                  <div key={c.step} className="flex gap-3">
                    <span className="flex-shrink-0 text-2xl font-black text-[#35D04F]/30 leading-none mt-0.5">{c.step}</span>
                    <div>
                      <div className="text-sm font-bold text-[#101820] mb-1">{c.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Alert panel */}
            <div className="bg-amber-50 border-l border-amber-100 p-8 md:p-10 flex flex-col justify-center min-w-[240px]">
              <svg className="w-8 h-8 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-sm font-bold text-amber-900 mb-2">Bei akutem Wasseraustritt</h3>
              <ul className="space-y-1.5 text-xs text-amber-800 mb-6">
                {[
                  'Haupthahn sofort absperren',
                  'Strom im betroffenen Bereich sichern',
                  'Versicherung informieren',
                  'Fachbetrieb kontaktieren',
                ].map((i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block text-center bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold text-sm py-3 px-5 rounded-xl transition-colors"
              >
                Schaden einschätzen lassen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
