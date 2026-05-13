import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Preventura — Understand your health before problems become visible',
  description:
    'Preventura is a digital prevention platform combining at-home biomarker testing, certified lab analysis and a premium app experience. Turn your blood values into a clear Health Score, prioritized insights and a personal retest plan.',
  keywords: 'biomarker testing, at-home blood test, preventive health, health score, ApoB, hs-CRP, HbA1c, Vitamin D, longevity',
  openGraph: {
    title: 'Preventura — Digital prevention platform',
    description: 'At-home biomarker testing, lab-based analysis and app-based insights. Your biomarkers. Your score. Your next best action.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
