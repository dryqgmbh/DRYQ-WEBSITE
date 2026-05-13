const regions = [
  'Siegburg', 'Bonn', 'Köln', 'Troisdorf', 'Hennef',
  'Sankt Augustin', 'Königswinter', 'Bad Honnef', 'Leverkusen',
  'Rhein-Sieg-Kreis', 'Bergisch Gladbach', 'Neunkirchen-Seelscheid',
]

export default function RegionalSection() {
  return (
    <section className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Einsatzgebiet</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">
              Wasserschadensanierung in Ihrer Region.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              DRYQ ist im Rheinland und Umgebung tätig. Schnelle Einsatzplanung für Privatkunden,
              Hausverwaltungen und Gewerbekunden in der Region.
            </p>
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 mb-8">
              <svg className="w-5 h-5 text-[#35D04F] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-600">
                Einsatzgebiet und Verfügbarkeit auf Anfrage. Wir stimmen Termine individuell ab.
              </p>
            </div>

            {/* Region tags */}
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:border-[#35D04F]/40 hover:text-[#35D04F] transition-colors cursor-default"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Right — visual map placeholder */}
          <div className="reveal">
            <div className="aspect-square max-w-md mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col items-center justify-center p-8">
              {/* Replace with real map or SVG region map */}
              <svg className="w-24 h-24 text-[#35D04F]/30 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-center">
                <div className="text-lg font-black text-[#101820] mb-2">Rheinland & Umgebung</div>
                <div className="text-sm text-gray-500 leading-relaxed">
                  Schnelle Einsatzplanung im Rhein-Sieg-Kreis, Bonn, Köln und weiteren Regionen.
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 w-full">
                {['Siegburg', 'Bonn', 'Köln', 'Troisdorf', 'Hennef', 'Rhein-Sieg'].map((r) => (
                  <div key={r} className="bg-[#35D04F]/8 rounded-lg p-2 text-center">
                    <span className="text-[10px] font-semibold text-[#35D04F]">{r}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-4 italic">Karte wird eingefügt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
