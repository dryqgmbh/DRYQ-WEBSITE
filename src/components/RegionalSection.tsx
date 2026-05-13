import { MapPin, Info } from 'lucide-react'

const regions = ['Siegburg','Bonn','Köln','Troisdorf','Hennef','Sankt Augustin','Königswinter','Bad Honnef','Leverkusen','Rhein-Sieg-Kreis','Bergisch Gladbach','Neunkirchen-Seelscheid']

export default function RegionalSection() {
  return (
    <section className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Einsatzgebiet</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">Wasserschadensanierung in Ihrer Region.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">DRYQ ist im Rheinland und Umgebung tätig. Schnelle Einsatzplanung für Privatkunden, Hausverwaltungen und Gewerbekunden in der Region.</p>
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 mb-8">
              <Info size={17} className="text-[#35D04F] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">Einsatzgebiet und Verfügbarkeit auf Anfrage. Wir stimmen Termine individuell ab.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r} className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:border-[#35D04F]/40 hover:text-[#35D04F] transition-colors cursor-default">{r}</span>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="aspect-square max-w-md mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-8">
              <MapPin size={56} className="text-[#35D04F]/25 mb-5" strokeWidth={1} />
              <div className="text-lg font-black text-[#101820] mb-2">Rheinland & Umgebung</div>
              <div className="text-sm text-gray-500 leading-relaxed text-center mb-6">Schnelle Einsatzplanung im Rhein-Sieg-Kreis, Bonn, Köln und weiteren Regionen.</div>
              <div className="grid grid-cols-3 gap-2 w-full">
                {['Siegburg','Bonn','Köln','Troisdorf','Hennef','Rhein-Sieg'].map((r) => (
                  <div key={r} className="bg-[#35D04F]/8 rounded-lg p-2 text-center">
                    <span className="text-[10px] font-semibold text-[#35D04F]">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
