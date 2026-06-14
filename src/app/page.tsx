import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AnatomySection from '@/components/sections/AnatomySection'
import RegenerationSection from '@/components/sections/RegenerationSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import PurchaseSection from '@/components/sections/PurchaseSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AnatomySection />
      <RegenerationSection />
      <BenefitsSection />
      <PurchaseSection />
      <Footer />
    </main>
  )
}
