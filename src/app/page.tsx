import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import CorePanel from '@/components/CorePanel'
import AppShowcase from '@/components/AppShowcase'
import ScoreSection from '@/components/ScoreSection'
import TopImpactSection from '@/components/TopImpactSection'
import RetestSection from '@/components/RetestSection'
import ComparisonSection from '@/components/ComparisonSection'
import CompaniesSection from '@/components/CompaniesSection'
import TrustPillars from '@/components/TrustPillars'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <CorePanel />
        <AppShowcase />
        <ScoreSection />
        <TopImpactSection />
        <RetestSection />
        <ComparisonSection />
        <CompaniesSection />
        <TrustPillars />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
