'use client';

import Image from 'next/image';

interface PromoPlan {
  id: string;
  speed: string;
  promoPrice: string;
  regularPrice: string;
  badge?: string;
  highlight?: boolean;
  message: string;
}

const PROMO_PLANS: PromoPlan[] = [
  {
    id: 'winback-300',
    speed: '300Mbps',
    promoPrice: '44.50',
    regularPrice: '89.00',
    highlight: false,
    message: 'Hi FreshTel, I am interested in the Winback Exclusive 300Mbps Plan at RM44.50/mth for the first 12 months!',
  },
  {
    id: 'winback-500',
    speed: '500Mbps',
    promoPrice: '54.50',
    regularPrice: '109.00',
    badge: 'Most Popular',
    highlight: true,
    message: 'Hi FreshTel, I am interested in the Winback Exclusive 500Mbps Plan at RM54.50/mth for the first 12 months!',
  },
  {
    id: 'winback-1g',
    speed: '1Gbps',
    promoPrice: '79.50',
    regularPrice: '159.00',
    highlight: false,
    message: 'Hi FreshTel, I am interested in the Winback Exclusive 1Gbps Plan at RM79.50/mth for the first 12 months!',
  },
];

export default function WinbackPromoSection() {
  const whatsappNumber = '601127429188';

  return (
    <section id="winback" className="py-16 md:py-24 bg-gradient-to-b from-[#FFF5F5] to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Visual Brand Header Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#D946EF] via-[#EC4899] to-[#EF4444] text-white py-3 px-6 md:px-8 rounded-full shadow-xl animate-bounce-slow">
            <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
            <h2 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-wider font-sans">
              FreshTel Winback Exclusive Offer
            </h2>
          </div>
          
          <div className="relative h-12 w-36 md:h-16 md:w-48 opacity-90">
            <Image
              src="/images/logo.png"
              alt="FreshTel Internet Logo"
              fill
              style={{ objectFit: 'contain', objectPosition: 'right' }}
            />
          </div>
        </div>

        {/* Dynamic Title and Promo Duration info */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none mb-4 uppercase">
            Double the Fun,<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-[#EC4899]">
              Half the Price!
            </span>
          </h3>
          <p className="text-zinc-600 text-base md:text-xl font-medium">
            Get <span className="text-[#EF4444] font-bold">50% OFF</span> for the first 12 months. Enjoy ultimate high-speed performance on our 36-month loyalty winback plans.
          </p>
          <div className="inline-block mt-4 bg-red-50 border border-red-100 text-[#EF4444] text-xs md:text-sm font-black px-4 py-2 rounded-xl">
            💥 1st 12 Months 50% OFF, followed by 24 Months Original Price
          </div>
        </div>

        {/* Promo Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {PROMO_PLANS.map((plan) => {
            const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.message)}`;
            
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full border ${
                  plan.highlight
                    ? 'bg-white border-[#EF4444] shadow-xl md:scale-[1.03] z-10'
                    : 'bg-[#FCFAF2] border-zinc-200 shadow-md'
                }`}
              >
                {/* Highlight ribbon or tag */}
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EF4444] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="flex flex-col h-full">
                  {/* Card Title & Speed */}
                  <div className="mb-6">
                    <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">
                      Winback Plan
                    </span>
                    <h4 className="text-4xl sm:text-5xl font-black text-zinc-900 mt-1">
                      {plan.speed}
                    </h4>
                    <p className="text-zinc-500 text-sm mt-1">36 Months Loyalty Contract</p>
                  </div>

                  {/* Pricing Breakdown Card */}
                  <div className="bg-white/80 backdrop-blur border border-zinc-100 rounded-2xl p-5 mb-8 shadow-inner flex flex-col gap-4">
                    {/* First Tier (Promo) */}
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                      <div>
                        <span className="text-xs font-black uppercase text-[#EF4444] tracking-wider block">
                          Months 1 - 12
                        </span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase">
                          50% Discount Applied
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black text-[#EF4444]">
                          RM{plan.promoPrice}
                        </span>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">
                          / Month
                        </span>
                      </div>
                    </div>

                    {/* Second Tier (Standard) */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-xs font-black uppercase text-zinc-700 tracking-wider block">
                          Months 13 - 36
                        </span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase">
                          Standard Plan Price
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-black text-zinc-800">
                          RM{plan.regularPrice}
                        </span>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">
                          / Month
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block py-4 rounded-2xl text-center font-black text-base md:text-lg tracking-wider transition-all duration-300 transform active:scale-95 ${
                        plan.highlight
                          ? 'bg-[#EF4444] hover:bg-red-600 text-white shadow-lg hover:shadow-red-200'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-md'
                      }`}
                    >
                      GET IT NOW
                    </a>
                    <p className="text-[10px] text-zinc-400 text-center mt-3 leading-tight italic">
                      *Subject to 6% SST. Terms and Conditions Apply.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature List & Mesh Add-on Combined Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Why choose Winback? Checklist */}
          <div className="lg:col-span-7 bg-[#FCFAF2] rounded-3xl p-8 md:p-10 border border-zinc-200 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black text-zinc-800 uppercase tracking-tight mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#EF4444] rounded-full"></span>
                Why FreshTel Winback Exclusive?
              </h4>
              
              <ul className="space-y-4 md:space-y-5">
                {[
                  { text: 'Same day / Next day installation available!!', bold: true },
                  { text: 'Best Value Plan available in the market!!', bold: true, accent: true },
                  { text: 'Foreigner deposit RM500 only', bold: false },
                  { text: 'Target for all Brownfield (Forest City / R&F)!!', bold: true },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm md:text-base ${item.bold ? 'font-black text-zinc-800' : 'text-zinc-600'} ${item.accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600' : ''}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contract Note */}
            <div className="mt-8 pt-6 border-t border-zinc-200/60 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#EF4444] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                ✓ Available
              </span>
              <p className="text-xs md:text-sm font-black text-[#EF4444] uppercase tracking-wide">
                12 & 24 Months Contract Options Also Available!
              </p>
            </div>
          </div>

          {/* Premium Mesh Router Add-On */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#EF4444]/20 to-transparent pointer-events-none rounded-full blur-2xl"></div>

            <div className="flex justify-between items-start z-10 mb-6">
              <div>
                <span className="text-[10px] md:text-xs font-black uppercase text-[#EF4444] tracking-widest block mb-1">
                  Premium Hardware Add-on
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  High-Performance Mesh
                </h4>
              </div>
              <span className="bg-[#EF4444] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                Wi-Fi 6 CERTIFIED
              </span>
            </div>

            {/* Centered Router Image display with floating elements */}
            <div className="relative w-full h-44 my-4 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-zinc-900 rounded-2xl filter blur-sm transform scale-95 opacity-50 group-hover:scale-100 transition-all duration-500"></div>
              
              <div className="relative w-44 h-44 transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 ease-out">
                <Image
                  src="/images/wifi-router.png"
                  alt="TP-Link Wifi 6 Router"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Price block and detail */}
            <div className="z-10 mt-6 pt-4 border-t border-zinc-800">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Special Add-On Price
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    +RM20
                  </span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">
                    / Month
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed font-medium">
                Enhance your signal coverage across all rooms. Seamless connections with certified smart roaming Wi-Fi 6 technology.
              </p>
            </div>
          </div>
        </div>

        {/* Simple inline terms notification */}
        <div className="mt-8 text-center text-[10px] md:text-xs text-zinc-400 italic">
          * Terms & conditions apply. For brownfield residential deployments only. Foreigners require a deposit of RM500.
        </div>
      </div>
    </section>
  );
}
