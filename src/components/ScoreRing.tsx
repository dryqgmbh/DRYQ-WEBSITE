export default function ScoreRing({
  size = 220, value = 76, label = 'Health Score', delta, thickness = 13,
}: { size?: number; value?: number; label?: string; delta?: string; thickness?: number }) {
  const r = (size - thickness) / 2
  const c = 2 * Math.PI * r
  const off = c - (Math.min(100, Math.max(0, value)) / 100) * c
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7BE36A" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#1F8BFF" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.07)" strokeWidth={thickness} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke="url(#sg)" strokeWidth={thickness} strokeLinecap="round" fill="none"
          strokeDasharray={c} strokeDashoffset={off} transform={`rotate(-90 ${size/2} ${size/2})`} filter="url(#glow)"
          style={{ transition: 'stroke-dashoffset 1.1s ease' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[9px] uppercase tracking-[0.22em] text-white/45">{label}</div>
        <div className="mt-0.5 flex items-baseline gap-1">
          <span className="text-[44px] font-semibold tabular-nums text-white leading-none">{value}</span>
          <span className="text-sm text-white/40">/100</span>
        </div>
        {delta && (
          <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-[rgba(123,227,106,0.28)] bg-[rgba(123,227,106,0.10)] px-2.5 py-0.5 text-[10px] text-[#9be6a1]">
            <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden><path d="M1.5 5.5 L4.5 2.5 L7.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {delta}
          </div>
        )}
      </div>
    </div>
  )
}
