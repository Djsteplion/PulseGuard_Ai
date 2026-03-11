'use client';

import Image from "next/image";
import Link from 'next/link';
//import { usePathname } from "next/navigation";
import logo1 from '../../public/logo1.png';

const NavBar = () => {
  //const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Services', href: '/'}
  ]

  return (
    <div className="w-full bg-[linear-gradient(to_bottom,rgba(239,246,255,0.8),rgba(184,230,255,1))] flex flex-row justify-between items-center px-2 py-2 md:px-7 md:py-5">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={logo1}
          alt="PulseGuard Ai logo"
          className="w-4 h-6 lg:w-8 lg:h-12"
        />
        <h2 className="text-blue-500 font-bold  text-[12px] md:text-[21px] lg:text-3xl">PulseGuard Ai</h2>
      </div>

      <div className="hidden md:flex flex-row justify-between items-center md:gap-0.5 lg:gap-5">
          {navLinks.map((link) => {
              return (
                <Link 
                  key = {link.name}
                  href= {link.href}
                  className="text-[18px] font-medium text-black hover:text-white hover:bg-blue-700 px-3 py-2 rounded-sm transition-all"
                >
                {link.name}
                </Link>
              )
          })
          }
      </div>
      <div className="flex flex-row items-center  gap-2 md:gap-3">
        <Link href ='/authentication' className="text-white text-[10px] bg-blue-500 px-2.5 py-1.5 rounded-sm md:px-4 md:py-2 lg:text-[18px]  hover:bg-blue-700 hover:shadow-2xl active:scale-95 active:bg-blue-700 transition-all">Login</Link>
        <Link href ="/authentication" className="text-white text-[10px] bg-blue-500 px-2.5 py-1.5 rounded-sm md:px-4 md:py-2 lg:text-[18px]  hover:bg-blue-700 hover:shadow-2xl active:scale-95 active:bg-blue-700 transition-all">Sign Up</Link>
      </div>
    </div>
  )
}


export default NavBar
