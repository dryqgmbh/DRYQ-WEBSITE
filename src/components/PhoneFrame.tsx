import { ReactNode } from 'react'
export default function PhoneFrame({ children, width = 300 }: { children: ReactNode; width?: number }) {
  const h = Math.round((width * 844) / 390)
  return (
    <div className="relative rounded-[44px] p-[10px]" style={{
      width, height: h,
      background: 'linear-gradient(180deg,#1c2436,#0a0f1a 60%,#060912)',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
    }}>
      <div className="relative h-full w-full overflow-hidden rounded-[36px]"
        style={{ background: 'radial-gradient(120% 80% at 50% 0%,#0c1428,#060912 70%)' }}>
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black/90" />
        <div className="relative z-10 flex items-center justify-between px-5 pt-2 text-[10px] text-white/70">
          <span className="font-medium">9:41</span>
          <span className="opacity-50">●●● 5G</span>
        </div>
        <div className="relative z-10 h-[calc(100%-26px)] overflow-hidden px-3.5 pt-2">{children}</div>
      </div>
    </div>
  )
}
