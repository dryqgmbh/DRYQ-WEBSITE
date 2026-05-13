import { MessageSquare, Eye, MapPin, ClipboardList, Activity, FileCheck, Home, ArrowRight } from 'lucide-react'

const steps = [
  { Icon: MessageSquare, n: '01', title: 'Schaden melden', text: 'Sie kontaktieren uns telefonisch, per WhatsApp oder über das Formular. Kurze Erstinformation genügt.' },
  { Icon: Eye, n: '02', title: 'Erste Einschätzung', text: 'Wir klären Schadenbild, Dringlichkeit, Objektart und nächste Schritte.' },
  { Icon: MapPin, n: '03', title: 'Vor-Ort-Termin & Messung', text: 'Feuchtigkeit wird gemessen, betroffene Bereiche werden dokumentiert.' },
  { Icon: ClipboardList, n: '04', title: 'Maßnahmenplan', text: 'Wir planen Trocknung, Rückbau oder weitere Schritte passend zum Schaden.' },
  { Icon: Activity, n: '05', title: 'Technische Trocknung', text: 'Geräte werden fachgerecht aufgestellt und regelmäßig kontrolliert.' },
  { Icon: FileCheck, n: '06', title: 'Dokumentation', text: 'Sie erhalten relevante Nachweise für Verwaltung, Versicherung oder Eigentümer.' },
  { Icon: Home, n: '07', title: 'Abschluss & Wiederherstellung', text: 'Nach erreichter Trocknung werden Folgearbeiten vorbereitet oder koordiniert.' },
]

export default function Process() {
  return (
    <section id="ablauf" className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Ablauf</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-6">Ein klarer Ablauf reduziert Stress, Folgeschäden und Rückfragen.</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Strukturierte Schritte schaffen Sicherheit – für Sie als Eigentümer, für die Verwaltung, für die Versicherung.</p>
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-sm">
              Fall besprechen <ArrowRight size={14} />
            </a>
          </div>
          <div className="relative reveal">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-0">
              {steps.map(({ Icon, n, title, text }, i) => (
                <div key={n} className="relative flex gap-5 sm:gap-8 pb-8 last:pb-0">
                  <div className="relative flex-shrink-0 z-10">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                      i === 0 ? 'bg-[#35D04F] border-[#35D04F] text-white' : 'bg-white border-gray-200 text-gray-400'
                    }`}>
                      <Icon size={16} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-sm font-bold text-[#101820] mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
