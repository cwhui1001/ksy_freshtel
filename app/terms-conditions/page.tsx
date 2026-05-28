import React from 'react';

export default function TermsAndConditions() {
  return (
    <main className="flex-grow bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="row">
          <h1 className="text-4xl font-extrabold text-[#1B365D] mb-8 border-b-4 border-[#EF4444] pb-2 inline-block">
            Terms & Conditions
          </h1>
          
          <div className="mb-6">
            <p className="text-zinc-600 leading-relaxed text-lg italic">
              The use of Freshtel Website is subject to the terms and conditions (&ldquo;T&C&rdquo;) provided herein. By accessing and using Freshtel Website you agree to be bound by this T&C.
            </p>
          </div>
          
          <div className="mb-10">
            <p className="text-zinc-600 leading-relaxed">
              From time to time, we make services available via this website or such other website operated by us, such as messaging services and online services (&ldquo;freshtel.my services&rdquo;). These freshtel.my services, and this website, will be collectively referred to as &ldquo;freshtel.my&rdquo; in these Terms of Use.
            </p>
          </div>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Support and Customer Support
            </h3>
            <ol className="space-y-6">
              <li className="text-zinc-700">
                <span className="font-bold block mb-3 text-lg">Support and Operation Hours:</span>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 mb-4 shadow-sm">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#FFF4F4]">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1B365D] uppercase tracking-wider">Day</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1B365D] uppercase tracking-wider">Operation Hours</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1B365D] uppercase tracking-wider">Support Hours</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 font-medium">Monday - Friday</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">9:00 AM - 6:00 PM</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">9:00 AM - 12:00 AM</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 font-medium">Saturday - Sunday</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 italic">Closed</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">9:00 AM - 9:00 PM</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 font-medium">Public Holiday</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 italic">Closed</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">9:00 AM - 9:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="bg-zinc-50 p-6 rounded-xl border-l-4 border-[#3B82F6] space-y-2 list-none">
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[140px]">Contact Number:</span>
                    <span className="text-[#3B82F6] font-bold">03-9078 2963</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[140px]">WhatsApp:</span>
                    <span className="text-[#3B82F6] font-bold">03-9078 2963</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[140px]">Email:</span>
                    <span className="text-[#3B82F6] font-bold underline">admin@freshtel.online</span>
                  </li>
                  <li className="mt-2 text-zinc-500 italic">You may also use our Freshtel Internet mobile app or customer portal</li>
                </ul>
              </li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Registration & Installation
            </h3>

            <ol className="list-decimal ml-6 space-y-6 text-zinc-700">
              <li>
                <span className="font-medium">Customer has to provide the following information for registration:</span>
                <ul className="list-disc ml-6 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-zinc-600 italic">
                  <li>Name</li>
                  <li>Identity (NRIC, Passport)</li>
                  <li>Nationality</li>
                  <li>Email</li>
                  <li>Contact Number</li>
                  <li>Preferred Installation Date/Time</li>
                  <li>Service Location and Unit No</li>
                </ul>
              </li>
              <li>Customer information is confidential in Freshtel Internet.</li>
              <li>Information provided must be accurate to make all the operations work smoothly, and to receive important notices from Freshtel Internet.</li>
              <li>Provided mobile number is recommended to be Malaysia registered mobile number. International mobiles will be unable to receive any SMS from Freshtel Internet.</li>
              <li>
                <span className="font-medium">Customer must provide the following document(s) for the verification process:</span>
                <div className="mt-4 space-y-4">
                  <div className="bg-white border border-zinc-100 p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-[#3B82F6] mb-2 uppercase text-sm tracking-wide">For Individual application</p>
                    <ul className="list-disc ml-6 text-zinc-600 text-sm space-y-1">
                      <li>NRIC (Front and Back) Or Passport (Owner/ Tenant)</li>
                      <li>S&P/ VP Letter/ Utility Bill</li>
                      <li>Tenancy Agreement (If applicable)</li>
                      <li>Letter of Authorization (If applicable)</li>
                      <li>Payment Slip (If applicable)</li>
                    </ul>
                  </div>
                  <div className="bg-[#FFF4F4] border border-[#EF4444]/10 p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-[#EF4444] mb-2 uppercase text-sm tracking-wide">For Redemption application</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">For Owner application</p>
                        <ul className="list-disc ml-6 text-zinc-600 text-sm italic">
                          <li>S&P / VP Letter / Utility Bill</li>
                          <li>Tenancy Agreement</li>
                          <li>Letter of Authorization</li>
                          <li>Owner & Tenant IC/Passport</li>
                        </ul>
                      </div>
                      <p className="text-zinc-600 text-sm">Payment Slip (If applicable)</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-medium">Deposit:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>RM 150 deposit is applicable for Malaysians who subscribe to no contract packages.</li>
                  <li>RM 500 deposit is applicable for non-Malaysians who subscribe to any contract period of the packages.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Installation Fee:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>RM 150 of installation fee is applicable for high-rise properties with no contract packages.</li>
                  <li>RM 300 installation fee is applicable for landed property with 100 Mbps packages in any contract period. It applies to both Malaysians and non-Malaysians.
                    <br /><span className="text-xs font-bold text-[#EF4444]">*Installation fee is subject to Sales and Service Tax (SST).</span>
                  </li>
                </ul>
              </li>
              <li>Cancellation of registration must be informed 3 working day(s) in advance before the scheduled installation date.</li>
              <li>Installation will be arranged once the customer has made payment for the deposit and/or installation fee, and the payment has been verified by the Billing Team, if the deposit and/or installation fee is applicable.</li>
              <li>
                <span className="font-medium block mb-3">Installation and Internet troubleshooting will be scheduled as follows:</span>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-[#1B365D] uppercase">Service Type</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-[#1B365D] uppercase">Mon-Fri</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-[#1B365D] uppercase">Saturday</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-[#1B365D] uppercase">Sunday & PH</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-zinc-800">Installation</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-zinc-600 text-center">9am - 4pm</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-zinc-600 text-center">10am - 12pm</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#EF4444] font-medium text-center italic">Closed</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-zinc-800">Troubleshooting</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-zinc-600 text-center">9am - 4pm</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-zinc-600 text-center">10am - 12pm</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#3B82F6] font-medium text-center italic text-[10px]">Subject to approval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>For installation arrangements, appointments requested before 1:00 PM will be arranged on the same day as requested. Appointments requested after 1:00 PM will be scheduled on the next business day, subject to availability in the Freshtel Internet schedule. To ensure prompt service delivery based on current availability. Freshtel Internet strives to accommodate customers&rsquo; installation needs efficiently, prioritizing timely arrangements to meet customers&rsquo; schedule preferences.</li>
              <li>Freshtel Internet has the right to schedule another installation session for the customer if the customer&rsquo;s preferred installation session has been fully occupied. This is on a first come first serve basis.</li>
              <li>Cancellations of scheduled installations or troubleshooting appointments require a minimum of 1 - 3 working days&apos; advance notice before the scheduled date.</li>
              <li>The installations at the customer&apos;s home or premises that Freshtel Internet will do are only a Standard Installation.</li>
              <li>Free installation includes standard internal cabling of up to 50 meters of fibre, with no current charges. Any non-standard installation or additional cabling beyond 50 meters will incur RM300 charges, as determined by Freshtel Internet.</li>
              <li>
                <span className="font-medium block mb-3">Customers are responsible for the safety of Freshtel&rsquo;s equipment (e.g., modem, router). All equipment must be returned in good working condition upon termination of service. Failure to do so may result in charges for any loss or damage, and will be billed to the customer&rsquo;s account:</span>
                <div className="max-w-xs overflow-hidden rounded-lg border border-zinc-200">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#FFF4F4]">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-bold text-[#1B365D] uppercase">Equipment</th>
                        <th className="px-4 py-2 text-right text-xs font-bold text-[#1B365D] uppercase">Charge (RM)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                        {[
                            { name: 'ONU', price: '150' },
                            { name: 'WiFi 6 Router', price: '400' },
                            { name: 'WiFi 7 Router', price: '800' },
                            { name: 'Analog / Dect Phone', price: '200' },
                        ].map((item) => (
                          <tr key={item.name}>
                            <td className="px-4 py-2 text-sm text-zinc-600">{item.name}</td>
                            <td className="px-4 py-2 text-sm text-zinc-900 font-bold text-right">RM{item.price}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li>By scheduling an installation, customers grant Freshtel Internet permission to access their home or premises on the agreed installation date and time, or on any subsequent rescheduled date and time.</li>
              <li>After Freshtel Internet accepts the customer&apos;s completed order, an account will be created and assigned a unique customer code. This code serves as the customer&apos;s official identification for all interactions, invoices, and support communications with Freshtel Internet.</li>
              <li>Customer&rsquo;s package(s) will be activated after the installation has completed.</li>
              <li>The internet service will begin on the activation date and for the duration as specified in the applicable plan that was subscribed. After this duration, the service will automatically renew on a monthly basis, unless the customer requests termination.</li>
              <li>Contact our customer support to change of information. Our personnel will provide a form for the customer to enter the new information, and the customer may need to submit it back to Freshtel Internet. Customer&rsquo;s information will be updated in the system in 3 working day(s).</li>
              <li>
                <span className="font-medium block mb-3">Voice Package will be charged on a usage basis. May refer table below for reference:</span>
                <div className="max-w-sm overflow-hidden rounded-lg border border-zinc-200">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#F0F9FF]">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-bold text-[#1B365D] uppercase">Call type</th>
                        <th className="px-4 py-2 text-center text-xs font-bold text-[#1B365D] uppercase">Residential</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200 text-sm">
                        <tr>
                            <td className="px-4 py-2 text-zinc-600">Local Calls</td>
                            <td className="px-4 py-2 text-center font-bold text-[#3B82F6]">RM0.10/min</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-zinc-600">International</td>
                            <td className="px-4 py-2 text-center italic text-zinc-400">Varies by country</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>RM100 per month for 1 Fixed IP. A maximum of 5 IPs is allowed per account.</li>
              <li>Expired and/ or fully redeemed promotion code will not be entertained, although the registration is submitted to Freshtel Internet.</li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              One Time Deal
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700">
              <li>One Time Deal package is not allowed for transfer ownership, if the customer requests relocation (T&C apply).</li>
              <li>One Time Deal package is not refundable and non-transferable.</li>
              <li>Mesh Router for 500 Mbps and above provided.</li>
              <li>
                <span className="font-medium">Upon expiry of the contract term:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>The subscription will revert to the original standard package pricing unless the customer opts to renew.</li>
                  <li>Customers may choose to renew by selecting an available renewal package, subject to T&C and updated price.</li>
                </ul>
              </li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              One Time Payment
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700">
              <li>One Time Payment is an option allows customers to make an upfront payment for a subscription period of one (1) year or two (2) years based on the selected monthly package.</li>
              <li>Non-Malaysian customers using One Time Payment are exempt from the RM500 deposit.</li>
              <li>After the One Time Payment period ends, the subscription will automatically continue under monthly billing.</li>
              <li>One Time Payment is non-refundable and non-transferable.</li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Lumos Campaign
            </h3>
            <ol className="list-decimal ml-6 space-y-6 text-zinc-700">
              <li>
                <span className="font-medium">Eligibility:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic space-y-1">
                  <li>Open to new and existing customers, Freshtel customers (unit owner only).</li>
                  <li>Property Assessment Document (Surat Taksiran Rumah) must be submitted. One owner qualifies one unit.</li>
                  <li>Each successful activation qualifies for one (1) LUMOS FLOAT Smart Projector.</li>
                  <li>Eligible existing customers must upgrade or renew to a 300Mbps or higher plan on a 36-month contract (24 months + 12-month add-on).</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Redemption Method:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600">
                  <li>Redemption is done exclusively through LUMOS Malaysia&rsquo;s official website at <a href="https://www.lumosprojector.my" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] underline">www.lumosprojector.my</a>.</li>
                  <li>The unique redemption code must be entered during checkout to receive the item free of charge.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Redemption Validity:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>Code must be redeemed within one (1) month from the date of activation.</li>
                  <li>Customer Service will assist with redemption.</li>
                  <li>Expired or unused codes will not be reissued.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Product Warranty &amp; Support:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600">
                  <li>1-year limited warranty, automatically registered via the order ID.</li>
                  <li>Warranty claims and after-sales support are fully handled by LUMOS via <a href="mailto:support@lumosprojector.my" className="text-[#3B82F6] underline">support@lumosprojector.my</a>.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Non-Transferable:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>Codes and items have no cash value and are non-transferable, non-refundable, and non-exchangeable.</li>
                  <li>Cannot be used in conjunction with other campaign offers.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Penalty for Early Termination:</span>
                <ul className="list-disc ml-6 mt-2 text-zinc-600">
                  <li>RM500 penalty for the complimentary projector <span className="font-bold text-[#EF4444]">PLUS</span> the remaining contract balance will be charged.</li>
                </ul>
              </li>
              <li>Freshtel reserves the right to modify or terminate this campaign without prior notice.</li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Win-Over
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700">
              <li>Eligibility is contingent upon validation of the applicant&apos;s current subscription with an alternative Internet Service Provider.</li>
              <li>The offer is expressly limited to new acquisitions and is not available for existing Freshtel customer accounts.</li>
              <li>Not applicable to existing Freshtel customers.</li>
              <li>Proof of subscription (e.g., bill or termination letter) required.</li>
              <li>Not combinable with other promotions.</li>
              <li>Freshtel reserves the right to amend or terminate the campaign at its discretion.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Monthly Billing Invoices
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>A prorated bill will be generated upon installation, based on the activation within a month.</li>
              <li>The monthly bill will be generated on the 1st day of the month. The due date will fall on the last day of the month. Customer is advised to settle their bills prior to the due date to avoid any disruption.</li>
              <li>All bills, including prorated and monthly bills, will be sent to your written registered email address. Digital printed copies of the bill are not provided (unless, upon request, charges apply RM5).</li>
              <li className="font-semibold text-[#EF4444]">All prices shown are exclusive of 6% Service Tax.</li>
              <li>Customers are required to make full payments for their billing invoices. Partial payments are not allowed. This ensures that all units under one account remain active and avoids any suspension.</li>
              <li>Freshtel offers convenient cashless payments via online banking (FPX), e-wallets, credit cards, and JOMPAY through the Freshtel Internet portal and mobile app. For detailed instructions, please refer to the payment user guide available on the Freshtel Internet website.</li>
              <li>Auto debit is available on the Freshtel Internet. The customer may enable the features when paying the bill(s) with a debit or credit card for the first time. Kindly ensure that the credit(s) on the card are sufficient enough to make the payment.</li>
              <li>Failure on auto debit transaction would cause suspension if the bill(s) have not been paid before the bill&rsquo;s due date. The customer will not be notified of failure on auto debit transactions.</li>
              <li>Cash and bank transfers are not allowed. Do refer to &ldquo;Monthly Billing Invoices&rdquo; item (5) for available payment methods in Freshtel Internet.</li>
              <li>Customers are advised not to refresh or close the page or click the back button during the payment transaction, as this may lead to transaction failure.</li>
              <li>Customer will be blacklisted to CTOS and CBM if overdue invoice(s) are not being paid in two (2) months.</li>
              <li>Customer will be responsible for charges related to broken equipment(s) in cases of abuse, accidents, modifications, unauthorized repairs, or other causes not attributed to hardware defects.</li>
              <li>Replacement of equipment(s) will be conducted for a customer in cases as hardware defects.</li>
              <li>Refunds will be processed within 45 working days from the date Freshtel Internet receives the completed termination form and the equipment(s) are returned to Freshtel Internet.</li>
              <li>Re-open the account subject to approval by the management. The Customer must comply with the current terms and conditions of service. Additional verification or documentation may be required for account reopening.</li>
              <li>Re-open the account after termination is subject to a reactivation fee, as outlined in the service agreement. The customer must settle any outstanding balances and fees incurred up to the termination date.</li>
              <li>Re-open the account reinstatement after suspension requires the settlement of any outstanding balances or fees that led to the suspension. The customer must agree to adhere to all terms of the service agreement moving forward.</li>
              <li>Re-open account suspended due to non-payment can be reopened upon settlement of all outstanding invoices and fees. Reinstatement is conditional upon the customer&rsquo;s commitment to maintaining timely payments as per the revised payment schedule.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Suspension
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>All units under one account will be suspended if the customer is unable to make full payment within 45 days after the invoice is generated.</li>
              <li>All units in one account will be automatically reactivated in 10 minutes after the customer has made full payment for the overdue invoice(s) via online banking (FPX), e-wallets, credit cards, or JOMPAY through the Freshtel Internet portal and mobile app. Please contact customer support if the line is not restored after 10 minutes.</li>
              <li>Customers may contact customer support after making payment via terminal and must provide the payment receipt of the transaction as proof to reactivate the account.</li>
              <li>Customers may contact our customer support if they are still experiencing internet issues despite having successfully made a full payment. Customers shall provide proof of payment, including transaction receipt(s) or history, to facilitate assistance.</li>
              <li>Customers who are still bound by a contract with Freshtel Internet are required to pay the remaining balance of the billing invoice amount if their account has been suspended for more than 2 months.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Termination
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>Termination of services or accounts must be requested by email or call to our customer support.</li>
              <li>All outstanding balances, fees, or charges must be settled before the termination request can be processed.</li>
              <li>If the customer requests termination or cancels the Service before the expiry of the Contract Service Term, the customer is required to pay Freshtel Internet the remaining period of the contract.</li>
              <li>Customers may terminate an agreement or service at any time (i.e., prior to the expiry of the term) by providing Freshtel Internet Sdn Bhd with thirty (30) days&apos; written notice. The thirty (30) days will be calculated from the day on which Freshtel Internet Sdn Bhd receives the termination form.</li>
              <li>Customers must return all Freshtel Internet equipment (e.g., modem, router) upon termination of service.</li>
              <li>Customer must return to Freshtel in good working condition, fair wear and tear excepted.</li>
              <li>Customer must ensure that there are no missing, disassembled, modified, or non-original parts therein. Charges may be incurred. (Refer to point no. 16 outline Registration and Installation).</li>
              <li>
                Liable for all costs and expenses that Freshtel Internet incurs, including the cost and expenses for the aborted appointment. Or the customer to return the equipment, which shall be determined at the following address:
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 mt-4 not-italic">
                   <p className="font-bold text-[#1B365D]">Lot 11, 2nd Floor Retail,<br />Millerz Square @ Old Klang Road,<br />No. 357, Jalan Kelang Lama,<br />57000 Kuala Lumpur.</p>
                   <p className="mt-4 text-zinc-600">Customer Support: <span className="font-bold">03-9078 2963</span>; <a href="mailto:support@freshtel.my" className="text-[#3B82F6] underline font-medium">support@freshtel.my</a>.</p>
                </div>
              </li>
              <li>
                The service will be officially terminated only upon all of the following are completed:
                <ul className="list-disc ml-6 mt-2 text-zinc-600 italic">
                  <li>Submission of the termination form,</li>
                  <li>Return of all Freshtel Internet equipment (e.g., modem, router) in good condition, and</li>
                  <li>Full settlement of any outstanding balances or charges in the account.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Upgrade and Downgrade Package
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700">
              <li>Customer is allowed to upgrade the package at any time.</li>
              <li>Customer is only allowed to downgrade the package after the current contract has ended.</li>
              <li>Customer is only allowed to apply for renewal after the current contract has ended.</li>
              <li>Upgrade, Renewal, or Downgrade requests will be handled within 5 working days after the request has been submitted to Freshtel Internet.</li>
              <li>Downgrade package only will be executed on the next billing date.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Relocation
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>Relocation entails moving from the current registered unit to another unit within Freshtel Internet&rsquo;s coverage area, whether they are in the same or different buildings/locations.</li>
              <li>The customer must request one (1) month in advance to Freshtel Internet Customer Support before moving out of the registered unit. The request will be handled in 7 working day(s).</li>
              <li>An installation will be arranged for relocation. The customer is required to bring their equipment(s) to the new location. Installation services will be scheduled for the new unit.</li>
              <li>
                A relocation fee of <span className="font-bold">RM80</span> will be charged for each relocation request. 
                <span className="block text-xs font-bold text-[#EF4444] mt-1">*The relocation fee is subject to Sales and Service Tax (SST).</span>
              </li>
              <li>If the request to relocate to a new address that is outside Freshtel Internet&apos;s coverage area, the customer will be required to pay a penalty equivalent to the remaining months of the contract if the customer elects to terminate our service while still bound by a contract.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Contract Transfer Ownership
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>Ownership transfer of services or accounts must be requested by email or call. Our Customer Support will assist with the process.</li>
              <li>
                Both parties, the current owner (transferor) and the intended new owner (transferee), must provide their consent to the ownership transfer. Additional verification or documentation may be required for transfer ownership, such as the transferee&rsquo;s copy of identity card (front and back) or passport.
              </li>
              <li>All outstanding invoice(s) associated with the account must be settled before the ownership transfer can be processed.</li>
              <li>Upon approval of the ownership transfer, all rights, benefits, and responsibilities associated with the account or service will transfer to the new owner (transferee) within 7 working days.</li>
              <li>Freshtel Internet equipment should be in good condition before the process of transferring ownership happens. Failure to do so may result in charges for any loss or damage, and a bill to the existing account.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Freeze account
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>Customer needs to pay <span className="font-bold">RM53.00 (inclusive of SST)</span> as the service charge to activate and deactivate the freeze service. Freshtel Internet will issue an invoice for the service charge and send it to the registered email.</li>
              <li>The contract of the package subscription will be extended once the account is reactive, depending on the freezing period.</li>
              <li>Customer has to request in 2 weeks in advance to Freshtel Internet. The request will be handled within 7 working days after settling all outstanding invoices (s) and the freezing fee (RM 53.00) before the requested freeze service can be processed.</li>
              <li>Freeze service activation will be conducted once the payment for the service charges is received and verified by the Freshtel Internet.</li>
              <li>Each account is allowed to request the freeze service once per year and a suspension period from a minimum of one (1) month to a maximum of six (6) months to freeze an active internet service package.</li>
              <li>The freeze service package will auto-reactivate after the maximum period has lapsed. The internet service will resume at the end of the maximum period, and the subscriber will receive the monthly invoice.</li>
              <li>Only the customer can request for Freeze service.</li>
              <li>Only the customer&rsquo;s requests will be allowed for the reactivation of the account. The request must be submitted via email or a call to Freshtel Internet.</li>
              <li>Customer is responsible for the equipment under good condition and is responsible for charges related to broken equipment in cases of abuse, accidents, modifications, unauthorized repairs, or other causes not attributed to hardware defects.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Complimentary Usage Equipment
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700">
              <li>A complimentary Mesh Router is provided only with selected price plans.</li>
              <li>
                <span className="font-medium block mb-3">The eligibility criteria are as follows for Residential:</span>
                <div className="max-w-md overflow-hidden rounded-lg border border-zinc-200">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-bold text-[#1B365D] uppercase">Bandwidth</th>
                        <th className="px-4 py-2 text-center text-xs font-bold text-[#1B365D] uppercase">Contract Term</th>
                        <th className="px-4 py-2 text-center text-xs font-bold text-[#1B365D] uppercase">Mesh Included</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-zinc-600 font-bold">300 Mbps</td>
                        <td className="px-4 py-2 text-sm text-zinc-600 text-center">30 months</td>
                        <td className="px-4 py-2 text-sm text-zinc-900 font-bold text-center">WiFi 6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs italic text-zinc-400">Note: Router models and eligibility criteria are subject to change based on Freshtel Internet&rsquo;s policy and equipment availability</p>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Additional Mesh Router
            </h3>
            <ol className="list-decimal ml-6 space-y-6 text-zinc-700">
              <li>The recurring charge will apply for the full contract duration and continue automatically while the service remains active.</li>
              <li>
                <span className="font-medium block mb-3">The eligibility criteria are as follows:</span>
                <div className="max-w-md overflow-hidden rounded-lg border border-zinc-200">
                  <table className="min-w-full divide-y divide-zinc-200">
                    <thead className="bg-[#FFF4F4]">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-bold text-[#1B365D] uppercase">Bandwidth</th>
                        <th className="px-4 py-2 text-center text-xs font-bold text-[#1B365D] uppercase">Mesh Included</th>
                        <th className="px-4 py-2 text-right text-xs font-bold text-[#1B365D] uppercase">Price/mo</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-zinc-600">300 Mbps - 500 Mbps</td>
                        <td className="px-4 py-2 text-sm text-[#3B82F6] font-bold text-center">WiFi 6</td>
                        <td className="px-4 py-2 text-sm text-zinc-900 font-black text-right">RM20</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-zinc-600">1 Gbps - 2 Gbps</td>
                        <td className="px-4 py-2 text-sm text-[#3B82F6] font-bold text-center">WiFi 7</td>
                        <td className="px-4 py-2 text-sm text-zinc-900 font-black text-right">RM30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs font-bold text-[#EF4444] italic">*Subject to 6% SST</p>
                <p className="mt-1 text-xs italic text-zinc-400">Note: Router models and eligibility criteria are subject to change based on Freshtel Internet&rsquo;s policy and equipment availability</p>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Grace Period
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>A 30-day grace period is offered exclusively to new subscribers.</li>
              <li>Grace period applied if the customer cancels, only the prorated charges will apply.</li>
              <li>All equipment provided by Freshtel Internet must be returned in good working and original condition, together with the original packaging, within seven (7) working days from the cancellation confirmation.</li>
              <li>If any equipment is damaged, missing, not returned, incomplete, or returned without the original packaging, replacement charges will apply and be billed to the customer&rsquo;s account. (Refer to &ldquo;Registration & Installation - Equipment Charges&rdquo;.)</li>
              <li>Cancellations made after the 30-day grace period will be subject to early termination fee in accordance with the terms of the subscribed plan. (Refer to &ldquo;Termination&rdquo;).</li>
              <li>Freshtel reserves the right to suspend or terminate services at any time during the grace period or contract period in cases of violation of terms.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              Quality of Services
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify">
              <li>Equipment Provision: Freshtel Internet reserves the right to provide suitable equipment (s) to support the internet service for customers.</li>
              <li>Installation Standard: All equipment (s) and component(s) will be installed according to Freshtel Internet&rsquo;s standard procedures.</li>
              <li>Customers are not recommended to replace the equipment (s) provided by Freshtel Internet in order to maximise the performance of the internet service. If a customer insists on switching the equipment (s) provided by Freshtel Internet, they should do so <span className="font-white bg-[#EF4444] px-1 uppercase font-bold">at their own risk</span>. It&apos;s essential to understand that any such changes may impact the performance of the internet service.</li>
              <li>Responsibility: Freshtel Internet is not responsible for the availability, reliability, or performance of websites or online services hosted by third-party providers. Issues related to the website provider&rsquo;s servers, network, or maintenance activities fall outside Freshtel Internet scope of control.</li>
              <li>Customer Support: If internet service users encounter difficulties accessing a specific website or online service, Freshtel Internet recommends contacting the website provider directly for assistance. They will be able to address issues related to their service and infrastructure.</li>
              <li>Notification: While Freshtel Internet strives to inform customers of known issues impacting Freshtel Internet services, Freshtel Internet may not always be aware of problems affecting third-party websites or services. Freshtel Internet encourages customers to report any persistent access issues, and Freshtel Internet will endeavor to provide assistance and investigate connectivity problems from the Freshtel Internet end.</li>
              <li>Limitation of Liability: Freshtel Internet liability for any disruption or inability to access websites or online services provided by third parties is limited to the extent set forth in Freshtel Internet general terms and conditions. Freshtel Internet does not assume responsibility for financial losses, damages, or inconveniences incurred due to access issues with third-party websites or services.</li>
              <li>Continued Efforts: Freshtel Internet continuously works to ensure that the Freshtel Internet network and services provide optimal connectivity and access. Freshtel Internet appreciates your understanding and patience in instances where issues with third-party websites or services impact your experience.</li>
              <li>Violation of Policy: If internet service users violate this policy, Freshtel Internet reserves the right to take action, which may include managing customers&rsquo; bandwidth, suspending, or terminating the service. Freshtel Internet will exercise discretion in determining the appropriate response.</li>
              <li>Reconnection Fee: Should Freshtel Internet choose to reconnect a customer&rsquo;s service, a reconnection fee may apply to reactivate it.</li>
              <li>Reporting Unacceptable Use: If internet service users encounter any illegal, unlawful, or unacceptable use of our services, please call 03-9078 2963 or email <a href="mailto:support@freshtel.my" className="text-[#3B82F6] underline">support@freshtel.my</a>.</li>
              <li>User Responsibility and Risk: Users accessing websites via the internet service do so at their own risk.</li>
              <li>Malicious Software and Cyberattacks: If a user&rsquo;s laptops, personal computers, smartphones, or other access equipment become infected with malicious software that allows a third party to launch a distributed denial of service attack or other cyberattacks using the Fibre Internet Service, and if such an attack compromises or affects Freshtel Internet&rsquo;s network, Freshtel Internet will immediately suspend the user&rsquo;s internet service.</li>
              <li>Mitigating Precautions: Users are responsible for taking reasonable precautions to mitigate against such possibilities. Installing current and updated anti-virus software is essential to prevent such incidents.</li>
              <li>Liability for Costs and Expenses: If the attack occurs due to the user&rsquo;s failure to take necessary precautions, they may be liable to compensate Freshtel Internet for any costs or expenses incurred.</li>
              <li>Troubleshooting will be arranged from 9.00 am to 4.00 pm on Monday to Friday, and 10.00 am to 12.00 pm on Saturday, depending on the availability of the schedule.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#EF4444] mr-4 block"></span>
              General
            </h3>
            <ol className="list-decimal ml-6 space-y-4 text-zinc-700 text-justify text-sm">
              <li>Freshtel Internet is entitled to make any alteration or changes to the service(s) in whole or any part thereof, or withdraw or suspend, disconnect or terminate the service(s) or any part thereof as we deem fit without notice to you and we will not be liable to you or any third party for any loss (including loss of revenue), loss of service(s) or connectivity or inconvenience as a result thereof. Where reasonably practicable, we will endeavour to give you reasonable advance notice of such changes, be it through written notice, electronic mail, our Bill, our website, or such other form as we deem appropriate.</li>
              <li>By providing your details, you are giving Freshtel Internet the approval to manage your personal details in accordance with the Personal Data Protection Act 2010.</li>
              <li>Freshtel Internet may disclose customer&rsquo;s personal information such as name, contact information, service usage data, and any other relevant information necessary to fulfil the purpose with authorized party(ies) for purposes that include, but are not limited to, enhancing customer experience, conduction research and analysis, and upselling the packages.</li>
              <li>All authorized parties are required to adhere to Freshtel Internet&rsquo;s data protection policies and are prohibited from using customers&rsquo; information for purposes other than those specified by Freshtel Internet.</li>
              <li>By continuing to use Freshtel Internet&rsquo;s services, you consent to the sharing of your information with authorized parties as described in this clause. If the customer does not agree with this, please contact customer support to inform not to share the information with the authorized party(ies).</li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}

