'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ExsimPromoSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#FFF5F5] via-[#FFF9F9] to-white rounded-[32px] p-8 md:p-12 shadow-xl relative overflow-hidden border border-red-100/80 hover:shadow-2xl transition-all duration-500 group">
        
        {/* Soft background glow circles */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-400/5 rounded-full blur-[80px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-amber-400/5 rounded-full blur-[60px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side: Copy and CTA */}
          <div className="w-full md:w-[60%] text-center md:text-left flex flex-col justify-center">
            
            {/* Promo Badge */}
            <div className="inline-block self-center md:self-start bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-sm">
              ⚡ Limited Time Offer
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 leading-tight uppercase mb-4 tracking-tight">
              Sign up for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-pink-600 to-red-600">
                EXSIM Project Exclusive
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
              Upgrade your home connectivity with our special campaign for selected EXSIM D-Series properties. Enjoy <span className="font-extrabold text-[#EF4444]">RM0 deposit</span>, free high-performance Wi-Fi 6 hardware, and free installation. Plus, sign up for a 24-month contract to get <span className="font-extrabold text-[#EF4444]">3 months of free bill credit!</span>
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                href="/exsim/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#EF4444] to-red-600 hover:from-red-600 hover:to-red-700 text-white text-base font-black tracking-wider px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
              >
                VIEW EXSIM PLANS
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Side: Product Graphic (Router) */}
          <div className="w-full md:w-[40%] flex justify-center relative">
            <div className="absolute inset-0 bg-[#EF4444]/10 rounded-full filter blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 transform group-hover:scale-[1.05] group-hover:rotate-2 transition-all duration-500 ease-out">
              <Image
                src="/images/wifi-router.png"
                alt="Wi-Fi Router"
                fill
                className="object-contain drop-shadow-[0_15px_30px_rgba(239,68,68,0.15)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
