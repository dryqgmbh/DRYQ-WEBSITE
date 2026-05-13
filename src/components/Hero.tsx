import { ArrowRight, Phone, Check, Shield, Cpu, FileText, MapPin, Users } from 'lucide-react'

const bullets = [
  { icon: Shield, text: 'ISO 9001 zertifizierte Prozesse' },
  { icon: Cpu, text: 'Eigene moderne Trocknungstechnik' },
  { icon: FileText, text: 'Messprotokolle & Fotodokumentation' },
  { icon: MapPin, text: 'Einsatzplanung im Rheinland' },
  { icon: Users, text: 'Für Privatkunden, Verwaltungen & Gewerbe' },
]

export default function Hero() {
  return (
    <section className="relative bg-[#101820] hero-grid pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#35D04F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#35D04F]/10 border border-[#35D04F]/20 text-[#35D04F] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#35D04F] rounded-full animate-pulse" />
              Schnelle Einsatzplanung im Rheinland
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-black text-white leading-[1.08] tracking-tight mb-6">
              Wasserschaden?{' '}
              <span className="text-[#35D04F]">DRYQ</span>{' '}
              übernimmt Trocknung, Rückbau und Dokumentation.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Professionelle Wasserschadensanierung für Eigentümer, Hausverwaltungen und
              Gewerbekunden – mit Leckortung, technischer Trocknung, eigener Gerätetechnik
              und nachvollziehbarer Dokumentation für die Abstimmung mit Versicherung oder Verwaltung.
            </p>

            <ul className="grid sm:grid-cols-2 gap-2.5 mb-10">
              {bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#35D04F]/15 rounded-full flex items-center justify-center">
                    <Check size={11} className="text-[#35D04F]" strokeWidth={3} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#kontakt"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-[#35D04F]/20">
                Schaden melden
                <ArrowRight size={16} />
              </a>
              <a href="tel:+492241000000"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors">
                <Phone size={15} className="text-[#35D04F]" />
                Direkt anrufen
              </a>
            </div>
          </div>

          {/* Right — Dashboard visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/8 bg-[#1A1F26] shadow-2xl">
              {/* Replace with real image: <Image src="/assets/dryqtech-setup.jpg" alt="DRYQ Trocknungstechnik" fill className="object-cover" /> */}
              <div className="aspect-[4/3] p-7 flex flex-col justify-between">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="bg-[#35D04F]/10 border border-[#35D04F]/15 rounded-xl p-4">
                    <Cpu size={28} className="text-[#35D04F]" strokeWidth={1.3} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-0.5">Live-Feuchtemessung</div>
                    <div className="text-2xl font-black text-white">68<span className="text-base font-normal text-gray-400">% rF</span></div>
                    <div className="text-xs text-[#35D04F] mt-0.5">▼ Abnehmend</div>
                  </div>
                </div>

                {/* Equipment grid */}
                <div className="grid grid-cols-3 gap-3 my-5">
                  {[
                    { label: 'Luftentfeuchter', val: '2x' },
                    { label: 'Turbogebläse', val: '4x' },
                    { label: 'Air Scrubber', val: '1x' },
                  ].map((eq) => (
                    <div key={eq.label} className="bg-[#101820]/60 border border-white/6 rounded-xl p-3 text-center">
                      <div className="text-[#35D04F] font-black text-lg">{eq.val}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{eq.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="bg-[#101820]/60 border border-white/6 rounded-xl p-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400">Trocknungsfortschritt</span>
                    <span className="text-[#35D04F] font-semibold">Tag 4 / 14</span>
                  </div>
                  <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full w-[28%] bg-linear-to-r from-[#35D04F] to-[#28A83F] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-600 mt-1.5">
                    <span>Start: 92 % rF</span><span>Ziel: ≤50 % rF</span>
                  </div>
                </div>

                {/* Placeholder note */}
                <p className="text-[10px] text-gray-700 italic text-center mt-3">
                  {/* Echtes Bild: /assets/dryqtech-setup.jpg */}
                  Echte Gerätebilder werden eingefügt
                </p>
              </div>
            </div>

            {/* ISO badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 border border-gray-100">
              {/* Replace with: <Image src="/assets/iso-9001-badge.png" alt="ISO 9001" width={40} height={40} /> */}
              <div className="w-10 h-10 bg-[#1a3d8f] rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-black">ISO</span>
                <span className="text-white text-xs font-black leading-none">9001</span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#101820]">ISO 9001</div>
                <div className="text-[10px] text-gray-500">Zertifizierte Prozesse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
