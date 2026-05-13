const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#101820] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-white">DRY</span>
              <span className="text-2xl font-black text-[#35D04F]">Q</span>
              <span className="text-xs text-gray-500 font-medium ml-1 self-end pb-0.5">GmbH</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Professionelle Wasserschadensanierung, Leckortung und technische Trocknung
              für Eigentümer, Verwaltungen und Gewerbekunden.
            </p>
            <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl p-3">
              <div className="w-10 h-10 bg-[#1a3d8f] rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-black">ISO</span>
                <span className="text-white text-xs font-black leading-none">9001</span>
              </div>
              <div>
                <div className="text-white text-xs font-bold">ISO 9001 Fachbetrieb</div>
                <div className="text-gray-500 text-[10px]">Gültig bis 03/2028</div>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Leistungen</h3>
            <ul className="space-y-3">
              {[
                'Wasserschadensanierung',
                'Leckortung',
                'Technische Trocknung',
                'Estrichdämmschichttrocknung',
                'Bautrocknung',
                'Rückbau & Demontage',
                'Schimmelprävention',
              ].map((l) => (
                <li key={l}>
                  <a href="#leistungen" className="text-sm text-gray-500 hover:text-[#35D04F] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zielgruppen */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Für wen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Privatkunden', href: '#verwaltungen' },
                { label: 'Hausverwaltungen', href: '#verwaltungen' },
                { label: 'Gewerbekunden', href: '#verwaltungen' },
                { label: 'Versicherungen', href: '#versicherung' },
                { label: 'Sachverständige', href: '#versicherung' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-[#35D04F] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-[10px] text-gray-600 uppercase mb-1">Telefon</div>
                <a href="tel:+492241000000" className="text-sm text-gray-400 hover:text-[#35D04F] transition-colors font-medium">+49 2241 000000</a>
              </li>
              <li>
                <div className="text-[10px] text-gray-600 uppercase mb-1">E-Mail</div>
                <a href="mailto:info@dryq.de" className="text-sm text-gray-400 hover:text-[#35D04F] transition-colors">info@dryq.de</a>
              </li>
              <li>
                <div className="text-[10px] text-gray-600 uppercase mb-1">Adresse</div>
                {/* Replace with real address */}
                <address className="not-italic text-sm text-gray-500 leading-relaxed">
                  DRYQ GmbH<br />
                  Musterstraße 1<br />
                  53721 Siegburg
                </address>
              </li>
              <li>
                <div className="text-[10px] text-gray-600 uppercase mb-1">Einsatzgebiet</div>
                <span className="text-sm text-gray-500">Rheinland & Umgebung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {year} DRYQ GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <a href="/impressum" className="text-xs text-gray-600 hover:text-[#35D04F] transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-xs text-gray-600 hover:text-[#35D04F] transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
