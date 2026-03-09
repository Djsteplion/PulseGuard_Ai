import { Lock, ShieldCheck, Database } from 'lucide-react';

const Pillars = () => {

  const badges = [
    { icon: <Lock size={16} />, text: "End-to-End Encrypted" },
    { icon: <ShieldCheck size={16} />, text: "HIPAA Compliant" },
    { icon: <Database size={16} />, text: "Decentralized Storage" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6 py-12 lg:py-20">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm shadow-sm"
          >
            <span className="text-green-500">
              {badge.icon}
            </span>
            <span className="text-slate-600 text-xs md:text-sm font-medium whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        ))}
    </div>
  )
}

export default Pillars