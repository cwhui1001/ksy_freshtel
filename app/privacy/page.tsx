import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="flex-grow bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="row">
          <h1 className="text-4xl font-extrabold text-[#1B365D] mb-8 border-b-4 border-[#EF4444] pb-2 inline-block">
            Privacy Policy
          </h1>
          
          <div className="mb-10">
            <p className="text-zinc-600 leading-relaxed text-lg">
              FRESHTEL INTERNET SDN BHD (1154469D) (&ldquo;us&rdquo;, &ldquo;we&rdquo; or &ldquo;our&rdquo;) operates freshtel.my (the &ldquo;Site&rdquo;). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg mt-4">
              We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Information Collection And Use
            </h3>
            <div className="mb-6">
              <p className="text-zinc-600 leading-relaxed">
                While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (&ldquo;Personal Information&rdquo;).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Log Data
            </h3>
            <div className="mb-6">
              <p className="text-zinc-600 leading-relaxed">
                Like many site operators, we collect information that your browser sends whenever you visit our Site (&ldquo;Log Data&rdquo;). This Log Data may include information such as your computer&apos;s Internet Protocol (&ldquo;IP&rdquo;) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
