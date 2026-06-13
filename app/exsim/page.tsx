'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ExsimPlan {
  id: string;
  speed: string;
  price: string;
  isBestSeller?: boolean;
  description: string;
}

const EXSIM_PLANS: ExsimPlan[] = [
  {
    id: 'ex-100',
    speed: '100Mbps',
    price: '74.25',
    description: 'Perfect for light browsing, social media, and HD streaming on up to 10 devices.'
  },
  {
    id: 'ex-300',
    speed: '300Mbps',
    price: '96.75',
    isBestSeller: true,
    description: 'Our top choice! Recommended for families, smart home devices, gaming, and 4K streaming.'
  },
  {
    id: 'ex-500',
    speed: '500Mbps',
    price: '111.75',
    description: 'Ultimate performance for heavy downloaders, content creators, and multi-device households.'
  }
];

export default function ExsimPage() {
  const [contractPeriod, setContractPeriod] = useState<12 | 24>(24);
  const whatsappNumber = '601127429188';

  const getWaUrl = (plan: ExsimPlan) => {
    const text = `Hi FreshTel, I am interested in the D-Series Exclusive Offer: ${plan.speed} Plan at RM${plan.price}/mth with a ${contractPeriod} Months Contract${contractPeriod === 24 ? ' (Free 3 Months Bill)' : ''}!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF5F5] to-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-5 rounded-full shadow-lg mb-6 animate-bounce-slow">
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest font-sans">
              Exclusive Offer - Selected Locations Only
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none mb-6 uppercase">
            FreshTel<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-pink-600 to-red-600">
              EXSIM Project Exclusive
            </span>
          </h1>
          
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl font-medium max-w-4xl mx-auto mb-10 normal-case leading-relaxed">
            Get ultra-fast fiber internet with our premium switching campaign. Enjoy zero deposit for locals and complimentary high-performance Wi-Fi hardware.
          </p>

          {/* Toggle switcher */}
          <div className="inline-flex bg-zinc-100 p-1.5 rounded-2xl shadow-inner border border-zinc-200">
            <button
              onClick={() => setContractPeriod(24)}
              className={`px-5 sm:px-8 py-3 rounded-xl font-black text-sm sm:text-base tracking-wide transition-all ${
                contractPeriod === 24
                  ? 'bg-[#EF4444] text-white shadow-md'
                  : 'text-zinc-600 hover:text-zinc-800'
              }`}
            >
              24 Months (Free 3 Mths Bill)
            </button>
            <button
              onClick={() => setContractPeriod(12)}
              className={`px-5 sm:px-8 py-3 rounded-xl font-black text-sm sm:text-base tracking-wide transition-all ${
                contractPeriod === 12
                  ? 'bg-[#EF4444] text-white shadow-md'
                  : 'text-zinc-600 hover:text-zinc-800'
              }`}
            >
              12 Months Contract
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {EXSIM_PLANS.map((plan) => {
            const waUrl = getWaUrl(plan);

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full border ${
                  plan.isBestSeller
                    ? 'bg-white border-[#EF4444] shadow-xl md:scale-[1.03] z-10'
                    : 'bg-[#FCFAF2] border-zinc-200 shadow-md'
                }`}
              >
                {plan.isBestSeller && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EF4444] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-md">
                    BEST SELLER
                  </span>
                )}

                <div className="flex flex-col h-full">
                  {/* Plan Speed */}
                  <div className="mb-6">
                    <span className="text-zinc-500 text-xs font-black uppercase tracking-widest block mb-1">
                      D Series Plan
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-none">
                      {plan.speed}
                    </h2>
                  </div>

                  {/* Plan Price */}
                  <div className="bg-white/80 border border-zinc-100 rounded-2xl p-5 mb-6 shadow-inner flex flex-col items-center justify-center gap-1 min-h-[120px]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#EF4444]">
                        RM{plan.price}
                      </span>
                      <span className="text-xs text-zinc-500 font-bold uppercase">/ mth</span>
                    </div>

                    {contractPeriod === 24 ? (
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-[#EF4444] text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg">
                        🎁 Free 3 Months Bill!
                      </div>
                    ) : (
                      <div className="mt-2 text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider">
                        12 Months Contract Duration
                      </div>
                    )}
                  </div>

                  {/* Plan Description */}
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block py-4 rounded-xl text-center font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-300 transform active:scale-95 ${
                        plan.isBestSeller
                          ? 'bg-[#EF4444] hover:bg-red-600 text-white shadow-lg hover:shadow-red-200'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-md'
                      }`}
                    >
                      GET IT NOW
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature List & Mesh Add-on Combined Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {/* Checklist of campaign highlights */}
          <div className="lg:col-span-7 bg-[#FCFAF2] rounded-3xl p-8 md:p-10 border border-zinc-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-800 uppercase tracking-tight mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#EF4444] rounded-full"></span>
                Campaign Highlights
              </h3>
              
              <ul className="space-y-4">
                {[
                  { text: 'Same day / Next day installation available!!', bold: true },
                  { text: 'Free high-performance router provided', bold: true },
                  { text: 'No deposit required for local Malaysian applicants', bold: true, accent: true },
                  { text: 'Free standard installation included', bold: true },
                  { text: 'Foreigner deposit RM500 only', bold: true },
                  { text: 'Required documents: NRIC/Passport & S&P/VP Letter or Letter of Authorization', bold: true }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm sm:text-base ${item.bold ? 'font-black text-zinc-800' : 'text-zinc-600'} ${item.accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600' : ''}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#EF4444] text-white text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                ✓ Verified
              </span>
              <p className="text-xs sm:text-sm font-black text-[#EF4444] uppercase tracking-wide">
                Special exclusive rates for selected Dseries locations only!
              </p>
            </div>
          </div>

          {/* Premium Mesh Add-On */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#EF4444]/20 to-transparent pointer-events-none rounded-full blur-2xl"></div>

            <div className="flex justify-between items-start z-10 mb-6">
              <div>
                <span className="text-[10px] sm:text-xs font-black uppercase text-[#EF4444] tracking-widest block mb-1">
                  Premium Hardware Add-on
                </span>
                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                  High-Performance Mesh
                </h4>
              </div>
              <span className="bg-[#EF4444] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                Wi-Fi 6 CERTIFIED
              </span>
            </div>

            <div className="relative w-full h-40 my-4 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-zinc-900 rounded-2xl filter blur-sm transform scale-95 opacity-50 group-hover:scale-100 transition-all duration-500"></div>
              
              <div className="relative w-36 h-36 transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 ease-out">
                <Image
                  src="/images/wifi-router.png"
                  alt="TP-Link Wifi 6 Router"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="z-10 mt-6 pt-4 border-t border-zinc-800">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Special Add-On Price
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    +RM20
                  </span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">/ Month</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed font-medium">
                Expand coverage across multiple rooms. Enjoy stable high-speed roaming on Wi-Fi 6 certified hardware.
              </p>
            </div>
          </div>
        </div>

        {/* Inline Terms & T&C disclaimer */}
        <div className="text-center text-[10px] sm:text-xs text-zinc-400 italic max-w-2xl mx-auto">
          * Terms & conditions apply. For selected EXSIM Dseries properties only. Foreigners require a deposit of RM500. Standard installation is subject to management approval. All rates are subject to 6% SST.
        </div>

      </div>
    </main>
  );
}
