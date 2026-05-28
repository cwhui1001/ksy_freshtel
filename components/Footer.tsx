import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-4 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
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
          <p className="text-zinc-400 text-sm leading-relaxed">
            FRESHTEL INTERNET SDN BHD is a leading provider of high-speed internet services, dedicated to keeping you connected 24/7.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Packages</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Legal</h3>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Support</h3>
          <ul className="space-y-4 text-zinc-400 text-sm mb-4">
            <li>
              <a href="tel:+601135503022" className="hover:text-white transition-colors">
                +60 11-3550 3022
              </a>
            </li>
            <li>
            <a href="mailto:admin@freshtel.online" className="hover:text-white transition-colors">
                admin@freshtel.online
            </a>
            </li>
          </ul>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-xs">
        &copy; {new Date().getFullYear()} FRESHTEL INTERNET SDN BHD. All rights reserved.
      </div>
    </footer>
  );
}
