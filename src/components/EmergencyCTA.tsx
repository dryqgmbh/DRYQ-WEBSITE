import { AlertTriangle, Check } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function EmergencyCTA() {
  return (
    <section className="bg-[#F6F8F7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-[1fr_auto] items-stretch">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Wichtiger Hinweis</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#101820] mb-3">
                Ein Wasserschaden muss schnell, aber richtig behandelt werden.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
                Entscheidend sind eine präzise Schadenaufnahme, passende Trocknungstechnik,
                dokumentierte Messwerte und eine saubere Abstimmung mit Versicherung, Verwaltung
                oder Eigentümer. Je früher Feuchtigkeit geprüft und kontrolliert getrocknet wird,
                desto geringer ist das Risiko für Folgeschäden.
              </p>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { n: '01', title: 'Wasser stoppen & Schaden begrenzen', desc: 'Wasserzufuhr absperren, elektrische Sicherheit prüfen.' },
                  { n: '02', title: 'Feuchtigkeit messen & Ursache eingrenzen', desc: 'Professionelle Feuchtemessung an Wänden, Böden und Bauteilen.' },
                  { n: '03', title: 'Trocknung planen & dokumentieren', desc: 'Maßnahmenplan, Geräteauswahl, strukturierte Dokumentation.' },
                ].map((c) => (
                  <div key={c.n} className="flex gap-3">
                    <span className="flex-shrink-0 text-2xl font-black text-[#35D04F]/25 leading-none mt-0.5">{c.n}</span>
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
              <AlertTriangle size={28} className="text-amber-500 mb-4" strokeWidth={1.7} />
              <h3 className="text-sm font-bold text-amber-900 mb-3">Bei akutem Wasseraustritt</h3>
              <ul className="space-y-2 mb-6">
                {['Haupthahn sofort absperren', 'Strom im Bereich sichern', 'Versicherung informieren', 'Fachbetrieb kontaktieren'].map((i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-amber-800">
                    <Check size={13} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {i}
                  </li>
                ))}
              </ul>
              <a href="#kontakt"
                className="flex items-center justify-center gap-1.5 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold text-sm py-3 px-5 rounded-xl transition-colors">
                Schaden einschätzen lassen
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
