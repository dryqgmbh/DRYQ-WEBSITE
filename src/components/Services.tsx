import { Home, Search, Wind, Layers, Building2, Trash2, AlertCircle, FileText, ArrowRight } from 'lucide-react'

const services = [
  { Icon: Home, id: 'wasser', title: 'Wasserschadensanierung', text: 'Von der ersten Schadenaufnahme bis zur technischen Trocknung und Wiederherstellung begleiten wir Wasserschäden strukturiert und nachvollziehbar.', tags: ['Schadenaufnahme', 'Trocknung', 'Wiederherstellung'] },
  { Icon: Search, id: 'leck', title: 'Leckortung', text: 'Wir grenzen Feuchtigkeit und mögliche Ursachen mit geeigneter Messtechnik ein und schaffen die Grundlage für die richtige Sanierungsentscheidung.', tags: ['Feuchtemessung', 'Ursachenermittlung', 'Messtechnik'] },
  { Icon: Wind, id: 'trocknung', title: 'Technische Trocknung', text: 'Professionelle Trocknungsgeräte, Luftentfeuchter, Turbogebläse und abgestimmte Trocknungskonzepte für Wände, Böden und Bauteile.', tags: ['Luftentfeuchter', 'Turbogebläse', 'Luftreinigung'] },
  { Icon: Layers, id: 'estrich', title: 'Estrichdämmschichttrocknung', text: 'Gezielte Trocknung unterhalb des Estrichs, wenn Feuchtigkeit in Dämmschichten oder Bodenaufbauten eingedrungen ist.', tags: ['Estrich', 'Dämmschicht', 'Bodenaufbau'] },
  { Icon: Building2, id: 'bau', title: 'Bautrocknung', text: 'Kontrollierte Trocknung für Neubau, Umbau und Sanierung zur Reduzierung von Baufeuchte und Verzögerungen.', tags: ['Neubau', 'Sanierung', 'Baufeuchte'] },
  { Icon: Trash2, id: 'rueckbau', title: 'Rückbau & Demontage', text: 'Sorgfältiger Rückbau beschädigter Bauteile als Vorbereitung für Trocknung, Schimmelprävention oder Wiederherstellung.', tags: ['Demontage', 'Schimmelschutz', 'Vorbereitung'] },
  { Icon: AlertCircle, id: 'schimmel', title: 'Schimmelprävention & Feuchteanalyse', text: 'Feuchtigkeit frühzeitig erkennen, bewerten und Folgeschäden vermeiden.', tags: ['Frühzeitiger Schutz', 'Feuchteanalyse', 'Prävention'] },
  { Icon: FileText, id: 'doku', title: 'Dokumentation für Versicherungen', text: 'Fotodokumentation, Messprotokolle, Stromverbrauchsmitteilung und nachvollziehbare Leistungsabgrenzung.', tags: ['Messprotokoll', 'Fotos', 'Versicherungsabstimmung'] },
]

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-4">Was DRYQ für Sie leistet</h2>
          <p className="text-gray-600 leading-relaxed">Von der Erstbeurteilung bis zur abgeschlossenen Trocknung – DRYQ begleitet jeden Wasserschaden strukturiert, fachlich und dokumentiert.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, id, title, text, tags }) => (
            <div key={id} className="group bg-[#F6F8F7] hover:bg-white border border-transparent hover:border-[#35D04F]/20 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 reveal">
              <div className="w-11 h-11 bg-white group-hover:bg-[#35D04F]/10 rounded-xl flex items-center justify-center mb-4 transition-colors shadow-sm">
                <Icon size={20} className="text-[#35D04F]" strokeWidth={1.7} />
              </div>
              <h3 className="text-sm font-bold text-[#101820] mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{text}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => <span key={t} className="text-[10px] font-medium bg-[#35D04F]/10 text-[#28A83F] px-2 py-0.5 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center reveal">
          <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#101820] hover:bg-[#20252B] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-colors">
            Trocknung anfragen <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
