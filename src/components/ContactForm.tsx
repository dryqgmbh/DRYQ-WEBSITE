'use client'

import { useState, FormEvent } from 'react'
import { Phone, AlertTriangle, Clock, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '',
    damageType: '', role: '', insurance: '', message: ''
  })
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: connect to real form endpoint (e.g. Resend, Formspree, own API route)
    setSent(true)
  }

  return (
    <section id="kontakt" className="bg-[#F6F8F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20">
          {/* Left */}
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">Kontakt</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">Schaden melden.</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Schildern Sie uns kurz Ihr Anliegen – wir melden uns schnellstmöglich zurück.</p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
              <AlertTriangle size={17} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Bei akutem Wasseraustritt:</strong> Bitte zuerst Wasserzufuhr am Haupthahn sperren und elektrische Sicherheit prüfen.
              </p>
            </div>

            <div className="mb-5">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Telefon</div>
              <a href="tel:+492241000000" className="flex items-center gap-3 text-2xl font-black text-[#101820] hover:text-[#35D04F] transition-colors">
                <div className="w-10 h-10 bg-[#35D04F]/10 rounded-xl flex items-center justify-center">
                  <Phone size={19} className="text-[#35D04F]" />
                </div>
                +49 2241 000000
              </a>
            </div>

            <div className="mb-8">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">WhatsApp</div>
              <a href="https://wa.me/492241000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors">
                <WaIcon /> Nachricht via WhatsApp
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Clock size={13} /> Erreichbarkeit
              </div>
              <div className="space-y-2 text-sm">
                {[['Mo – Fr', '08:00 – 18:00 Uhr', false], ['Sa', 'Nach Vereinbarung', false], ['Akuter Schadenfall', 'Per Anfrage', true]].map(([day, time, green]) => (
                  <div key={String(day)} className="flex justify-between">
                    <span className="text-gray-600">{day}</span>
                    <span className={`font-semibold ${green ? 'text-[#35D04F]' : 'text-[#101820]'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 reveal">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle size={52} className="text-[#35D04F] mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-black text-[#101820] mb-2">Nachricht gesendet</h3>
                <p className="text-gray-600 text-sm">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name *"><input required type="text" value={form.name} onChange={(e) => set('name', e.target.value)} className={iCls} placeholder="Vor- und Nachname" /></Field>
                  <Field label="Telefon *"><input required type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={iCls} placeholder="+49 ..." /></Field>
                </div>
                <Field label="E-Mail"><input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={iCls} placeholder="ihre@email.de" /></Field>
                <Field label="Adresse / Ort des Schadens"><input type="text" value={form.address} onChange={(e) => set('address', e.target.value)} className={iCls} placeholder="Straße, PLZ, Ort" /></Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Art des Schadens">
                    <select value={form.damageType} onChange={(e) => set('damageType', e.target.value)} className={iCls}>
                      <option value="">Bitte wählen</option>
                      {['Rohrbruch', 'Leckage unbekannt', 'Hochwasser / Überflutung', 'Kondensat / Feuchtigkeit', 'Estrichfeuchtigkeit', 'Sonstiges'].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Sie sind">
                    <select value={form.role} onChange={(e) => set('role', e.target.value)} className={iCls}>
                      <option value="">Bitte wählen</option>
                      {['Eigentümer', 'Mieter', 'Hausverwaltung', 'Gewerbekunde', 'Versicherung / Sachverständiger'].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Versicherung bereits informiert?">
                  <div className="flex gap-3 flex-wrap">
                    {['Ja', 'Nein', 'Noch nicht'].map((o) => (
                      <label key={o} className={`flex items-center gap-2 cursor-pointer border rounded-xl px-4 py-2.5 text-sm transition-colors ${
                        form.insurance === o ? 'border-[#35D04F] bg-[#35D04F]/5 text-[#35D04F] font-semibold' : 'border-gray-200 text-gray-600'
                      }`}>
                        <input type="radio" className="sr-only" checked={form.insurance === o} onChange={() => set('insurance', o)} />{o}
                      </label>
                    ))}
                  </div>
                </Field>
                <Field label="Nachricht">
                  <textarea rows={3} value={form.message} onChange={(e) => set('message', e.target.value)} className={`${iCls} resize-none`} placeholder="Kurze Beschreibung des Schadens, Fragen, etc." />
                </Field>
                <button type="submit" className="w-full bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold py-4 rounded-xl text-sm transition-colors">
                  Erste Einschätzung anfordern
                </button>
                <p className="text-xs text-gray-400 text-center">Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const iCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35D04F] focus:ring-1 focus:ring-[#35D04F]/30 transition-colors bg-white'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function WaIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
