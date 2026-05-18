import Link from "next/link";

export default function TermsConditions() {
  return (
    <main className="flex flex-col min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-[#1B365D] mb-8 text-center uppercase tracking-tight">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-zinc-900 mb-12">
          <p className="text-lg leading-relaxed">
            The use of Freshtel Website is subject to the terms and conditions (“T&C”) provided herein. By accessing and using Freshtel Website you agree to be bound by this T&C.
          </p>
          <p className="text-lg leading-relaxed">
            From time to time, we make services available via this website or such other website operated by us, such as messaging services and online services (“freshtel.my services”). These freshtel.my services, and this website, will be collectively referred to as “freshtel.my” in these Terms of Use.
          </p>
        </div>

        <section className="space-y-12">
          {/* Support and Customer Support */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Support and Customer Support</h3>
            <div className="space-y-6">
              <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50">
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900 bg-zinc-100">Day</th>
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900 bg-zinc-100">Operation Hours</th>
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900 bg-zinc-100">Support Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 text-zinc-900">
                    <tr className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4">Monday - Friday</td>
                      <td className="p-4">9:00 AM - 6:00 PM</td>
                      <td className="p-4">9:00 AM - 12:00 AM</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4">Saturday - Sunday</td>
                      <td className="p-4">Closed</td>
                      <td className="p-4">9:00 AM - 9:00 PM</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4">Public Holiday</td>
                      <td className="p-4">Closed</td>
                      <td className="p-4">9:00 AM - 9:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contact Number: <strong>03-9078 2963</strong></li>
                <li>WhatsApp: <strong>03-9078 2963</strong></li>
                <li>Email: <strong>support@freshtel.my</strong></li>
                <li>You may also use our Freshtel Internet mobile app or customer portal</li>
              </ul>
            </div>
          </div>

          {/* Registration & Installation */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Registration & Installation</h3>
            <ol className="list-decimal ml-6 space-y-6">
              <li>
                Customer has to provide the following information for registration:
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>Name</li>
                  <li>Identity (NRIC, Passport)</li>
                  <li>Nationality</li>
                  <li>Email</li>
                  <li>Contact Number</li>
                  <li>Preferred Installation Date/Time</li>
                  <li>Service Location and Unit No</li>
                  <li>Company Registration No (for company applicant only)</li>
                </ul>
              </li>
              <li>Customer information is confidential in Freshtel Internet.</li>
              <li>Information provided must be accurate to make all the operations work smoothly, and to receive important notices from Freshtel Internet.</li>
              <li>Provided mobile number is recommended to be Malaysia registered mobile number. International mobiles will be unable to receive any SMS from Freshtel Internet.</li>
              <li>
                Customer must provide the following document(s) for the verification process:
                <ul className="list-disc ml-6 mt-3 space-y-4">
                  <li>
                    <strong>For Individual application</strong>
                    <ul className="list-[circle] ml-6 mt-2 space-y-1">
                      <li>NRIC (Front and Back) Or Passport (Owner/ Tenant)</li>
                      <li>S&P/ VP Letter/ Utility Bill</li>
                      <li>Tenancy Agreement (If applicable)</li>
                      <li>Letter of Authorization (If applicable)</li>
                      <li>Payment Slip (If applicable)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>For Company application</strong>
                    <ul className="list-[circle] ml-6 mt-2 space-y-1">
                      <li>NRIC (Front and Back) Or Passport of Director</li>
                      <li>S&P/ VP Letter/ Utility Bill</li>
                      <li>SSM Documents</li>
                      <li>Payment Slip (If applicable)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>For Redemption application</strong>
                    <ul className="list-[circle] ml-6 mt-2 space-y-1">
                      <li>For Owner application</li>
                      <ul className="list-[square] ml-6 mt-1 space-y-1">
                        <li>S&P / VP Letter / Utility Bill</li>
                        <li>Tenancy Agreement</li>
                        <li>Letter of Authorization</li>
                        <li>Owner & Tenant IC/Passport</li>
                      </ul>
                      <li>Payment Slip (If applicable)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Deposit:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>RM 150 deposit is applicable for Malaysians who subscribe to no contract packages.</li>
                  <li>RM 500 deposit is applicable for non-Malaysians who subscribe to any contract period of the packages.</li>
                </ul>
              </li>
              <li>
                <strong>Installation Fee:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>RM 150 of installation fee is applicable for high-rise properties with no contract packages.</li>
                  <li>RM 300 installation fee is applicable for landed property with 100 Mbps packages in any contract period. It applies to both Malaysians and non-Malaysians.</li>
                </ul>
                <p className="mt-2 text-sm italic">*Installation fee is subject to Sales and Service Tax (SST).</p>
              </li>
              <li>Cancellation of registration must be informed 3 working day(s) in advance before the scheduled installation date.</li>
              <li>Installation will be arranged once the customer has made payment for the deposit and/or installation fee, and the payment has been verified by the Billing Team, if the deposit and/or installation fee is applicable.</li>
              <li>
                Installation and Internet troubleshooting will be scheduled as follows:
                <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200 mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-100">
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Service Type</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Mon-Fri</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Saturday</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Sunday & PH</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-900">
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 font-medium">Installation</td>
                        <td className="p-4">9:00 AM - 4:00 PM</td>
                        <td className="p-4">10:00 AM - 12:00 PM</td>
                        <td className="p-4">Closed</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 font-medium">Troubleshooting</td>
                        <td className="p-4">9:00 AM - 4:00 PM</td>
                        <td className="p-4">10:00 AM - 12:00 PM</td>
                        <td className="p-4">Subject to approval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>For installation arrangements, appointments requested before 1:00 PM will be arranged on the same day as requested. Appointments requested after 1:00 PM will be scheduled on the next business day, subject to availability in the Freshtel Internet schedule.</li>
              <li>Freshtel Internet has the right to schedule another installation session for the customer if the customer’s preferred installation session has been fully occupied. This is on a first come first serve basis.</li>
              <li>Cancellations of scheduled installations or troubleshooting appointments require a minimum of 1 - 3 working days&apos; advance notice before the scheduled date.</li>
              <li>The installations at the customer&apos;s home or premises that Freshtel Internet will do are only a Standard Installation.</li>
              <li>Free installation includes standard internal cabling of up to 50 meters of fibre, with no current charges. Any non-standard installation or additional cabling beyond 50 meters will incur RM300 charges, as determined by Freshtel Internet.</li>
              <li>
                Customers are responsible for the safety of Freshtel’s equipment (e.g., modem, router). All equipment must be returned in good working condition upon termination of service. Failure to do so may result in charges for any loss or damage, and will be billed to the customer’s account:
                <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200 mt-4 max-w-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-100">
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Equipment</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Charge (RM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-900">
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">ONU</td>
                        <td className="p-4 font-bold">RM150</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">WiFi 6 Router</td>
                        <td className="p-4 font-bold">RM400</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">WiFi 7 Router</td>
                        <td className="p-4 font-bold">RM800</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">Analog / Dect Phone</td>
                        <td className="p-4 font-bold">RM200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>By scheduling an installation, customers grant Freshtel Internet permission to access their home or premises on the agreed installation date and time, or on any subsequent rescheduled date and time.</li>
              <li>After Freshtel Internet accepts the customer&apos;s completed order, an account will be created and assigned a unique customer code. This code serves as the customer&apos;s official identification for all interactions, invoices, and support communications with Freshtel Internet.</li>
              <li>Customer&apos;s package(s) will be activated after the installation has completed.</li>
              <li>The internet service will begin on the activation date and for the duration as specified in the applicable plan that was subscribed. After this duration, the service will automatically renew on a monthly basis, unless the customer requests termination.</li>
              <li>Contact our customer support to change of information. Our personnel will provide a form for the customer to enter the new information, and the customer may need to submit it back to Freshtel Internet. Customer&apos;s information will be updated in the system in 3 working day(s).</li>
              <li>
                Voice Package will be charged on a usage basis. May refer table below for reference:
                <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200 mt-4 max-w-md">
                   <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-100">
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Call type</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Residential Rate</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Commercial Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-900">
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 font-medium">Local Calls</td>
                        <td className="p-4">RM0.10/min</td>
                        <td className="p-4">RM0.11/min</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4 font-medium">International</td>
                        <td className="p-4" colSpan={2}>Varies by country</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <strong>For Business Voice Plan:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Upgrade analog phone to DECT phone with RM150.</li>
                  <li>Get one (1) analog phone and one (1) DECT phone with RM250.</li>
                </ul>
              </li>
              <li>RM100 per month for 1 Fixed IP for residential package and business plan. A maximum of 5 IPs is allowed per account.</li>
              <li>Expired and/ or fully redeemed promotion code will not be entertained, although the registration is submitted to Freshtel Internet.</li>
            </ol>
          </div>

          {/* One Time Deal */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">One Time Deal</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>One Time Deal package is not allowed for transfer ownership, if the customer requests relocation (T&C apply).</li>
              <li>One Time Deal package is not refundable and non-transferable.</li>
              <li>Mesh Router for 500 Mbps and above provided.</li>
              <li>
                Upon expiry of the contract term:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>The subscription will revert to the original standard package pricing unless the customer opts to renew.</li>
                  <li>Customers may choose to renew by selecting an available renewal package, subject to T&C and updated price.</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* One Time Payment */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">One Time Payment</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>One Time Payment is an option allows customers to make an upfront payment for a subscription period of one (1) year or two (2) years based on the selected monthly package.</li>
              <li>Non-Malaysian customers using One Time Payment are exempt from the RM500 deposit.</li>
              <li>After the One Time Payment period ends, the subscription will automatically continue under monthly billing.</li>
              <li>One Time Payment is non-refundable and non-transferable</li>
            </ol>
          </div>

          {/* Lumos Campaign */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Lumos Campaign</h3>
            <ol className="list-decimal ml-6 space-y-6">
              <li>
                <strong>Eligibility:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Open to new and existing customers, Freshtel customers (unit owner only).</li>
                  <li>Property Assessment Document (Surat Taksiran Rumah) must be submitted. One owner qualifies one unit.</li>
                  <li>Each successful activation qualifies for one (1) LUMOS FLOAT Smart Projector.</li>
                  <li>Eligible existing customers must upgrade or renew to a 300Mbps or higher plan on a 36-month contract (24 months + 12-month add-on).</li>
                </ul>
              </li>
              <li>
                <strong>Redemption Method:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Redemption is done exclusively through LUMOS Malaysia’s official website at <a href="https://www.lumosprojector.my" target="_blank" className="text-blue-600 hover:underline">www.lumosprojector.my</a>.</li>
                  <li>The unique redemption code must be entered during checkout to receive the item free of charge.</li>
                </ul>
              </li>
              <li>
                <strong>Redemption Validity:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Code must be redeemed within one (1) month from the date of activation.</li>
                  <li>Customer Service will assist with redemption.</li>
                  <li>Expired or unused codes will not be reissued.</li>
                </ul>
              </li>
              <li>
                <strong>Product Warranty & Support:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>1-year limited warranty, automatically registered via the order ID.</li>
                  <li>Warranty claims and after-sales support are fully handled by LUMOS via <a href="mailto:support@lumosprojector.my" className="text-blue-600 hover:underline">support@lumosprojector.my</a>.</li>
                </ul>
              </li>
              <li>
                <strong>Non-Transferable:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Codes and items have no cash value and are non-transferable, non-refundable, and non-exchangeable.</li>
                  <li>Cannot be used in conjunction with other campaign offers.</li>
                </ul>
              </li>
              <li>
                <strong>Penalty for Early Termination:</strong>
                <p className="mt-1">RM500 penalty for the complimentary projector PLUS the remaining contract balance will be charged.</p>
              </li>
              <li>Freshtel reserves the right to modify or terminate this campaign without prior notice.</li>
            </ol>
          </div>

          {/* Win-Over */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Win-Over</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Eligibility is contingent upon validation of the applicant&apos;s current subscription with an alternative Internet Service Provider.</li>
              <li>The offer is expressly limited to new acquisitions and is not available for existing Freshtel customer accounts.</li>
              <li>Not applicable to existing Freshtel customers.</li>
              <li>Proof of subscription (e.g., bill or termination letter) required</li>
              <li>Not combinable with other promotions</li>
              <li>Freshtel reserves the right to amend or terminate the campaign at its discretion.</li>
            </ol>
          </div>

          {/* Monthly Billing Invoices */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Monthly Billing Invoices</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>A prorated bill will be generated upon installation, based on the activation within a month.</li>
              <li>The monthly bill will be generated on the 1st day of the month. The due date will fall on the last day of the month. Customer is advised to settle their bills prior to the due date to avoid any disruption.</li>
              <li>All bills, including prorated and monthly bills, will be sent to your written registered email address. Digital printed copies of the bill are not provided (unless, upon request, charges apply RM5).</li>
              <li>All prices shown are exclusive of 6% Service Tax.</li>
              <li>Customers are required to make full payments for their billing invoices. Partial payments are not allowed. This ensures that all units under one account remain active and avoids any suspension.</li>
              <li>Freshtel offers convenient cashless payments via online banking (FPX), e-wallets, credit cards, and JOMPAY through the Freshtel Internet portal and mobile app. For detailed instructions, please refer to the payment user guide available on the Freshtel Internet website.</li>
              <li>Auto debit is available on the Freshtel Internet. The customer may enable the features when paying the bill(s) with a debit or credit card for the first time. Kindly ensure that the credit(s) on the card are sufficient enough to make the payment.</li>
              <li>Failure on auto debit transaction would cause suspension if the bill(s) have not been paid before the bill&apos;s due date. The customer will not be notified of failure on auto debit transactions.</li>
              <li>Cash and bank transfers are not allowed. Do refer to &ldquo;Monthly Billing Invoices&rdquo; item (5) for available payment methods in Freshtel Internet.</li>
              <li>Customers are advised not to refresh or close the page or click the back button during the payment transaction, as this may lead to transaction failure.</li>
              <li>Customer will be blacklisted to CTOS and CBM if overdue invoice(s) are not being paid in two (2) months.</li>
              <li>Customer will be responsible for charges related to broken equipment(s) in cases of abuse, accidents, modifications, unauthorized repairs, or other causes not attributed to hardware defects.</li>
              <li>Replacement of equipment(s) will be conducted for a customer in cases as hardware defects.</li>
              <li>Refunds will be processed within 45 working days from the date Freshtel Internet receives the completed termination form and the equipment(s) are returned to Freshtel Internet.</li>
              <li>Re-open the account subject to approval by the management. The Customer must comply with the current terms and conditions of service. Additional verification or documentation may be required for account reopening.</li>
              <li>Re-open the account after termination is subject to a reactivation fee, as outlined in the service agreement. The customer must settle any outstanding balances and fees incurred up to the termination date.</li>
              <li>Re-open the account reinstatement after suspension requires the settlement of any outstanding balances or fees that led to the suspension. The customer must agree to adhere to all terms of the service agreement moving forward.</li>
              <li>Re-open account suspended due to non-payment can be reopened upon settlement of all outstanding invoices and fees. Reinstatement is conditional upon the customer&apos;s commitment to maintaining timely payments as per the revised payment schedule.</li>
            </ol>
          </div>

          {/* Suspension */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Suspension</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>All units under one account will be suspended if the customer is unable to make full payment within 45 days after the invoice is generated.</li>
              <li>All units in one account will be automatically reactivated in 10 minutes after the customer has made full payment for the overdue invoice(s) via online banking (FPX), e-wallets, credit cards, or JOMPAY through the Freshtel Internet portal and mobile app. Please contact customer support if the line is not restored after 10 minutes.</li>
              <li>Customers may contact customer support after making payment via terminal and must provide the payment receipt of the transaction as proof to reactivate the account.</li>
              <li>Customers may contact our customer support if they are still experiencing internet issues despite having successfully made a full payment. Customers shall provide proof of payment, including transaction receipt(s) or history, to facilitate assistance.</li>
              <li>Customers who are still bound by a contract with Freshtel Internet are required to pay the remaining balance of the billing invoice amount if their account has been suspended for more than 2 months.</li>
            </ol>
          </div>

          {/* Termination */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Termination</h3>
            <ol className="list-decimal ml-6 space-y-6">
              <li>Termination of services or accounts must be requested by email or call to our customer support.</li>
              <li>All outstanding balances, fees, or charges must be settled before the termination request can be processed.</li>
              <li>If the customer requests termination or cancels the Service before the expiry of the Contract Service Term, the customer is required to pay Freshtel Internet the remaining period of the contract.</li>
              <li>Customers may terminate an agreement or service at any time (i.e., prior to the expiry of the term) by providing Freshtel Internet Sdn Bhd with thirty (30) days&apos; written notice. The thirty (30) days will be calculated from the day on which Freshtel Internet Sdn Bhd receives the termination form.</li>
              <li>Customers must return all Freshtel Internet equipment (e.g., modem, router) upon termination of service.</li>
              <li>Customer must return to Freshtel in good working condition, fair wear and tear excepted.</li>
              <li>Customer must ensure that there are no missing, disassembled, modified, or non-original parts therein. Charges may be incurred. (Refer to point no. 16 outline Registration and Installation)</li>
              <li>
                Liable for all costs and expenses that Freshtel Internet incurs, including the cost and expenses for the aborted appointment. Or the customer to return the equipment, which shall be determined at the following address:
                <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 mt-4 space-y-2">
                  <p className="font-bold">Lot 11, 2nd Floor Retail,<br />Millerz Square @ Old Klang Road,<br />No. 357, Jalan Kelang Lama,<br />57000 Kuala Lumpur.</p>
                  <p>Customer Support: 03-9078 2963; support@freshtel.my</p>
                </div>
              </li>
              <li>
                The service will be officially terminated only upon all of the following are completed:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Submission of the termination form,</li>
                  <li>Return of all Freshtel Internet equipment (e.g., modem, router) in good condition, and</li>
                  <li>Full settlement of any outstanding balances or charges in the account.</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Upgrade and Downgrade Package */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Upgrade and Downgrade Package</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Customer is allowed to upgrade the package at any time.</li>
              <li>Customer is only allowed to downgrade the package after the current contract has ended.</li>
              <li>Customer is only allowed to apply for renewal after the current contract has ended.</li>
              <li>Upgrade, Renewal, or Downgrade requests will be handled within 5 working days after the request has been submitted to Freshtel Internet.</li>
              <li>Downgrade package only will be executed on the next billing date.</li>
            </ol>
          </div>

          {/* Relocation */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Relocation</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Relocation entails moving from the current registered unit to another unit within Freshtel Internet&apos;s coverage area, whether they are in the same or different buildings/locations.</li>
              <li>The customer must request one (1) month in advance to Freshtel Internet Customer Support before moving out of the registered unit. The request will be handled in 7 working day(s).</li>
              <li>An installation will be arranged for relocation. The customer is required to bring their equipment(s) to the new location. Installation services will be scheduled for the new unit.</li>
              <li>A relocation fee of RM80 will be charged for each relocation request. The relocation fee is subject to Sales and Service Tax (SST).</li>
              <li>If the request to relocate to a new address that is outside Freshtel Internet&apos;s coverage area, the customer will be required to pay a penalty equivalent to the remaining months of the contract if the customer elects to terminate our service while still bound by a contract.</li>
            </ol>
          </div>

          {/* Contract Transfer Ownership */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Contract Transfer Ownership</h3>
            <ol className="list-decimal ml-6 space-y-6">
              <li>Ownership transfer of services or accounts must be requested by email or call. Our Customer Support will assist with the process.</li>
              <li>
                Both parties, the current owner (transferor) and the intended new owner (transferee), must provide their consent to the ownership transfer. Additional verification or documentation may be required for transfer ownership, such as the transferee’s copy of identity card (front and back) or passport, or SSM*.
                <p className="mt-2 text-sm italic">* For commercial applicant only</p>
              </li>
              <li>All outstanding invoice(s) associated with the account must be settled before the ownership transfer can be processed.</li>
              <li>Upon approval of the ownership transfer, all rights, benefits, and responsibilities associated with the account or service will transfer to the new owner (transferee) within 7 working days.</li>
              <li>Freshtel Internet equipment should be in good condition before the process of transferring ownership happens. Failure to do so may result in charges for any loss or damage, and a bill to the existing account.</li>
            </ol>
          </div>

          {/* Freeze account */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Freeze account</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Customer needs to pay RM53.00 (inclusive of SST) as the service charge to activate and deactivate the freeze service. Freshtel Internet will issue an invoice for the service charge and send it to the registered email.</li>
              <li>The contract of the package subscription will be extended once the account is reactive, depending on the freezing period.</li>
              <li>Customer has to request in 2 weeks in advance to Freshtel Internet. The request will be handled within 7 working days after settling all outstanding invoices (s) and the freezing fee (RM 53.00) before the requested freeze service can be processed.</li>
              <li>Freeze service activation will be conducted once the payment for the service charges is received and verified by the Freshtel Internet.</li>
              <li>Each account is allowed to request the freeze service once per year and a suspension period from a minimum of one (1) month to a maximum of six (6) months to freeze an active internet service package.</li>
              <li>The freeze service package will auto-reactivate after the maximum period has lapsed. The internet service will resume at the end of the maximum period, and the subscriber will receive the monthly invoice.</li>
              <li>Only the customer can request for Freeze service.</li>
              <li>Only the customer’s requests will be allowed for the reactivation of the account. The request must be submitted via email or a call to Freshtel Internet.</li>
              <li>Customer is responsible for the equipment under good condition and is responsible for charges related to broken equipment in cases of abuse, accidents, modifications, unauthorized repairs, or other causes not attributed to hardware defects.</li>
            </ol>
          </div>

          {/* Complimentary Usage Equipment */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Complimentary Usage Equipment</h3>
            <div className="space-y-6">
              <p>A complimentary Mesh Router is provided only with selected price plans.</p>
              <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200 max-w-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100">
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Bandwidth</th>
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Contract Term</th>
                      <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Mesh Router Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 text-zinc-900">
                    <tr className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4">300 Mbps</td>
                      <td className="p-4 font-medium">30 months</td>
                      <td className="p-4">WiFi 6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic">Note: Router models and eligibility criteria are subject to change based on Freshtel Internet’s policy and equipment availability</p>
            </div>
          </div>

          {/* Additional Mesh Router */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Additional Mesh Router</h3>
            <ol className="list-decimal ml-6 space-y-6">
              <li>The recurring charge will apply for the full contract duration and continue automatically while the service remains active.</li>
              <li>
                The eligibility criteria are as follows:
                <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200 mt-4 max-w-xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-100">
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Bandwidth</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Mesh Router Included</th>
                        <th className="p-4 border-b border-zinc-200 font-bold text-zinc-900">Price (per month)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-zinc-900">
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">300 Mbps - 500 Mbps</td>
                        <td className="p-4 font-medium">WiFi 6</td>
                        <td className="p-4 font-bold text-blue-600">RM20</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="p-4">1 Gbps - 2 Gbps</td>
                        <td className="p-4 font-medium">WiFi 7</td>
                        <td className="p-4 font-bold text-blue-600">RM30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm italic">*Subject to 6% SST</p>
                <p className="mt-2 text-sm italic">Note: Router models and eligibility criteria are subject to change based on Freshtel Internet’s policy and equipment availability</p>
              </li>
            </ol>
          </div>

          {/* Grace Period */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Grace Period</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>A 30-day grace period is offered exclusively to new subscribers.</li>
              <li>Grace period applied if the customer cancels, only the prorated charges will apply.</li>
              <li>All equipment provided by Freshtel Internet must be returned in good working and original condition, together with the original packaging, within seven (7) working days form the cancellation confirmation.</li>
              <li>If any equipment is damaged, missing, not returned, incomplete, or returned without the original packaging. Replacement charges will apply and be billed to the customer&apos;s account. (Refer to &ldquo;Registration &amp; Installation - Equipment Charges&rdquo;.)</li>
              <li>Cancellations made after the 30-day grace period will be subject to early termination fee in accordance with the terms of the subscribed plan. (Refer to &ldquo;Termination&rdquo;)</li>
              <li>Freshtel reserves the right to suspend or terminate services at any time during the grace period or contract period in cases of violation of terms.</li>
            </ol>
          </div>

          {/* Quality of Services */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">Quality of Services</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Equipment Provision: Freshtel Internet reserves the right to provide suitable equipment (s) to support the internet service for customers.</li>
              <li>Installation Standard: All equipment (s) and component(s) will be installed according to Freshtel Internet&apos;s standard procedures.</li>
              <li>Customers are not recommended to replace the equipment (s) provided by Freshtel Internet in order to maximise the performance of the internet service. If a customer insists on switching the equipment (s) provided by Freshtel Internet, they should do so <strong>AT THEIR OWN RISK</strong>. It&apos;s essential to understand that any such changes may impact the performance of the internet service.</li>
              <li>Responsibility: Freshtel Internet is not responsible for the availability, reliability, or performance of websites or online services hosted by third-party providers. Issues related to the website provider&apos;s servers, network, or maintenance activities fall outside Freshtel Internet scope of control.</li>
              <li>Customer Support: If internet service users encounter difficulties accessing a specific website or online service, Freshtel Internet recommends contacting the website provider directly for assistance. They will be able to address issues related to their service and infrastructure.</li>
              <li>Notification: While Freshtel Internet strives to inform customers of known issues impacting Freshtel Internet services, Freshtel Internet may not always be aware of problems affecting third-party websites or services. Freshtel Internet encourages customers to report any persistent access issues, and Freshtel Internet will endeavor to provide assistance and investigate connectivity problems from the Freshtel Internet end.</li>
              <li>Limitation of Liability: Freshtel Internet liability for any disruption or inability to access websites or online services provided by third parties is limited to the extent set forth in Freshtel Internet general terms and conditions. Freshtel Internet does not assume responsibility for financial losses, damages, or inconveniences incurred due to access issues with third-party websites or services.</li>
              <li>Continued Efforts: Freshtel Internet continuously works to ensure that the Freshtel Internet network and services provide optimal connectivity and access. Freshtel Internet appreciates your understanding and patience in instances where issues with third-party websites or services impact your experience.</li>
              <li>Violation of Policy: If internet service users violate this policy, Freshtel Internet reserves the right to take action, which may include managing customers’ bandwidth, suspending, or terminating the service. Freshtel Internet will exercise discretion in determining the appropriate response.</li>
              <li>Reconnection Fee: Should Freshtel Internet choose to reconnect a customer’s service, a reconnection fee may apply to reactivate it.</li>
              <li>Reporting Unacceptable Use: If internet service users encounter any illegal, unlawful, or unacceptable use of our services, please call 03-9078 2963 or email <a href="mailto:support@freshtel.my" className="text-blue-600 hover:underline">support@freshtel.my</a>.</li>
              <li>User Responsibility and Risk: Users accessing websites via the internet service do so at their own risk.</li>
              <li>Malicious Software and Cyberattacks: If a user’s laptops, personal computers, smartphones, or other access equipment become infected with malicious software that allows a third party to launch a distributed denial of service attack or other cyberattacks using the Fibre Internet Service, and if such an attack compromises or affects Freshtel Internet’s network, Freshtel Internet will immediately suspend the user’s internet service.</li>
              <li>Mitigating Precautions: Users are responsible for taking reasonable precautions to mitigate against such possibilities. Installing current and updated anti-virus software is essential to prevent such incidents.</li>
              <li>Liability for Costs and Expenses: If the attack occurs due to the user’s failure to take necessary precautions, they may be liable to compensate Freshtel Internet for any costs or expenses incurred.</li>
              <li>Troubleshooting will be arranged from 9.00 am to 4.00 pm on Monday to Friday, and 10.00 am to 12.00 pm on Saturday, depending on the availability of the schedule.</li>
            </ol>
          </div>

          {/* General */}
          <div className="text-zinc-900">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-6 uppercase border-b-2 border-blue-100 pb-2">General</h3>
            <ol className="list-decimal ml-6 space-y-4">
              <li>Freshtel Internet is entitled to make any alteration or changes to the service(s) in whole or any part thereof, or withdraw or suspend, disconnect or terminate the service(s) or any part thereof as we deem fit without notice to you and we will not be liable to you or any third party for any loss (including loss of revenue), loss of service(s) or connectivity or inconvenience as a result thereof. Where reasonably practicable, we will endeavour to give you reasonable advance notice of such changes, be it through written notice, electronic mail, our Bill, our website, or such other form as we deem appropriate.</li>
              <li>By providing your details, you are giving Freshtel Internet the approval to manage your personal details in accordance with the Personal Data Protection Act 2010.</li>
              <li>Freshtel Internet may disclose customer’s personal information such as name, contact information, service usage data, and any other relevant information necessary to fulfil the purpose with authorized party(ies) for purposes that include, but are not limited to, enhancing customer experience, conduction research and analysis, and upselling the packages.</li>
              <li>All authorized parties are required to adhere to Freshtel Internet’s data protection policies and are prohibited from using customers’ information for purposes other than those specified by Freshtel Internet.</li>
              <li>By continuing to use Freshtel Internet’s services, you consent to the sharing of your information with authorized parties as described in this clause. If the customer does not agree with this, please contact customer support to inform not to share the information with the authorized party(ies).</li>
            </ol>
          </div>
        </section>

        <div className="mt-16 text-center border-t border-zinc-100 pt-8">
          <Link href="/" className="inline-block bg-[#1B365D] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-lg">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
