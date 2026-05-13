import { Phone, MessageCircle, Bell } from 'lucide-react'

export default function MobileBar() {
  return (
    <div className="mobile-cta-bar">
      <a href="tel:+492241000000"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#101820] py-3.5 text-white active:bg-[#1a1f26]">
        <Phone size={19} />
        <span className="text-[10px] font-semibold">Anrufen</span>
      </a>
      <a href="https://wa.me/492241000000" target="_blank" rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#25D366] py-3.5 text-white active:bg-[#22c55e]">
        <MessageCircle size={19} />
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
      <a href="#kontakt"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#35D04F] py-3.5 text-white active:bg-[#28A83F]">
        <Bell size={19} />
        <span className="text-[10px] font-semibold">Schaden melden</span>
      </a>
    </div>
  )
}
