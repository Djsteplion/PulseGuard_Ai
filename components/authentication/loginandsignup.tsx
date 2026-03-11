"use client";
import { useState } from 'react'; 
// Added Mail and User icons
import { Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import logo1 from '../../public/logo1.png';
import logo2b from '../../public/PulseGuard AI.png';

const LoginAndSignup = () => {
  const [fullname, setFullName] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <section className='flex flex-col items-center justify-center pt-[5%]'>
      <div className='mb-3 flex flex-row items-center justify-center gap-1 mt-10'>
        <Image src={logo1} alt='PulseGuard Ai logo' height={20} width={20} />
        <Image src={logo2b} alt='PulseGuard Ai logo' height={20} width={190} />
      </div>

      <div className='w-80 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4 md:w-100'>
        {/* Toggle Header */}
        <div className='flex items-center justify-center bg-gray-100 p-1 rounded-lg'>
          <div 
            className={`text-sm w-full flex items-center justify-center py-2 rounded-lg cursor-pointer transition-all ${isLoginForm ? 'bg-white text-black font-semibold shadow-sm' : 'text-gray-500'}`}
            onClick={() => setIsLoginForm(true)}
          >
            Login
          </div>
          <div 
            className={`text-sm w-full flex items-center justify-center py-2 rounded-lg cursor-pointer transition-all ${!isLoginForm ? 'bg-white text-black font-semibold shadow-sm' : 'text-gray-500'}`}
            onClick={() => setIsLoginForm(false)}
          >
            Sign Up
          </div>
        </div>

        <form action="#" className='space-y-4'>
          {!isLoginForm && (
            <div className="flex flex-col gap-1">
              <label className="text-black font-semibold text-[12px] opacity-85">Full Name</label>
              <div className="relative flex items-center">
                <User className="absolute left-3 text-gray-400" size={18} />
                <input 
                  type="text" placeholder="Stephen Olayiwola" value={fullname} 
                  onChange={e => setFullName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black transition-all"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-black font-semibold text-[12px] opacity-85">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-gray-400" size={18} />
              <input 
                type="email" placeholder="name123@gmail.com" value={email} 
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black font-semibold text-[12px] opacity-85">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-gray-400" size={18} />
              <input 
                type="password" placeholder="********" value={password} 
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black transition-all"
              />
            </div>
          </div>

          {!isLoginForm && (
            <div className="flex flex-col gap-1">
              <label className="text-black font-semibold text-[12px] opacity-85">Confirm Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 text-gray-400" size={18} />
                <input 
                  type="password" placeholder="********" value={cpassword} 
                  onChange={e => setCpassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black transition-all"
                />
              </div>
            </div>
          )}

          <button className="w-full bg-blue-600 text-white py-2.5 mt-2 rounded-lg font-medium hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md">
            {isLoginForm ? 'Login' : 'Create Account'}
          </button>

          {/* Bottom Footer */}
          <div className="pt-4 border-t border-gray-100 flex flex-row items-center justify-center gap-2">
            <Lock className="text-green-500" size={14}/> 
            <span className='text-[10px] text-gray-500 font-medium text-center'>
              Encrypted authentication. Privacy-first by design
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginAndSignup;