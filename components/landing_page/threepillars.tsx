

import Image from 'next/image';
import icon1 from '../../public/Container.png'
import icon2 from '../../public/Container (1).png'
import icon3 from '../../public/Container (2).png'

const ThreePillars = () => {
  const pillars = [
    {
      iconType: icon1,
      title: "Global Health Trends",
      text: "Real-time intelligence on emerging healthcare signals and market opportunities."
    },
    {
      iconType: icon2,
      title: "AI Predictions",
      text: "Forecast healthcare trends with confidence scores and actionable insights."
    },
    {
      iconType: icon3,
      title: "Secure Data Vault",
      text: "Privacy-first data storage with consent controls and transparent audit logs."
    },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      {/* 1. The Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A]">
          Three Pillars of Intelligence
        </h2>
        <p className="text-slate-500 mt-5 text-base md:text-lg">
          Everything you need to make data-driven healthcare decisions.
        </p>
      </div>

      {/* 2. The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div 
            key={index} 
            className="
              bg-white p-8 rounded-3xl shadow-sm border border-slate-100/50
              hover:shadow-lg hover:border-slate-200 transition-all duration-300
            "
          >
            {/* The Animated Icon Component */}
            <div className="mb-6 ">
              <Image
              src={pillar.iconType}
              alt='icon'
              height={64}
              width={64}
              />
            </div>

            {/* Card Content */}
            <h3 className="text-xl font-bold mb-3 text-slate-800">
              {pillar.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreePillars;