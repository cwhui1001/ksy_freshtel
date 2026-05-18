import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <section className="bg-white py-12 px-4 md:px-24">
      <div className="max-w-4xl mx-auto bg-[#FBF5EF] p-8 md:p-10 rounded-[20px] shadow-md border border-zinc-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="font-bold text-xl text-center text-black mb-6 uppercase tracking-wide">
          Terms & Condition
        </h2>
        
        <div className="h-px bg-zinc-200 mb-6"></div>
        
        <ol className="list-decimal list-outside space-y-4 ml-6 text-zinc-900">
          <li className="pl-2">
            <span className="font-bold">RM150</span> of installation fee and <span className="font-bold">RM150</span> of deposit will be charged to <span className="font-bold">100 Mbps subscription plan</span> for <span className="font-bold">Highrise property</span> per unit.
          </li>
          <li className="pl-2">
            <span className="font-bold">RM300</span> of installation fee will be charged to <span className="font-bold">100 Mbps subscription plan</span> for <span className="font-bold">Landed property</span> per unit.
          </li>
          <li className="pl-2">
            <span className="font-bold">Complimentary mesh router</span> is only available in 30-months contract with 300 Mbps subscription plan.
          </li>
          <li className="pl-2">
            <span className="font-bold">RM300</span> of installation fee will be charged to <span className="font-bold">100 Mbps subscription plan</span> for <span className="font-bold">Landed property</span> per unit.
          </li>
          <li className="pl-2">
            Additional Mesh Router (Optional):
            <ol className="list-[lower-alpha] list-outside mt-3 space-y-3 ml-6">
              <li className="pl-2">
                For <span className="font-bold">300Mbps</span> and <span className="font-bold">500Mbps</span> plans, an additional mesh router is available at <span className="font-bold">RM20</span> per month.
              </li>
              <li className="pl-2">
                For <span className="font-bold">1Gbps</span> and <span className="font-bold">Above</span> plans, an additional mesh router is available at <span className="font-bold">RM30</span> per month.
              </li>
            </ol>
          </li>
          <li className="pl-2">
            The recurring charge will apply for the full contract duration and continue automatically while the service remains active.
          </li>
          <li className="pl-2">
            500 Mbps and above subscription plan are available in selected locations only.
          </li>
          <li className="pl-2">
            500 Mbps and above are available in selected location only.
          </li>
          <li className="pl-2">
            For passport holder(s):
            <ol className="list-[lower-alpha] list-outside mt-3 space-y-3 ml-6">
              <li className="pl-2">
                <span className="font-bold">RM500</span> of deposit is required. Convertible to advance payment 7 months after the activation upon request.
              </li>
              <li className="pl-2">
                Advance payment for one (1) / two (2) years is accepted, no deposit required.
              </li>
            </ol>
          </li>
          <li className="pl-2">
            Standard installation is subject to management approval.
          </li>
          <li className="pl-2">
            All prices are subject to 6% SST.
          </li>
          <li className="pl-2">
            Please review our comprehensive Terms & Conditions{" "}
            <Link href="/terms-conditions" className="text-blue-600 hover:underline font-medium">
              here
            </Link>.
          </li>
        </ol>
      </div>
    </section>
  );
}
