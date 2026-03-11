import Image from 'next/image';
import vault from '../../public/Icon (4).png'

const PrivacyFirstByDesign = () => {
  return (
   <div className='w-full flex items-center justify-center pb-5 bg-slate-50'>
        <div className='bg-black flex max-w-fit  p-5 gap-2 flex-col items-center justify-center rounded-xl m-5 md:m-5 md:px-11 py-10'>
            <Image 
                src={vault}
                alt='privacy-first icon'
                width={45}
                height={45}
            />
            <h1 className='text-white font-bold text-2xl md:tracking-wider lg:tracking-wide'>Privacy-First By Design</h1>
            <p className='text-center text-white opacity-75'>
                Decentralized vault means consent-first storage, not blockchain hype.
                Your data is<br className='hidden md:block'/> encrypted, auditable, and always under control.
            </p>
        </div>
   </div>
  )
}


export default PrivacyFirstByDesign
