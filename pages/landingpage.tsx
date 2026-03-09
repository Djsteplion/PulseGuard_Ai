import NavBar from '../components/landing_page/navbar';
import Hero from '../components/landing_page/hero'
import Pillars from '../components/landing_page/pillars';
import ThreePillars from '../components/landing_page/threepillars';
import PrivacyFirstByDesign from '../components/landing_page/privacyfirst';

const LandingPage = () => {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <Hero/>
        <Pillars/>
        <ThreePillars/>
        <PrivacyFirstByDesign/>
    </div>
  )
}

export default LandingPage