'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col sticky top-0 z-[100] bg-white shadow-sm">
      {/* Main navigation bar */}
      <div className="bg-white py-2 px-6 md:px-40 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-16 md:h-20 w-40 md:w-52">
              <Image 
                src="/images/logo.png" 
                alt="Freshtel Logo" 
                fill 
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-800 uppercase">
          <Link 
            href="/about" 
            className={`${pathname === '/about' ? 'text-[#EF4444]' : 'text-zinc-800'} hover:text-[#EF4444] transition-colors`}
          >
            About Us
          </Link>
          <Link 
            href="/#plans" 
            className={`${pathname === '/' ? 'text-[#EF4444]' : 'text-zinc-800'} hover:text-[#EF4444] transition-colors`}
          >
            Packages
          </Link>
          <Link 
            href="/exsim" 
            className={`${pathname === '/exsim' ? 'text-[#EF4444]' : 'text-zinc-800'} hover:text-[#EF4444] transition-colors`}
          >
            EXSIM
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-zinc-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link 
            href="/about" 
            className={`text-lg font-bold uppercase ${pathname === '/about' ? 'text-[#EF4444]' : 'text-zinc-800'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/#plans" 
            className={`text-lg font-bold uppercase ${pathname === '/' ? 'text-[#EF4444]' : 'text-zinc-800'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Packages
          </Link>
          <Link 
            href="/exsim" 
            className={`text-lg font-bold uppercase ${pathname === '/exsim' ? 'text-[#EF4444]' : 'text-zinc-800'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            EXSIM
          </Link>
        </div>
      )}
    </nav>
  );
}
