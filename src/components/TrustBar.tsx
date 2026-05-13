import { ShieldCheck, Cpu, FileText, MapPin, Users } from 'lucide-react'

const items = [
  { Icon: ShieldCheck, title: 'ISO 9001', sub: 'Zertifizierte Prozesse' },
  { Icon: Cpu, title: 'Eigene Trocknungstechnik', sub: 'DRYQTECH Geräte' },
  { Icon: FileText, title: 'Messprotokoll & Fotodoku', sub: 'Versicherungsgerecht' },
  { Icon: MapPin, title: 'Rheinland & Umgebung', sub: 'Schnelle Einsatzplanung' },
  { Icon: Users, title: 'Privat & Gewerbe', sub: 'Verwaltungen & Versicherungen' },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
          {items.map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 py-5 px-4 sm:px-5 first:pl-0 last:pr-0">
              <div className="w-9 h-9 bg-[#35D04F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#35D04F]" strokeWidth={1.7} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#101820] leading-snug">{title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
