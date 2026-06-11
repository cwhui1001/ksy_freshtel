import Image from "next/image";
import Link from "next/link";
import PlansSection from "@/components/PlansSection";
import WinbackPromoSection from "@/components/WinbackPromoSection";
import TermsAndConditions from "@/components/TermsAndConditions";
import LumosPromoSection from "@/components/LumosPromoSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFFBFB] via-[#FFF3F3] to-[#FFE8E8] px-6 lg:px-40 pt-12 pb-32 md:pt-24 md:pb-48 flex flex-col md:flex-row items-center overflow-hidden uppercase font-sans">
        {/* Background Sketch Pattern - approximated by a simple SVG pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l20 20M80 10l-10 10M50 50l15 5M20 80l10-5' stroke='%23EF4444' stroke-width='1' fill='none'/%3E%3C/svg%3E")` }}></div>
        
        {/* Soft floating background light blobs */}
        <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-red-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/12 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex-1 z-10 text-center md:text-left">
          {/* Brand pill badge */}
          <div className="inline-flex items-center gap-2 bg-[#EF4444]/10 text-[#EF4444] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full animate-ping"></span>
            🚀 High-Speed Fiber Internet
          </div>

          <h1 className="text-[#1B365D] text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            NON STOP<br />
            STREAMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-[#1D4ED8] font-black">24/7</span>
          </h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-lg mb-10 normal-case font-medium mx-auto md:mx-0 leading-relaxed">
            Get a whole year of ultra-reliable, high-speed fiber internet with our 100Mbps subscription plan. Experience seamless buffering-free downloads and zero downtime.
          </p>
          <Link 
            href="#plans" 
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#3B82F6] via-blue-600 to-[#1D4ED8] text-white px-10 py-4.5 rounded-full font-black text-base md:text-lg tracking-wider transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.5)] transform hover:scale-[1.03] active:scale-95 hover:-translate-y-0.5 relative overflow-hidden group/cta"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover/cta:translate-x-[250%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">FIND OUT MORE</span>
            <svg className="w-5 h-5 relative z-10 transform group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="flex-1 mt-12 md:mt-0 relative flex justify-center items-center z-10 w-full max-w-lg md:max-w-none">

            {/* Main content image */}
            <div className="relative w-full aspect-[4/3] rounded-b-[3rem] md:rounded-b-[5rem] rounded-tl-[3rem] md:rounded-tl-[5rem] rounded-tr-[1.5rem] md:rounded-tr-[2rem] overflow-hidden shadow-2xl border-b-[8px] md:border-b-[12px] border-white transform hover:scale-[1.01] hover:rotate-[-0.5deg] transition-all duration-500 ease-out">
                <Image 
                  src="/images/hero-family.jpg"
                  alt="Family enjoying high-speed internet"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
            
            {/* Background text decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.05] select-none text-[8rem] md:text-[12rem] font-black pointer-events-none hidden sm:block">
              SHARE
            </div>
        </div>
      </section>

      {/* Feature Icons Section - Floating Half-way */}
      <section className="relative z-30">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-24 -mt-16 md:-mt-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between items-center gap-4 md:gap-6 border border-zinc-100">
             <FeatureItem icon={<SignalIcon />} title="Maximum Coverage" />
             <FeatureItem icon={<UsersIcon />} title="Stable Connection" />
             <FeatureItem icon={<MagicIcon />} title="Flexible" />
             <FeatureItem icon={<DollarIcon />} title="Affordable Price" />
             <FeatureItem icon={<TrophyIcon />} title="Best Service" />
          </div>
        </div>
      </section>

      {/* Winback Promo Section */}
      <WinbackPromoSection />

      {/* Plans Section */}
      <PlansSection />

      {/* Lumos Promo Section */}
      <LumosPromoSection />

      {/* Terms and Conditions Section */}
      <TermsAndConditions />

      
    </main>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
}

function FeatureItem({ icon, title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-[#EF4444] flex items-center justify-center text-[#EF4444] p-2">
        {icon}
      </div>
      <span className="font-bold text-zinc-800 text-xs sm:text-sm max-w-[100px] leading-tight uppercase font-sans">
        {title}
      </span>
    </div>
  );
}

// Minimal Icons
const SignalIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
const UsersIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MagicIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DollarIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const TrophyIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" /></svg>;

