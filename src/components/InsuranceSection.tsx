import { Camera, BarChart3, ClipboardList, Zap, Calendar, Receipt, ArrowRight } from 'lucide-react'

const docItems = [
  { Icon: Camera, label: 'Fotodokumentation', desc: 'Systematische Bildaufnahme aller betroffenen Bereiche' },
  { Icon: BarChart3, label: 'Feuchtemessungen', desc: 'Kalibrierte Messwerte an allen relevanten Bauteilen' },
  { Icon: ClipboardList, label: 'Messprotokoll', desc: 'Dokumentierter Trocknungsverlauf mit Datum und Werten' },
  { Icon: Zap, label: 'Stromverbrauchsmitteilung', desc: 'Transparente Auflistung des Geräteeinsatzes' },
  { Icon: Calendar, label: 'Trocknungsverlauf', desc: 'Chronologische Fortschrittsdokumentation' },
  { Icon: Receipt, label: 'Leistungsnachweise', desc: 'Klare Abgrenzung erbrachter Maßnahmen' },
]

export default function InsuranceSection() {
  return (
    <section id="versicherung" className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Versicherung & Dokumentation</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">Dokumentation, die Versicherungen und Verwaltungen verstehen.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Bei Wasserschäden zählt nicht nur die Ausführung, sondern auch die Nachvollziehbarkeit. DRYQ dokumentiert relevante Feststellungen, Maßnahmen, Messwerte und Fotos strukturiert und verständlich.</p>
            <div className="bg-[#101820]/5 border border-[#101820]/10 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Wichtiger Hinweis:</strong> Ob Ihre Versicherung die Kosten übernimmt, hängt vom Vertrag und Schadenfall ab. DRYQ unterstützt mit nachvollziehbarer Dokumentation für die weitere Abstimmung mit Ihrer Versicherung.
              </p>
            </div>
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-sm">
              Rückruf anfordern <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            {docItems.map(({ Icon, label, desc }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#35D04F]/20 transition-all">
                <div className="w-9 h-9 bg-[#35D04F]/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={18} className="text-[#35D04F]" strokeWidth={1.7} />
                </div>
                <div className="text-sm font-bold text-[#101820] mb-1">{label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
