const groups = [
  {
    id: 'privat',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    label: 'Privatkunden & Eigentümer',
    headline: 'Schnelle Orientierung im Schadenfall.',
    text: 'Ein Wasserschaden ist stressig. DRYQ erklärt die nächsten Schritte verständlich, handelt schnell und kommuniziert klar – damit Sie wissen, was passiert und was als nächstes kommt.',
    points: [
      'Klare Erstberatung ohne Fachjargon',
      'Schnelle Terminabstimmung',
      'Transparente Kommunikation',
      'Unterstützung bei Versicherungsabstimmung',
    ],
    color: 'from-[#35D04F]/10 to-[#35D04F]/5',
    border: 'border-[#35D04F]/20',
  },
  {
    id: 'verwaltung',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    label: 'Hausverwaltungen',
    headline: 'Planbare Abwicklung, saubere Dokumentation.',
    text: 'Verwaltungen benötigen verlässliche Partner: klare Termine, Mieterkommunikation, Protokolle und wenig Rückfragen. DRYQ liefert strukturierte Abwicklung und belastbare Unterlagen.',
    points: [
      'Koordination mit Mietern und Eigentümern',
      'Messprotokoll und Fotodokumentation',
      'Planbare Trocknungszeiten',
      'Skalierbare Zusammenarbeit',
    ],
    color: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20',
  },
  {
    id: 'gewerbe',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Gewerbekunden',
    headline: 'Schnelle Maßnahmen, geringe Ausfallzeit.',
    text: 'Jede Stunde zählt. DRYQ plant Trocknungsmaßnahmen so, dass Betriebsunterbrechungen minimiert werden. Schnelle Einsatzplanung, organisierte Umsetzung, klare Dokumentation.',
    points: [
      'Schnelle Einsatzplanung',
      'Minimierung von Betriebsunterbrechungen',
      'Angepasste Arbeitszeiten möglich',
      'Saubere Leistungsabgrenzung',
    ],
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-500/20',
  },
  {
    id: 'versicherung',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    label: 'Sachverständige & Versicherungen',
    headline: 'Nachvollziehbare Messwerte und Leistungsabgrenzung.',
    text: 'Für Sachverständige und Regulierer: DRYQ dokumentiert Schadenaufnahme, Messwerte, Maßnahmen und Trocknungsverlauf so, dass eine übersichtliche Grundlage für die Regulierung entsteht.',
    points: [
      'Kalibrierte Feuchtemessungen',
      'Nachvollziehbare Maßnahmenplanung',
      'Stromverbrauchsmitteilung',
      'Strukturierte Leistungsabgrenzung',
    ],
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
  },
]

export default function TargetGroups() {
  return (
    <section id="verwaltungen" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Für wen wir arbeiten</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-4">
            Für private Eigentümer, Verwaltungen, Gewerbe und Versicherungsumfeld.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Wasserschäden betreffen unterschiedliche Beteiligte mit unterschiedlichen Ansprüchen.
            DRYQ passt Kommunikation und Dokumentation an jede Zielgruppe an.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.id}
              className={`bg-gradient-to-br ${g.color} border ${g.border} rounded-2xl p-7 reveal`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#101820]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{g.label}</div>
                  <h3 className="text-lg font-bold text-[#101820]">{g.headline}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{g.text}</p>
              <ul className="space-y-2">
                {g.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#35D04F] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors shadow-sm shadow-[#35D04F]/20"
          >
            Schaden melden
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
