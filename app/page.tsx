import Image from "next/image";
import Link from "next/link";
import PlansSection from "@/components/PlansSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#FFF4F4] px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center overflow-hidden uppercase font-sans">
        <div className="flex-1 z-10">
          <h1 className="text-[#1B365D] text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
            NON STOP<br />
            STREAMING <span className="text-[#3B82F6]">24/7</span>
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl max-w-lg mb-8 normal-case font-medium">
            Get a whole year of reliable, high-speed internet with our 100Mbps plan.
          </p>
          <Link 
            href="#plans" 
            className="inline-block bg-[#3B82F6] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            FIND OUT MORE
          </Link>
        </div>
        
        <div className="flex-1 mt-12 md:mt-0 relative flex justify-center items-center">
            {/* Main content image placeholder as seen in UI */}
            <div className="relative w-full aspect-[4/3] max-w-2xl bg-[#D1D5DB] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold italic normal-case text-center px-4">
                   Hero Image (Happy family using devices)
                </div>
            </div>
            
            {/* Watermark/Background text like in sample */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
              <span className="text-[20rem] font-black">SHAKE</span>
            </div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="bg-white py-12 px-4 md:px-12 -mt-10 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 border bg-white rounded-3xl p-8 shadow-sm">
           <FeatureItem icon={<SignalIcon />} title="Maximum Coverage" />
           <FeatureItem icon={<UsersIcon />} title="Stable Connection" />
           <FeatureItem icon={<MagicIcon />} title="Flexible" />
           <FeatureItem icon={<DollarIcon />} title="Affordable Price" />
           <FeatureItem icon={<TrophyIcon />} title="Best Service" />
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection />

      {/* AI Assistant Button (Floating) */}
      <div className="fixed bottom-0 right-12 mb-0 bg-[#6B7280] text-white px-6 py-2 rounded-t-xl text-sm shadow-xl cursor-default">
        Have a question? Ask our latest AI assistant.
      </div>
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

