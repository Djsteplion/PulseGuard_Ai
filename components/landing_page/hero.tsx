import Link from 'next/link';
import Image from 'next/image';
// Tip: If these paths show red lines, try: import arc from '/Hero bg.png'
import arc from '../../public/Hero bg.png';
import heroIcon from '../../public/Frame 2.png';
import border from '../../public/Brand section.png';

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden animate-slow-gradient bg-[linear-gradient(-45deg,rgba(239,246,255,0.8),rgba(184,230,255,1),rgba(219,234,254,0.9))] bg-size-[400%_400%]'>
      
      {/* Increased z-index to ensure text is always on top */}
      <div className="relative z-20 flex flex-col justify-center items-center px-6 md:px-5">
          <h1 className='text-2xl text-center text-blue-600 font-bold leading-6 mt-8 md:mt-16 md:text-3xl md:leading-8 lg:leading-12 lg:text-5xl '>
            HealthCare Intelligence <br/> Powered By Ai
          </h1>
          <p className="text-[10px] text-black font-semibold opacity-70 text-center mt-2 md:mt-3 md:text-[20px] md:leading-7 lg:text-2xl">
            Discover emerging health trends, forecast market opportunities, and <br className="hidden md:block"/>
            manage patient data with privacy-first security.
          </p>
          
          {/* Enhanced Button: Added active:scale for mobile feedback */}
          <Link href='/' 
            className='relative z-30 px-4 rounded-sm py-2 mt-3 text-[10px] text-white font-semibold bg-blue-500 transition-all duration-200 
            hover:bg-blue-700 hover:shadow-xl 
            active:scale-95 active:bg-blue-800
            md:text-2xl md:mt-7 md:px-6 md:py-3 md:rounded-lg'
          >
            Get Started
          </Link>
      </div>

      <div className='flex flex-col justify-center items-center -z-10 -mt-13 md:-mt-20 lg:-mt-50'>
        <div className='relative w-full'>
            <Image
              src={arc}
              alt='Hero Section Image'
              className="w-full h-auto"
              priority 
            />
        </div>
        <div className='absolute pt-36 md:pt-60 lg:pt-115'>
            <Image
              src={heroIcon}
              alt='Hero Icon'
              className="w-auto h-auto lg:min-w-screen"
            />
        </div>
      </div>

      <div className='flex justify-center items-center'> 
        <Image
          src={border}
          alt='Hero Border'
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;