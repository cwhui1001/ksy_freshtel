import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <Link href="/">
            <div className="relative h-12 w-48 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Freshtel Logo" 
                fill 
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                className="brightness-0 invert"
              />
            </div>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
            FRESHTEL is a leading provider of high-speed internet services, dedicated to keeping you connected 24/7.
          </p>
          <p className="text-zinc-500 text-xs mt-4 max-w-md italic">
            Disclaimer: This website is operated by independent FreshTel Authorized Retailer and is not the official FreshTel Malaysia website.
          </p>
        </div>

        <div className="md:pl-8">
          <h3 className="font-bold text-lg mb-4 md:mb-6">Quick Links</h3>
          <ul className="space-y-3 md:space-y-4 text-zinc-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/#plans" className="hover:text-white transition-colors">Packages</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 md:mb-6">Legal</h3>
          <ul className="space-y-3 md:space-y-4 text-zinc-400 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 md:mb-6">Support</h3>
          <ul className="space-y-3 md:space-y-4 text-zinc-400 text-sm mb-4">
            <li>
              <a href="tel:+601135503022" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +60 11-3550 3022
              </a>
            </li>
            <li>
            <a href="mailto:admin@freshtel.online" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                admin@freshtel.online
            </a>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-[10px] md:text-xs">
        <div className="mb-4 space-y-1">
          <p className="font-semibold text-zinc-400 uppercase tracking-widest text-xs">FreshTel Authorised Reseller</p>
          <p>THE KSY ENTERPRISE 202203059028 (NS0266890-A)</p>
          <p className="max-w-2xl mx-auto">REGISTERED ADDRESS: NO. 22A, JALAN 2/125, DESA PETALING, 57100 KUALA LUMPUR, WILAYAH PERSEKUTUAN</p>
        </div>
        Copyright &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  );
}
