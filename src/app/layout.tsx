import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'DRYQ GmbH – Wasserschadensanierung, Leckortung & technische Trocknung',
  description: 'DRYQ unterstützt Eigentümer, Hausverwaltungen und Gewerbekunden bei Wasserschäden mit Leckortung, technischer Trocknung, Rückbau und strukturierter Dokumentation.',
  keywords: 'Wasserschadensanierung, Leckortung, technische Trocknung, Bautrocknung, Estrichdämmschichttrocknung, Wasserschaden Siegburg, Wasserschaden Bonn, Wasserschaden Köln',
  openGraph: {
    title: 'DRYQ GmbH – Wasserschadensanierung, Leckortung & technische Trocknung',
    description: 'Professionelle Wasserschadensanierung im Rheinland.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
