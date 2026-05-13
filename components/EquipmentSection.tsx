const equipment = [
  {
    id: 'dehumidifier',
    title: 'Luftentfeuchter',
    sub: 'Kondensations- & Adsorptionstrockner',
    desc: 'Entziehen der Raumluft Feuchtigkeit und beschleunigen den Trocknungsprozess in Wänden, Böden und Decken.',
    spec: 'Bis 150 l/Tag',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    /* Replace with: /assets/dryqtech-dehumidifier.png */
  },
  {
    id: 'fan',
    title: 'Turbogebläse',
    sub: 'Hochleistungs-Axialventilatoren',
    desc: 'Erhöhen die Luftzirkulation an Bauteiloberflächen und unterstützen die Trocknung gezielt.',
    spec: 'Bis 3.500 m³/h',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    /* Replace with: /assets/dryqtech-turbo-fan.png */
  },
  {
    id: 'scrubber',
    title: 'Air Scrubber',
    sub: 'HEPA-Luftreiniger',
    desc: 'Reinigen die Raumluft von Partikeln, Schimmelporen und Geruchsstoffen während der Sanierung.',
    spec: 'HEPA H14 Filter',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
    /* Replace with: /assets/dryqtech-air-scrubber.png */
  },
  {
    id: 'injector',
    title: 'Injektionssystem',
    sub: 'Estrich-Unterdrucktrocknung',
    desc: 'Gezielte Einleitung trockener Luft unter den Estrich für die Dämmschichttrocknung.',
    spec: 'Estrichdämmschicht',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    /* Replace with: /assets/dryqtech-injector.png */
  },
  {
    id: 'meter',
    title: 'Feuchtemessgeräte',
    sub: 'Kapazitive & WD-Messtechnik',
    desc: 'Präzise Erfassung von Feuchtegehalten in Bauteilen – Grundlage für jeden Trocknungsplan.',
    spec: 'Kalibrierte Messtechnik',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    /* Replace with: /assets/technician-measurement.jpg */
  },
  {
    id: 'hose',
    title: 'Schlauch- & Verteilsysteme',
    sub: 'Flexible Luftführung',
    desc: 'Gezielte Luftführung in schwer zugängliche Bereiche wie Hohlräume und Wandschlitze.',
    spec: 'Flexibel & modular',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    /* Replace with: /assets/dryqtech-hose-system.jpg */
  },
]

export default function EquipmentSection() {
  return (
    <section id="technik" className="bg-[#101820] py-20 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#35D04F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Technik</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
              Moderne Trocknungstechnik statt Improvisation.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              DRYQ arbeitet mit professioneller Trocknungstechnik, Luftentfeuchtern, Luftreinigern,
              Turbogebläsen und abgestimmtem Zubehör. Die richtige Gerätekombination entscheidet
              über Trocknungsdauer, Energieeinsatz und Ergebnis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end reveal">
            {['Eigene Technik', 'Passende Geräteleistung', 'Saubere Aufstellung', 'Dokumentierter Einsatz'].map((t) => (
              <span key={t} className="text-xs font-semibold bg-white/6 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Equipment grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipment.map((eq) => (
            <div
              key={eq.id}
              className="group bg-white/4 hover:bg-white/8 border border-white/8 hover:border-[#35D04F]/30 rounded-2xl p-6 transition-all duration-300 reveal"
            >
              {/* Placeholder image slot */}
              <div className="aspect-[16/9] bg-[#1A1F26] rounded-xl mb-5 flex flex-col items-center justify-center border border-white/6 overflow-hidden relative">
                <svg className="w-12 h-12 text-[#35D04F]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={eq.icon} />
                </svg>
                <span className="text-[10px] text-gray-600 mt-2 italic">Foto wird eingefügt</span>
                {/* Replace entire div content with:
                  <Image src={`/assets/dryqtech-${eq.id}.png`} alt={eq.title} fill className="object-contain p-4" />
                */}
              </div>

              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-white">{eq.title}</h3>
                <span className="flex-shrink-0 text-[10px] font-semibold bg-[#35D04F]/15 text-[#35D04F] px-2 py-0.5 rounded-full whitespace-nowrap">
                  {eq.spec}
                </span>
              </div>
              <div className="text-xs text-[#35D04F]/80 font-medium mb-2">{eq.sub}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{eq.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-white/4 border border-white/8 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center reveal">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Alle Geräte aus eigenem Bestand</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              DRYQ verfügt über einen eigenen Gerätepark und ist nicht auf externe Mietgeräte angewiesen.
              Das ermöglicht schnellen Einsatz, passende Auswahl und kontrollierten Betrieb.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Geräte einsatzbereit', val: 'Eigener Bestand' },
              { label: 'Messprotokolle', val: 'Standardisiert' },
              { label: 'Aufstellung', val: 'Fachgerecht' },
              { label: 'Betriebszeit', val: 'Kontrolliert' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl p-3">
                <div className="text-[#35D04F] font-bold text-sm">{s.val}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
