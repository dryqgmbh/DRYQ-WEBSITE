import { Thermometer, Wind, Filter, Zap, Ruler, GitBranch } from 'lucide-react'

const equipment = [
  { Icon: Thermometer, id: 'dehumidifier', title: 'Luftentfeuchter', sub: 'Kondensations- & Adsorptionstrockner', desc: 'Entziehen der Raumluft Feuchtigkeit und beschleunigen den Trocknungsprozess in Wänden, Böden und Decken.', spec: 'Bis 150 l/Tag' },
  { Icon: Wind, id: 'fan', title: 'Turbogebläse', sub: 'Hochleistungs-Axialventilatoren', desc: 'Erhöhen die Luftzirkulation an Bauteiloberflächen und unterstützen die Trocknung gezielt.', spec: 'Bis 3.500 m³/h' },
  { Icon: Filter, id: 'scrubber', title: 'Air Scrubber', sub: 'HEPA-Luftreiniger', desc: 'Reinigen die Raumluft von Partikeln, Schimmelporen und Geruchsstoffen während der Sanierung.', spec: 'HEPA H14 Filter' },
  { Icon: Zap, id: 'injector', title: 'Injektionssystem', sub: 'Estrich-Unterdrucktrocknung', desc: 'Gezielte Einleitung trockener Luft unter den Estrich für die Dämmschichttrocknung.', spec: 'Estrichdämmschicht' },
  { Icon: Ruler, id: 'meter', title: 'Feuchtemessgeräte', sub: 'Kapazitive & WD-Messtechnik', desc: 'Präzise Erfassung von Feuchtegehalten in Bauteilen – Grundlage für jeden Trocknungsplan.', spec: 'Kalibriert' },
  { Icon: GitBranch, id: 'hose', title: 'Schlauchsysteme', sub: 'Flexible Luftführung', desc: 'Gezielte Luftführung in schwer zugängliche Bereiche wie Hohlräume und Wandschlitze.', spec: 'Flexibel & modular' },
]

export default function EquipmentSection() {
  return (
    <section id="technik" className="bg-[#101820] py-20 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#35D04F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Technik</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Moderne Trocknungstechnik statt Improvisation.</h2>
            <p className="text-gray-400 leading-relaxed">DRYQ arbeitet mit professioneller Trocknungstechnik, Luftentfeuchtern, Luftreinigern, Turbogebläsen und abgestimmtem Zubehör. Die richtige Gerätekombination entscheidet über Trocknungsdauer, Energieeinsatz und Ergebnis.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:justify-end reveal">
            {['Eigene Technik', 'Passende Geräteleistung', 'Saubere Aufstellung', 'Dokumentierter Einsatz'].map((t) => (
              <span key={t} className="text-xs font-semibold bg-white/10 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipment.map(({ Icon, id, title, sub, desc, spec }) => (
            <div key={id} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#35D04F]/30 rounded-2xl p-6 transition-all duration-300 reveal">
              <div className="aspect-video bg-[#1A1F26] rounded-xl mb-5 flex flex-col items-center justify-center border border-white/10">
                <Icon size={36} className="text-[#35D04F]/50" strokeWidth={1.2} />
                <span className="text-[10px] text-gray-700 mt-2 italic">Foto wird eingefügt</span>
              </div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-white">{title}</h3>
                <span className="flex-shrink-0 text-[10px] font-semibold bg-[#35D04F]/20 text-[#35D04F] px-2 py-0.5 rounded-full">{spec}</span>
              </div>
              <div className="text-xs text-[#35D04F]/80 font-medium mb-2">{sub}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center reveal">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Alle Geräte aus eigenem Bestand</h3>
            <p className="text-gray-400 text-sm leading-relaxed">DRYQ verfügt über einen eigenen Gerätepark und ist nicht auf externe Mietgeräte angewiesen. Das ermöglicht schnellen Einsatz, passende Auswahl und kontrollierten Betrieb.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[['Geräte einsatzbereit', 'Eigener Bestand'], ['Messprotokolle', 'Standardisiert'], ['Aufstellung', 'Fachgerecht'], ['Betriebszeit', 'Kontrolliert']].map(([label, val]) => (
              <div key={label} className="bg-white/5 rounded-xl p-3">
                <div className="text-[#35D04F] font-bold text-sm">{val}</div>
                <div className="text-gray-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
