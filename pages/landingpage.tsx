import NavBar from '../components/landing_page/navbar';
import Hero from '../components/landing_page/hero'
import Pillars from '../components/landing_page/pillars';
import ThreePillars from '../components/landing_page/threepillars';
import PrivacyFirstByDesign from '../components/landing_page/privacyfirst';
import Footer from '../components/landing_page/footer';
import RevealOnScroll from '../components/RevealOnScroll'; //important for the slide in animation

const LandingPage = () => {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        
        {/* We usually don't wrap the Hero because it should be visible immediately */}
        <Hero/>

        {/* These sections will  trigger when 20-30% visible */}
        <RevealOnScroll threshold={0.2}>
          <Pillars/>
        </RevealOnScroll>

        <RevealOnScroll threshold={0.2}>
          <ThreePillars/>
        </RevealOnScroll>

        <RevealOnScroll threshold={0.3}>
          <PrivacyFirstByDesign/>
        </RevealOnScroll>

        <Footer/>
    </div>
  )
}


export default LandingPage
