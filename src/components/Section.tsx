import { ReactNode } from 'react'
export default function Section({ id, eyebrow, title, intro, children, center = true, className = '' }: {
  id?: string; eyebrow?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode; center?: boolean; className?: string
}) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        {(eyebrow || title || intro) && (
          <div className={`mb-12 lg:mb-16 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
            {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
            {title && <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[44px]">{title}</h2>}
            {intro && <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-dim)]">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
