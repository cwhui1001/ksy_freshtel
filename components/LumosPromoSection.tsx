'use client';

import Image from 'next/image';

export default function LumosPromoSection() {
  const whatsappNumber = '601127429188';
  const promoMessage = 'Hi FreshTel, I am a Winback customer interested in signing up now to get the complimentary LUMOS Projector offer!';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(promoMessage)}`;



  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-zinc-800/80 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Soft background glow circles to wows the user */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#EF4444]/10 rounded-full blur-[80px] pointer-events-none translate-x-1/4 translate-y-1/4" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side: Product Image Display with Glow and Hover Micro-animation */}
          <div className="w-full lg:w-[52%] flex justify-center relative group">
            {/* Visual background radial glow for the product */}
            <div className="absolute inset-0 bg-[#EF4444]/10 rounded-full filter blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative w-72 h-72 sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[480px] lg:h-[480px] xl:w-[500px] xl:h-[500px] transform group-hover:scale-[1.02] transition-all duration-500 ease-out">
              <Image
                src="/images/LUMOS.png"
                alt="LUMOS Projector Promo"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(239,68,68,0.25)]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Copy & CTA */}
          <div className="w-full lg:w-[48%] text-center lg:text-left flex flex-col justify-center">
            {/* Promo Badge */}
            <div className="inline-block self-center lg:self-start bg-red-500/10 border border-red-500/20 text-[#EF4444] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 lg:mb-10 shadow-sm">
              * FOR WINBACK CUSTOMER ONLY
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase mb-4 lg:mb-8 tracking-tight">
              SIGN UP NOW TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-[#EF4444]">
                GET LUMOS
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 lg:mb-10 max-w-md font-medium">
              Switch to FreshTel today and elevate your home cinema. Exclusive campaign for switching customers who sign up for our Winback plans — receive a complimentary premium <span className="text-white font-extrabold underline decoration-[#EF4444] decoration-2 underline-offset-4">LUMOS Home Projector</span>.
            </p>

            

            {/* WhatsApp CTA Button with Micro-animation */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white text-base md:text-lg font-black tracking-wider px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-[#25d366]/20 transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
              >
                {/* Clean WhatsApp SVG Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.111.938 11.999.938c-5.444 0-9.866 4.372-9.87 9.802 0 1.64.45 3.242 1.302 4.667l-.852 3.113 3.178-.828zM17.472 14.38c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                I WANT TO KNOW MORE
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
