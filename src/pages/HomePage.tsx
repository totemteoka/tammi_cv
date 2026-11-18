import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedJobs from '../components/FeaturedJobs'
import ProCompanies from '../components/ProCompanies'
import JobMarket from '../components/JobMarket'
import ActiveJobs from '../components/ActiveJobs'
import TopCategories from '../components/TopCategories'
import PersonalBrand from '../components/PersonalBrand'
import Tools from '../components/Tools'
import Awards from '../components/Awards'
import AppPromo from '../components/AppPromo'
import Stats from '../components/Stats'
import Ecosystem from '../components/Ecosystem'
import Press from '../components/Press'
import Footer from '../components/Footer'
import FloatingBar from '../components/FloatingBar'
import type { AuthMode } from '../components/AuthModal'

type Props = {
  onOpenAuth: (mode: AuthMode) => void
}

export default function HomePage({ onOpenAuth }: Props) {
  return (
    <>
      <Header onOpenAuth={onOpenAuth} />
      <main>
        <Hero />
        <FeaturedJobs />
        <ProCompanies />
        <JobMarket />
        <ActiveJobs />
        <TopCategories />
        <PersonalBrand />
        <Tools />
        <Awards />
        <AppPromo />
        <Stats />
        <Ecosystem />
        <Press />
      </main>
      <Footer />
      <FloatingBar onOpenAuth={onOpenAuth} />
    </>
  )
}
