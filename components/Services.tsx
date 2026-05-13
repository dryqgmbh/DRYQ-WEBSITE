const services = [
  {
    id: 'wasserschadensanierung',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Wasserschadensanierung',
    text: 'Von der ersten Schadenaufnahme bis zur technischen Trocknung und Wiederherstellung begleiten wir Wasserschäden strukturiert und nachvollziehbar.',
    tags: ['Schadenaufnahme', 'Trocknung', 'Wiederherstellung'],
  },
  {
    id: 'leckortung',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Leckortung',
    text: 'Wir grenzen Feuchtigkeit und mögliche Ursachen mit geeigneter Messtechnik ein und schaffen die Grundlage für die richtige Sanierungsentscheidung.',
    tags: ['Feuchtemessung', 'Ursachenermittlung', 'Messtechnik'],
  },
  {
    id: 'technische-trocknung',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Technische Trocknung',
    text: 'Professionelle Trocknungsgeräte, Luftentfeuchter, Turbogebläse und abgestimmte Trocknungskonzepte für Wände, Böden und Bauteile.',
    tags: ['Luftentfeuchter', 'Turbogebläse', 'Luftreinigung'],
  },
  {
    id: 'estrich',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    title: 'Estrichdämmschichttrocknung',
    text: 'Gezielte Trocknung unterhalb des Estrichs, wenn Feuchtigkeit in Dämmschichten oder Bodenaufbauten eingedrungen ist.',
    tags: ['Estrich', 'Dämmschicht', 'Bodenaufbau'],
  },
  {
    id: 'bautrocknung',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Bautrocknung',
    text: 'Kontrollierte Trocknung für Neubau, Umbau und Sanierung zur Reduzierung von Baufeuchte und Verzögerungen.',
    tags: ['Neubau', 'Sanierung', 'Baufeuchte'],
  },
  {
    id: 'rueckbau',
    icon: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4',
    title: 'Rückbau & Demontage',
    text: 'Sorgfältiger Rückbau beschädigter Bauteile als Vorbereitung für Trocknung, Schimmelpravention oder Wiederherstellung.',
    tags: ['Demontage', 'Schimmelschutz', 'Sanierungsvorbereitung'],
  },
  {
    id: 'schimmel',
    icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Schimmelprävention & Feuchteanalyse',
    text: 'Feuchtigkeit frühzeitig erkennen, bewerten und Folgeschäden vermeiden.',
    tags: ['Frühzeitiger Schutz', 'Feuchteanalyse', 'Prävention'],
  },
  {
    id: 'dokumentation',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Dokumentation für Versicherungen',
    text: 'Fotodokumentation, Messprotokolle, Stromverbrauchsmitteilung und nachvollziehbare Leistungsabgrenzung.',
    tags: ['Messprotokoll', 'Fotos', 'Versicherungsabstimmung'],
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-4">
            Was DRYQ für Sie leistet
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Von der Erstbeurteilung bis zur abgeschlossenen Trocknung – DRYQ begleitet jeden
            Wasserschaden strukturiert, fachlich und dokumentiert.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-[#F6F8F7] hover:bg-white border border-transparent hover:border-[#35D04F]/20 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 reveal"
            >
              <div className="w-11 h-11 bg-white group-hover:bg-[#35D04F]/10 rounded-xl flex items-center justify-center mb-4 transition-colors shadow-sm">
                <svg className="w-5 h-5 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#101820] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.text}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] font-medium bg-[#35D04F]/8 text-[#28A83F] px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div className="mt-14 text-center reveal">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#101820] hover:bg-[#20252B] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-colors"
          >
            Trocknung anfragen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
