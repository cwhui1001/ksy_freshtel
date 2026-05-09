import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
          <Link href="/about" className="hover:text-[#EF4444]">About Us</Link>
          <Link href="/" className="hover:text-[#EF4444]">Packages</Link>
        </div>
      </div>

      
    </nav>
  );
}
