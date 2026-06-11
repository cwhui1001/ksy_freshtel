'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const CONTRACT_OPTIONS = [
  { id: 'no-contract', label: 'No Contract' },
  { id: '12-months', label: '12 Months' },
  { id: '24-months', label: '24 Months' },
];

interface PlanFeature {
  text: string;
  isBold?: boolean;
  isComplimentary?: boolean;
  icon?: string;
}

interface Plan {
  id: string;
  title: string;
  speed: string;
  price: string;
  description: string;
  features: PlanFeature[];
  addons?: PlanFeature[];
  highlight?: boolean;
  badge?: string;
  selectedLocationOnly?: boolean;
  locationText?: string;
}

const PLANS: Record<string, Plan[]> = {
  '24-months': [
    {
      id: 'p100',
      title: 'Premium Connection',
      speed: '100Mbps',
      price: '69',
      description: 'Recommended for 10 devices.',
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation for High Rise property', isBold: true },
      ],
    },
    {
      id: 'p300',
      title: 'Premium Connection',
      speed: '300Mbps',
      price: '99',
      description: 'Recommended for 20 devices.',
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM20 per month.' },
      ],
    },
    {
      id: 'p300-promo',
      title: 'Premium Connection',
      speed: '300Mbps',
      price: '99',
      description: 'Recommended for 20 devices.',
      highlight: true,
      badge: '24 Months + 6 Months Contract',
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
        { text: 'WIFI 6 Mesh Router x1', isBold: true, isComplimentary: true },
        { text: '24 Months + 6 Months Contract', isBold: true },
      ],
    },
    {
      id: 'p500',
      title: 'Premium Connection',
      speed: '500Mbps',
      price: '129',
      description: 'Excellent for Streaming, Online Gaming, & Households with Multiple Heavy Users.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM20 per month.' },
      ],
    },
    {
      id: 'p1g',
      title: 'Premium Connection',
      speed: '1Gbps',
      price: '179',
      description: 'Perfect for High-Bandwidth Applications & Hosting.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
    {
      id: 'p168g',
      title: 'Premium Connection',
      speed: '1.68Gbps',
      price: '269',
      description: 'Ideal for Large Families & Seamless 4K Streaming on 10+ Devices Simultaneously.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
    {
      id: 'p2g',
      title: 'Premium Connection',
      speed: '2Gbps',
      price: '359',
      description: 'Perfect for Large Households with Multiple Devices & Ultra-High-Definition Streaming.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
  ],
  'no-contract': [
    {
      id: 'nc-p100',
      title: 'Premium Connection',
      speed: '100Mbps',
      price: '99',
      description: 'Recommended for 10 devices.',
      selectedLocationOnly: true,
      locationText: '**Highrise only',
      features: [
        { text: 'Wifi 6 router', isBold: true },
      ],
    },
  ],
  '12-months': [
    {
      id: '12-p100',
      title: 'Premium Connection',
      speed: '100Mbps',
      price: '79',
      description: 'Recommended for 10 devices.',
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation for High Rise property', isBold: true },
      ],
    },
    {
      id: '12-p300',
      title: 'Premium Connection',
      speed: '300Mbps',
      price: '119',
      description: 'Recommended for 20 devices.',
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM20 per month.' },
      ],
    },
    {
      id: '12-p500',
      title: 'Premium Connection',
      speed: '500Mbps',
      price: '149',
      description: 'Excellent for Streaming, Online Gaming, & Households with Multiple Heavy Users.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 6 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM20 per month.' },
      ],
    },
    {
      id: '12-p1g',
      title: 'Premium Connection',
      speed: '1Gbps',
      price: '199',
      description: 'Perfect for High-Bandwidth Applications & Hosting.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
    {
      id: '12-p168g',
      title: 'Premium Connection',
      speed: '1.68Gbps',
      price: '289',
      description: 'Ideal for Large Families & Seamless 4K Streaming on 10+ Devices Simultaneously.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
    {
      id: '12-p2g',
      title: 'Premium Connection',
      speed: '2Gbps',
      price: '379',
      description: 'Perfect for Large Households with Multiple Devices & Ultra-High-Definition Streaming.',
      selectedLocationOnly: true,
      features: [
        { text: 'Wifi 7 router', isBold: true },
        { text: 'Free Standard Installation', isBold: true },
      ],
      addons: [
        { text: 'An additional mesh router is available at RM30 per month.' },
      ],
    },
  ],
};

export default function PlansSection() {
  const [selectedContract, setSelectedContract] = useState('24-months');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Reset carousel when contract changes
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, selectedContract]);

  const currentPlans = PLANS[selectedContract] || [];

  return (
    <section id="plans" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 md:mb-8 font-sans px-4">Get Your Plan Now</h2>
          
          {/* Contract Switcher */}
          <div className="inline-flex flex-wrap justify-center bg-[#F1F1F1] p-1.5 rounded-2xl">
            {CONTRACT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedContract(opt.id)}
                className={`px-4 sm:px-8 py-2 md:py-3 rounded-xl font-bold text-base md:text-lg transition-all ${
                  selectedContract === opt.id 
                    ? 'bg-[#EF4444] text-white shadow-md' 
                    : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* mobile swipe hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-2 animate-pulse">
          <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-tightest text-zinc-500">Swipe to view more plans</span>
          <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {currentPlans.map((plan) => (
                <div key={plan.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3 sm:px-6 py-12 pb-0 md:py-22 md:pb-0">
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentPlans.length > 3 && (
            <>
              <button 
                onClick={scrollPrev}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#EF4444] hover:bg-[#EF4444] hover:text-white transition-all z-30 opacity-0 group-hover:opacity-100 disabled:opacity-0"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollNext}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#EF4444] hover:bg-[#EF4444] hover:text-white transition-all z-30 opacity-0 group-hover:opacity-100 disabled:opacity-0"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {currentPlans.length === 0 && (
            <div className="py-20 text-center text-zinc-400 italic">
              Plans for this contract duration will be available soon.
            </div>
          )}
        </div>

        {/* mobile dots indicator */}
        <div className="flex md:hidden justify-center gap-1.5 mt-2">
          {currentPlans.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === i ? 'w-4 bg-[#EF4444]' : 'w-1.5 bg-zinc-200'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative flex flex-col p-6 sm:p-10 rounded-2xl transition-all hover:scale-[1.01] h-full ${
      plan.highlight 
        ? 'bg-white border-[4px] md:border-[6px] border-[#EF4444] shadow-2xl relative z-10' 
        : 'bg-[#F9F8F3] border border-zinc-200'
    }`}>
      {plan.highlight && plan.badge && (
        <>
          <div className="absolute -top-[34px] md:-top-10 left-0 right-0 bg-[#EF4444] text-white py-2 md:py-3 rounded-t-2xl text-center font-black uppercase text-[10px] md:text-sm tracking-wide z-20">
            {plan.badge}
          </div>
          
          {/* Gift/Mesh Banner */}
          <div className="absolute -top-[55px] md:-top-[98px] -left-4 md:-left-12 z-30 pointer-events-none scale-[0.6] md:scale-100 origin-top-left">
             <div className="relative w-[115px] h-[100px] -rotate-12">
                <Image 
                  src="/images/gift-box.png" 
                  alt="Free Mesh Router" 
                  fill
                  className="object-contain"
                />
             </div>
          </div>

          {/* Most Popular Ribbon */}
          <div className="absolute top-2 -right-4 md:-right-8 z-40 pointer-events-none scale-[0.65] md:scale-90 origin-top-right">
            <div className="relative">
              <div className="bg-gradient-to-b from-[#EF4444] to-[#B91C1C] text-white px-4 md:px-6 py-2 md:py-3 rounded-md shadow-2xl flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] border-l-4 border-white transform skew-y-[-2deg]">
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-wider leading-none">Most</span>
                <span className="text-lg md:text-xl font-black uppercase tracking-tight leading-none mt-1">Popular</span>
              </div>
              {/* Ribbon Tail shadow fold */}
              <div className="absolute -top-1 right-1 w-3 h-3 bg-red-900 z-[-1] skew-x-[45deg]"></div>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col h-full pt-8 md:pt-4">
        <div className="mb-0 text-left">
          <h3 className="text-zinc-600 font-bold text-xs md:text-base mb-1">{plan.title}</h3>
          <div className={`text-4xl md:text-5xl font-black mb-1 ${plan.highlight ? 'text-zinc-900' : 'text-zinc-900'}`}>
            {plan.speed}
          </div>
          <div className="flex items-baseline justify-start gap-1">
            <span className="text-3xl md:text-4xl font-black text-[#EF4444]">RM{plan.price}</span>
            <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase">Per Month</span>
          </div>
          <p className="text-zinc-500 text-sm md:text-base mt-2 md:mt-3 min-h-[44px] leading-snug">{plan.description}</p>
        </div>

        <div className="w-full h-px bg-zinc-300 my-4 md:my-6" />

        <div className="flex-1 flex flex-col">
          <h4 className="text-xs md:text-sm font-bold text-zinc-500 mb-3 md:mb-4">Our best offers</h4>
          <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                   <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <div className="flex flex-col">
                  {feature.isComplimentary && (
                    <span className="text-[#EF4444] font-black text-sm md:text-base block leading-tight">Complimentary</span>
                  )}
                  <p className={`text-sm md:text-base leading-tight ${feature.isBold ? 'font-bold text-zinc-800' : 'text-zinc-600'}`}>
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {plan.addons && (
            <div className="mt-auto">
              <div className="w-full h-px bg-zinc-300 my-4 md:my-6" />
              <h4 className="text-xs md:text-sm font-bold text-zinc-500 mb-3 md:mb-4">Addons</h4>
              <ul className="space-y-2 md:space-y-3 mb-4">
                {plan.addons.map((addon, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#EF4444] flex items-center justify-center flex-shrink-0">
                       <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                       </svg>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-700 leading-tight font-medium mt-1">{addon.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Link 
            href="/signup" 
            className="w-full block py-3 md:py-4 rounded-xl text-center font-black text-base md:text-lg transition-all shadow-xl bg-[#EF4444] text-white hover:bg-red-600 hover:scale-[1.02]"
          >
            SUBSCRIBE NOW
          </Link>
          
          <p className="text-[9px] md:text-[10px] text-zinc-400 text-center mt-4 md:mt-6 leading-tight italic">
            *All prices are subject to 6% SST<br />T&C apply
          </p>
        </div>
      </div>
    </div>
  );
}
