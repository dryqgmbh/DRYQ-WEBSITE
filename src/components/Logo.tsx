export function LogoMark({ size = 28 }: { size?: number }) {
  const h = Math.round((size * 180) / 200)
  return (
    <svg width={size} height={h} viewBox="0 0 200 180" fill="none" aria-hidden>
      <defs>
        <linearGradient id="lmB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F8BFF" /><stop offset="100%" stopColor="#0E55C7" />
        </linearGradient>
        <linearGradient id="lmG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7BE36A" /><stop offset="100%" stopColor="#1E9C46" />
        </linearGradient>
      </defs>
      <path d="M100 168C40 128 8 92 8 56 8 28 30 8 56 8 76 8 92 20 100 36 108 20 124 8 144 8 170 8 192 28 192 56 192 92 160 128 100 168Z" fill="url(#lmB)" />
      <path d="M100 36C108 20 124 8 144 8 170 8 192 28 192 56 192 92 160 128 100 168Z" fill="url(#lmG)" />
      <path d="M85 56H115V82H141V112H115V138H85V112H59V82H85Z" fill="#fff" />
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <span className="text-[19px] font-semibold tracking-tight text-white">Preventura</span>
    </div>
  )
}
