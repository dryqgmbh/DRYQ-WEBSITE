import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import EmergencyCTA from '@/components/EmergencyCTA'
import Services from '@/components/Services'
import Process from '@/components/Process'
import EquipmentSection from '@/components/EquipmentSection'
import InsuranceSection from '@/components/InsuranceSection'
import TargetGroups from '@/components/TargetGroups'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import TrustSection from '@/components/TrustSection'
import RegionalSection from '@/components/RegionalSection'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <EmergencyCTA />
        <Services />
        <Process />
        <EquipmentSection />
        <InsuranceSection />
        <TargetGroups />
        <BeforeAfterSection />
        <TrustSection />
        <RegionalSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileBar />
      <ScrollReveal />
    </>
  )
}
