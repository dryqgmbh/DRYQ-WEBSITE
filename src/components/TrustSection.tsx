import { ShieldCheck, Cpu, FileText, Clock, Users, Mail } from 'lucide-react'

const signals = [
  { Icon: ShieldCheck, title: 'ISO 9001 zertifizierte Prozesse', text: 'Zertifizierte Qualitätsprozesse in Anlehnung an DIN EN ISO 9001 – nachvollziehbar und dokumentierbar.' },
  { Icon: Cpu, title: 'Eigene Trocknungstechnik', text: 'Kein Gerätemangel, kein Warten auf externe Lieferungen. Eigener Bestand für schnellen Einsatz.' },
  { Icon: FileText, title: 'Messprotokoll & Fotodokumentation', text: 'Strukturierte Unterlagen für Versicherungen, Verwaltungen und Eigentümer.' },
  { Icon: Clock, title: 'Schnelle Einsatzplanung', text: 'Direkter Ansprechpartner, schnelle Terminabstimmung und strukturierter Ablauf.' },
  { Icon: Users, title: 'Erfahrung mit Versicherungsfällen', text: 'Kenntnis der Abläufe, Kommunikation mit Beteiligten und praxisgerechte Dokumentation.' },
  { Icon: Mail, title: 'Transparente Kommunikation', text: 'Klare Information über Maßnahmen, Fortschritt und nächste Schritte – ohne Rückfragen.' },
]

export default function TrustSection() {
  return (
    <section className="bg-[#101820] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Qualität & Vertrauen</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Was DRYQ ausmacht.</h2>
          <p className="text-gray-400 leading-relaxed">Kein Versprechen ohne Substanz. Diese Punkte beschreiben, wie DRYQ in der Praxis arbeitet.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {signals.map(({ Icon, title, text }) => (
            <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/7 hover:border-[#35D04F]/25 transition-all reveal">
              <div className="w-10 h-10 bg-[#35D04F]/12 rounded-xl flex items-center justify-center mb-4">
                <Icon size={19} className="text-[#35D04F]" strokeWidth={1.8} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
          {/* Replace with: <Image src="/assets/iso-9001-badge.png" alt="ISO 9001" width={80} height={80} /> */}
          <div className="w-20 h-20 bg-[#1a3d8f] rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-black">ISO</span>
            <span className="text-white text-xl font-black leading-none">9001</span>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-lg mb-1">ISO 9001 – Fachbetrieb</div>
            <div className="text-gray-400 text-sm max-w-md leading-relaxed">Zertifizierter Fachbetrieb mit zertifizierten Bau-Experten im Schadenmanagement Gebäude & Wohnen. Gültig bis 03/2028.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
