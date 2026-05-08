'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  });

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
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-black mb-8 font-sans">Get Your Plan Now</h2>
          
          {/* Contract Switcher */}
          <div className="inline-flex bg-[#F5F5F5] p-2 rounded-xl">
            {CONTRACT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedContract(opt.id)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedContract === opt.id 
                    ? 'bg-white text-[#EF4444] shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {currentPlans.map((plan) => (
                <div key={plan.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-4 py-8">
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
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl transition-all hover:scale-[1.02] h-full ${
      plan.highlight 
        ? 'bg-[#FDF2F2] border-4 border-[#EF4444] ring-8 ring-[#EF4444]/5 mt-8' 
        : 'bg-white border border-zinc-100 shadow-xl'
    }`}>
      {plan.highlight && plan.badge && (
        <div className="absolute -top-12 left-[-4px] right-[-4px] bg-[#EF4444] text-white py-2 rounded-t-2xl text-center font-black uppercase text-sm">
          {plan.badge}
        </div>
      )}

      <div className="flex flex-col h-full">
        {plan.selectedLocationOnly ? (
          <span className="text-[10px] text-zinc-400 font-bold mb-2 h-4">
            {plan.locationText || '**Selected location only'}
          </span>
        ) : (
          <div className="mb-2 h-4" />
        )}

        <div className="mb-6 text-center">
          <h3 className="text-zinc-500 font-bold text-sm uppercase tracking-wide">{plan.title}</h3>
          <div className={`text-4xl font-black mb-2 ${plan.highlight ? 'text-[#EF4444]' : 'text-zinc-900'}`}>
            {plan.speed}
          </div>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-[#EF4444]">RM{plan.price}</span>
            <span className="text-xs font-bold text-zinc-500 uppercase">Per Month</span>
          </div>
          <p className="text-zinc-500 text-sm mt-4 min-h-[60px]">{plan.description}</p>
        </div>

        <div className="w-full h-px bg-zinc-100 mb-6" />

        <div className="flex-1 flex flex-col">
          <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Our best offers</h4>
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#EF4444] text-lg mt-[-2px]">✓</span>
                <p className={`text-sm leading-tight ${feature.isBold ? 'font-black text-zinc-800' : 'text-zinc-600'}`}>
                  {feature.isComplimentary && <span className="text-[#EF4444] block mb-1">Complimentary</span>}
                  {feature.text}
                </p>
              </li>
            ))}
          </ul>

          {plan.addons && (
            <div className="mt-auto">
              <div className="w-full h-px bg-zinc-100 mb-6" />
              <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Addons</h4>
              <ul className="space-y-4 mb-6">
                {plan.addons.map((addon, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-zinc-300 text-lg mt-[-2px]">+</span>
                    <p className="text-xs text-zinc-600 leading-relaxed italic">{addon.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto pt-6">
          <Link 
            href="/signup" 
            className={`w-full block py-4 rounded-xl text-center font-black text-sm transition-all shadow-lg ${
              plan.highlight 
                ? 'bg-[#EF4444] text-white hover:bg-red-600' 
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 shadow-none'
            }`}
          >
            SUBSCRIBE NOW
          </Link>
          
          <p className="text-[10px] text-zinc-400 text-center mt-4 leading-tight italic">
            *All prices are subject to 6% SST<br />T&C apply
          </p>
        </div>
      </div>

      {plan.highlight && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-[0.03]">
           <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>
      )}
    </div>
  );
}
