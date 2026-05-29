'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#FFF4F4] pt-28 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l20 20M80 10l-10 10M50 50l15 5M20 80l10-5' stroke='%23EF4444' stroke-width='1' fill='none'/%3E%3C/svg%3E")` }}></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B365D] uppercase tracking-tight mb-6">
                About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Welcome to FreshTel Internet Malaysia — your trusted fibre internet solutions partner.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="space-y-6 md:space-y-8 mb-16 md:mb-20 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#EF4444]/10 rounded-full">
                <span className="text-[#EF4444] text-[10px] md:text-xs font-black uppercase tracking-widest">Our Mission</span>
            </div>
            <p className="text-lg md:text-xl text-zinc-800 font-medium leading-relaxed">
                We are an authorized distributor and sales partner providing high-speed fibre broadband solutions for homes, businesses, offices, retail shops, and commercial users across Malaysia. Our mission is simple: to make fast, stable, and affordable internet accessible with professional support and easy installation processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-[#1B365D] uppercase">Who We Are</h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-medium">
                FreshTel Internet Malaysia is built by a team with experience in telecommunications, customer service, and digital solutions. We work closely with customers to recommend suitable fibre internet packages based on their usage needs, coverage availability, and budget.
              </p>
              <div className="bg-[#F9F8F3] p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-sm mt-8">
                <h3 className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest mb-4 italic">Assisting you with:</h3>
                <ul className="space-y-3">
                    {[
                        "Setting up internet for a new home",
                        "Upgrading from slower broadband",
                        "Looking for better business connectivity",
                        "Expanding to multiple branches",
                        "Seeking reliable customer support"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-800 font-bold text-xs md:text-sm">
                            <span className="text-[#EF4444]">✓</span> {item}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-[#1B365D] uppercase">What We Provide</h2>
              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-black text-[#EF4444] uppercase">Residential Fibre Broadband</h3>
                <p className="text-sm md:text-base text-zinc-600 font-medium italic">Reliable high-speed internet for:</p>
                <div className="flex flex-wrap gap-2">
                    {["Streaming", "Gaming", "Work from home", "Smart home devices", "Online learning"].map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border-2 border-zinc-100 text-zinc-600 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-tightest">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <p className="text-sm md:text-base text-zinc-600 font-medium">We help customers with:</p>
                <ul className="grid grid-cols-1 gap-2">
                    {["Fibre package consultation", "Coverage checking", "Registration assistance", "Installation appointment coordination"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-zinc-800 font-bold text-[10px] md:text-xs uppercase tracking-tightest">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></span> {item}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#1B365D] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 text-white mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 hidden sm:block">
                <svg className="w-32 md:w-48 h-32 md:h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 md:mb-12 relative z-10">Why Customers Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative z-10">
                {[
                    "Fast response and consultation",
                    "Friendly and professional support",
                    "Transparent registration process",
                    "Reliable after-sales assistance",
                    "Focus on customer satisfaction",
                    "Assistance throughout the application process"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-black text-xs">0{i+1}</div>
                        <span className="font-bold text-lg">{item}</span>
                    </div>
                ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="space-y-6 mb-20 text-center">
            <h2 className="text-3xl font-black text-[#1B365D] uppercase">Our Commitment</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
                We believe internet connectivity is essential in today’s world. Our team is committed to helping customers stay connected with stable and efficient broadband solutions while providing a smooth and hassle-free experience.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#EF4444] rounded-[2rem] p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-black uppercase mb-4">Contact Us</h2>
            <p className="text-lg font-medium mb-8 max-w-xl mx-auto opacity-90">
                Have questions or want to check fibre coverage in your area? Contact our team today for assistance and package recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <a href="https://wa.me/601135503022" target="_blank" className="px-10 py-5 bg-[#DCC7AA] text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
                    WhatsApp Us
                </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
