'use client'

import { useState } from 'react'
import { Plus, ArrowRight } from 'lucide-react'

const faqs = [
  { q: 'Was mache ich sofort bei einem Wasserschaden?', a: 'Stoppen Sie zunächst die Wasserzufuhr am Haupthahn. Achten Sie auf elektrische Sicherheit und schalten Sie Stromkreise ab, wenn Wasser mit Elektrik in Berührung kommen könnte. Dokumentieren Sie den Schaden mit Fotos, informieren Sie Ihre Versicherung oder Hausverwaltung und kontaktieren Sie einen Fachbetrieb.' },
  { q: 'Muss nach einem Wasserschaden immer getrocknet werden?', a: 'Nicht zwingend in jedem Fall – aber wenn Feuchtigkeit in Bauteile wie Estrich, Dämmung, Wand- oder Deckenaufbauten eingedrungen ist, muss fachgerecht geprüft und in der Regel technisch getrocknet werden. Eine oberflächliche Trocknung reicht dann oft nicht aus und kann später zu Schimmelbildung führen.' },
  { q: 'Wie lange dauert eine technische Trocknung?', a: 'Das ist abhängig vom Schadenbild, dem betroffenen Bauteil, der Durchfeuchtungstiefe und dem Aufbau. Häufig sind es mehrere Tage bis wenige Wochen. Eine seriöse Einschätzung ist nur nach einer Messung vor Ort möglich.' },
  { q: 'Übernimmt die Versicherung die Kosten?', a: 'Das hängt vom Versicherungsvertrag und dem konkreten Schadenfall ab. DRYQ unterstützt mit nachvollziehbarer Dokumentation – Messprotokollen, Fotos, Leistungsnachweisen – für die weitere Abstimmung mit Ihrer Versicherung. Eine Kostenzusage kann DRYQ nicht machen.' },
  { q: 'Was ist eine Estrichdämmschichttrocknung?', a: 'Dabei wird die Dämm- oder Hohlraumschicht unterhalb des Estrichs getrocknet, wenn dort Feuchtigkeit eingedrungen ist. Das erfolgt über spezielle Injektionssysteme, die trockene Luft gezielt in die Schicht einleiten. Diese Methode schont den Estrich und vermeidet oft den vollständigen Rückbau.' },
  { q: 'Kann Schimmel entstehen?', a: 'Ja, wenn Feuchtigkeit zu lange in Bauteilen verbleibt. Schimmelpilze können sich bereits nach wenigen Tagen bei ungenügender Trocknung bilden. Deshalb sind schnelle Schadenaufnahme, fachgerechte Trocknung und Kontrolle durch Messungen wichtig.' },
  { q: 'Arbeitet DRYQ auch für Hausverwaltungen?', a: 'Ja. DRYQ unterstützt Verwaltungen mit strukturierter Kommunikation, Terminabstimmung mit Mietern, Fotodokumentation, Messprotokollen und planbarer Schadenabwicklung.' },
  { q: 'Bietet DRYQ auch Rückbau an?', a: 'Ja. Beschädigte oder nicht trocknungsfähige Bauteile können fachgerecht zurückgebaut werden, wenn das für die Sanierung notwendig ist.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div className="reveal">
            <span className="text-xs font-semibold text-[#35D04F] uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#101820] mt-2 mb-5">Häufige Fragen zu Wasserschäden.</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Antworten auf die wichtigsten Fragen rund um Wasserschadensanierung, Trocknung und Versicherungsabstimmung.</p>
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#35D04F] hover:bg-[#28A83F] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
              Weitere Fragen? <ArrowRight size={14} />
            </a>
          </div>
          <div className="space-y-3 reveal">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-[#F6F8F7] hover:border-[#35D04F]/20 transition-colors">
                <button className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="text-sm font-semibold text-[#101820]">{f.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-transform ${open === i ? 'rotate-45 border-[#35D04F] bg-[#35D04F]/10' : ''}`}>
                    <Plus size={12} className="text-gray-500" strokeWidth={2.5} />
                  </span>
                </button>
                <div className={`faq-body ${open === i ? 'open' : ''}`}>
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
