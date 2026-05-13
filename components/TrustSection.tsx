const signals = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'ISO 9001 zertifizierte Prozesse',
    text: 'Zertifizierte Qualitätsprozesse in Anlehnung an DIN EN ISO 9001 – nachvollziehbar und dokumentierbar.',
  },
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Eigene Trocknungstechnik',
    text: 'Kein Gerätemangel, kein Warten auf externe Lieferungen. Eigener Bestand für schnellen Einsatz.',
  },
  {
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Messprotokoll & Fotodokumentation',
    text: 'Strukturierte Unterlagen für Versicherungen, Verwaltungen und Eigentümer.',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Schnelle Einsatzplanung',
    text: 'Direkter Ansprechpartner, schnelle Terminabstimmung und strukturierter Ablauf.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Erfahrung mit Versicherungsfällen',
    text: 'Kenntnis der Abläufe, Kommunikation mit Beteiligten und praxisgerechte Dokumentation.',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Transparente Kommunikation',
    text: 'Klare Information über Maßnahmen, Fortschritt und nächste Schritte – ohne Rückfragen.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-[#101820] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Qualität & Vertrauen</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            Was DRYQ ausmacht.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Kein Versprechen ohne Substanz. Diese Punkte beschreiben, wie DRYQ in der Praxis arbeitet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {signals.map((s) => (
            <div
              key={s.title}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/7 hover:border-[#35D04F]/25 transition-all reveal"
            >
              <div className="w-10 h-10 bg-[#35D04F]/12 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#35D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* ISO Badge row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
          {/* Replace with: <Image src="/assets/iso-9001-badge.png" alt="ISO 9001 Zertifikat" width={80} height={80} /> */}
          <div className="w-20 h-20 bg-[#1a3d8f] rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-black">ISO</span>
            <span className="text-white text-lg font-black leading-none">9001</span>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-lg mb-1">ISO 9001 – Fachbetrieb</div>
            <div className="text-gray-400 text-sm max-w-md leading-relaxed">
              Zertifizierter Fachbetrieb mit zertifizierten Bau-Experten im Schadenmanagement
              Gebäude & Wohnen. Gültig bis 03/2028.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
