import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col">
      {/* Main navigation bar */}
      <div className="bg-white py-4 px-4 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-[#EF4444] text-3xl font-bold tracking-tighter flex flex-col leading-none">
              <span>Freshtel</span>
              <span className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-1">Internet</span>
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
