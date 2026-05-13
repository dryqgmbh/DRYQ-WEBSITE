const items=['At-home testing','Lab-based analysis','GDPR-conscious data','Clear app insights','Retest recommendations']
export default function TrustBar() {
  return (
    <div className="border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-[1200px] px-5 py-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-mute)]">
          {items.map((t,i)=>(
            <span key={t} className="inline-flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden><path d="M1.5 6 L4.5 9 L9.5 2" stroke="#7be36a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t}
              {i<items.length-1&&<span className="ml-7 hidden h-3 w-px bg-white/8 md:block"/>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
