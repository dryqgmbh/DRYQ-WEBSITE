import { Home, Building2, Briefcase, ShieldCheck, Check, ArrowRight } from 'lucide-react'

const groups = [
  {
    Icon: Home,
    label: 'Privatkunden & Eigentümer',
    headline: 'Schnelle Orientierung im Schadenfall.',
    text: 'Ein Wasserschaden ist stressig. DRYQ erklärt die nächsten Schritte verständlich, handelt schnell und kommuniziert klar – damit Sie wissen, was passiert und was als nächstes kommt.',
    points: ['Klare Erstberatung ohne Fachjargon', 'Schnelle Terminabstimmung', 'Transparente Kommunikation', 'Unterstützung bei Versicherungsabstimmung'],
    bg: 'bg-[#35D04F]/10',
    border: 'border-[#35D04F]/20',
  },
  {
    Icon: Building2,
    label: 'Hausverwaltungen',
    headline: 'Planbare Abwicklung, saubere Dokumentation.',
    text: 'Verwaltungen benötigen verlässliche Partner: klare Termine, Mieterkommunikation, Protokolle und wenig Rückfragen. DRYQ liefert strukturierte Abwicklung und belastbare Unterlagen.',
    points: ['Koordination mit Mietern und Eigentümern', 'Messprotokoll und Fotodokumentation', 'Planbare Trocknungszeiten', 'Skalierbare Zusammenarbeit'],
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    Icon: Briefcase,
    label: 'Gewerbekunden',
    headline: 'Schnelle Maßnahmen, geringe Ausfallzeit.',
    text: 'Jede Stunde zählt. DRYQ plant Trocknungsmaßnahmen so, dass Betriebsunterbrechungen minimiert werden. Schnelle Einsatzplanung, organisierte Umsetzung, klare Dokumentation.',
    points: ['Schnelle Einsatzplanung', 'Minimierung von Betriebsunterbrechungen', 'Angepasste Arbeitszeiten möglich', 'Saubere Leistungsabgrenzung'],
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    Icon: ShieldCheck,
    label: 'Sachverständige & Versicherungen',
    headline: 'Nachvollziehbare Messwerte und Leistungsabgrenzung.',
    text: 'Für Sachverständige und Regulierer: DRYQ dokumentiert Schadenaufnahme, Messwerte, Maßnahmen und Trocknungsverlauf so, dass eine übersichtliche Grundlage für die Regulierung entsteht.',
    points: ['Kalibrierte Feuchtemessungen', 'Nachvollziehbare Maßnahmenplanung', 'Stromverbrauchsmitteilung', 'Strukturierte Leistungsabgrenzung'],
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
]

export default function TargetGroups() {
  return (
    <section id="verwaltungen" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Für wen wir arbeiten</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-4">Für private Eigentümer, Verwaltungen, Gewerbe und Versicherungsumfeld.</h2>
          <p className="text-gray-600 leading-relaxed">Wasserschäden betreffen unterschiedliche Beteiligte mit unterschiedlichen Ansprüchen. DRYQ passt Kommunikation und Dokumentation an jede Zielgruppe an.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map(({ Icon, label, headline, text, points, bg, border }) => (
            <div key={label} className={`${bg} border ${border} rounded-2xl p-7 reveal`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#101820]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{label}</div>
                  <h3 className="text-lg font-bold text-[#101820]">{headline}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{text}</p>
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={15} className="text-[#35D04F] flex-shrink-0" strokeWidth={2.5} />{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors">
            Schaden melden <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
