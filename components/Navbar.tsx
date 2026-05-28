'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-col">
      {/* Main navigation bar */}
      <div className="bg-white py-2 px-2 md:px-40 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-20 w-50">
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
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-800 uppercase">
          <Link 
            href="/about" 
            className={`${pathname === '/about' ? 'text-[#EF4444]' : 'text-zinc-800'} hover:text-[#EF4444] transition-colors`}
          >
            About Us
          </Link>
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-[#EF4444]' : 'text-zinc-800'} hover:text-[#EF4444] transition-colors`}
          >
            Packages
          </Link>
        </div>
      </div>

      
    </nav>
  );
}
