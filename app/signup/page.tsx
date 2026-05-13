'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STEPS = ['PLAN', 'DETAIL', 'ADD-ON', 'PREVIEW'];

const LOCATIONS = [
  "168 Park Selayang", "188 Suites", "1Medini Condominium", "1Medini Condominium Retails",
  "22 Macalisterz", "8scape Residensi", "99 Residence", "ANYA Shorea Park Residence 2",
  "ARC Austin Hill @ Johor", "Admiral Residences @ Kota Laksamana", "Aera Residence",
  "Alanis Residence", "Alinea Suites", "Almyra Residence", "Alstonia Residence Sungai Long",
  "Amber Cove Premier Suites Melaka", "Amberside", "Anderson Residences @ Ipoh",
  "Anggerik Wira", "Anggun Residences", "Apex Tower @ CyberSquare",
  "Apex Tower Retails @ CyberSquare", "Aradia Residence @ Lake City",
  "Aradia Residence Commercial @ Lake City"
  // ... Truncated for brevity as per instructions, only showing a sample
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    applicantType: 'RESIDENTIAL',
    plan: '',
    address: { unit: '', street: '', street2: '', city: '', zip: '', state: '', country: 'Malaysia' },
    isTenant: false,
    installationDate: '',
    installationSession: '',
    nationality: 'MALAYSIAN',
    name: '',
    nricPassport: '',
    email: '',
    mobile: '',
    termsAgreed: false,
    payMethod: 'pay_later'
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-center text-zinc-900 mb-12">Normal Subscription</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-16 px-4">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center relative">
                <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                  step > i + 1 ? 'bg-[#EF4444] border-[#EF4444]' : 
                  step === i + 1 ? 'bg-white border-[#EF4444]' : 'bg-[#E5E7EB] border-[#E5E7EB]'
                }`}>
                  {step > i + 1 && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`absolute -bottom-8 text-[10px] font-black tracking-widest uppercase whitespace-nowrap ${
                  step === i + 1 ? 'text-[#EF4444]' : 'text-zinc-400'
                }`}>
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 sm:w-24 h-1 mx-2 sm:mx-4 transition-all ${
                  step > i + 1 ? 'bg-[#EF4444]' : 'bg-[#E5E7EB]'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F9F8F3] rounded-3xl p-8 sm:p-12 shadow-sm border border-zinc-100">
          {step === 1 && (
            <Step1Plan formData={formData} setFormData={setFormData} onNext={nextStep} />
          )}
          {step === 2 && (
            <Step2Details formData={formData} setFormData={setFormData} onNext={nextStep} onPrev={prevStep} />
          )}
          {step === 3 && (
            <Step3Addons onNext={nextStep} onPrev={prevStep} />
          )}
          {step === 4 && (
            <Step4Preview formData={formData} onPrev={prevStep} />
          )}
        </div>
      </div>
    </div>
  );
}

function Step1Plan({ formData, setFormData, onNext }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Installation Location</label>
          <input 
            list="locations"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
            placeholder="Search location..."
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
          <datalist id="locations">
            {LOCATIONS.map(l => <option key={l} value={l} />)}
          </datalist>
          <p className="mt-2 text-xs text-zinc-500 font-bold">
            Click <a href="#" className="text-[#EF4444]">Here</a> if you unable to find your Installation Location
          </p>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Please Confirm</label>
          <div className="flex gap-4">
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-sm tracking-widest transition-all ${
                formData.applicantType === 'RESIDENTIAL' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, applicantType: 'RESIDENTIAL'})}
            >
              RESIDENTIAL
            </button>
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-sm tracking-widest transition-all ${
                formData.applicantType === 'BUSINESS' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, applicantType: 'BUSINESS'})}
            >
              BUSINESS
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Choose Your Plan</label>
          <select 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold appearance-none"
            value={formData.plan}
            onChange={(e) => setFormData({...formData, plan: e.target.value})}
          >
            <option value="">--Select Internet Package--</option>
            <option value="100mbps">100Mbps - RM69</option>
            <option value="300mbps">300Mbps - RM99</option>
            <option value="500mbps">500Mbps - RM139</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Address</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 mb-4 focus:border-[#EF4444] outline-none transition-all font-bold" 
            placeholder="Unit No."
            value={formData.address.unit}
            onChange={(e) => setFormData({...formData, address: {...formData.address, unit: e.target.value}})}
          />
          <input className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-xl px-6 py-4 mb-4 font-bold text-zinc-400" placeholder="Street" readOnly />
          <div className="grid grid-cols-2 gap-4">
            <input className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-xl px-6 py-4 font-bold text-zinc-400" placeholder="City" readOnly />
            <input className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-xl px-6 py-4 font-bold text-zinc-400" placeholder="Zip" readOnly />
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Preferred Installation</label>
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="date" 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
              value={formData.installationDate}
              onChange={(e) => setFormData({...formData, installationDate: e.target.value})}
            />
            <select 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
              value={formData.installationSession}
              onChange={(e) => setFormData({...formData, installationSession: e.target.value})}
            >
              <option value="">Session</option>
              <option value="morning">Morning (9AM-1PM)</option>
              <option value="afternoon">Afternoon (2PM-6PM)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center mt-8">
        <button 
          onClick={onNext}
          className="bg-[#EF4444] text-white px-20 py-4 rounded-xl font-black text-lg tracking-widest shadow-xl hover:bg-red-600 hover:scale-[1.02] transition-all"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

function Step2Details({ formData, setFormData, onNext, onPrev }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Nationality</label>
          <div className="flex gap-4">
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, nationality: 'MALAYSIAN'})}
            >
              MALAYSIAN
            </button>
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'NON-MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, nationality: 'NON-MALAYSIAN'})}
            >
              NON-MALAYSIAN
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Full Name</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">NRIC / Passport</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
            value={formData.nricPassport}
            onChange={(e) => setFormData({...formData, nricPassport: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Email</label>
          <input 
            type="email"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Primary Contact</label>
          <div className="flex bg-white border-2 border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#EF4444] transition-all">
            <div className="bg-zinc-100 flex items-center px-4 border-r-2 border-zinc-200 font-bold text-zinc-500">+60</div>
            <input 
              className="flex-1 px-6 py-4 outline-none font-bold"
              placeholder="01XXXXXXXX"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Identity Proof (IC/Passport)</label>
          <div className="relative border-2 border-dashed border-zinc-200 rounded-xl p-8 flex flex-col items-center justify-center bg-white hover:bg-zinc-50 transition-all cursor-pointer">
            <svg className="w-8 h-8 text-[#EF4444] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Upload Document</span>
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <p className="mt-2 text-[10px] text-zinc-400 font-bold text-center italic">*Support a single file only (PDF, JPG, PNG)</p>
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col items-center gap-8 mt-12">
        <label className="flex items-center gap-4 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-6 h-6 rounded-md border-2 border-zinc-200 text-[#EF4444] focus:ring-[#EF4444]"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({...formData, termsAgreed: e.target.checked})}
          />
          <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-900 transition-all">
            I read and agree with the <a href="#" className="text-[#EF4444] underline uppercase tracking-widest text-xs">Terms & Conditions</a>
          </span>
        </label>
        <div className="flex gap-4 w-full justify-center">
          <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all">PREV</button>
          <button onClick={onNext} className="flex-1 max-w-[200px] bg-[#EF4444] text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-all">NEXT</button>
        </div>
      </div>
    </div>
  );
}

function Step3Addons({ onNext, onPrev }: any) {
  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase tracking-tightest">Enhance Your Experience</h3>
      <p className="text-zinc-500 font-bold mb-12">Available Add-ons for your subscription</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl border-2 border-zinc-100 shadow-sm relative overflow-hidden group hover:border-[#EF4444] transition-all">
          <div className="absolute top-0 right-0 bg-[#EF4444] text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all">Popular</div>
          <h4 className="text-lg font-black mb-2 text-zinc-900">Voice Plan</h4>
          <p className="text-sm text-zinc-400 font-bold mb-6">Stay connected with crystal clear voice</p>
          <div className="text-2xl font-black text-[#EF4444] mb-8">From RM10/mo</div>
          <button className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-400 font-black hover:bg-[#EF4444] hover:text-white transition-all">SELECT</button>
        </div>

        <div className="bg-white p-8 rounded-2xl border-2 border-zinc-100 shadow-sm relative overflow-hidden group hover:border-[#EF4444] transition-all opacity-80">
          <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
             <span className="bg-zinc-900 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl">Coming Soon</span>
          </div>
          <h4 className="text-lg font-black mb-2 text-zinc-900">Mesh Router</h4>
          <p className="text-sm text-zinc-400 font-bold mb-6">Experience dead-zone free WiFi 6</p>
          <div className="text-black font-black mb-8 opacity-0">...</div>
          <button className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-400 font-black disabled:cursor-not-allowed cursor-default">SELECT</button>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all text-xs tracking-widest uppercase">PREV</button>
        <button onClick={onNext} className="flex-1 max-w-[200px] bg-[#EF4444] text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-all text-xs tracking-widest uppercase">NEXT</button>
      </div>
    </div>
  );
}

function Step4Preview({ formData, onPrev }: any) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
          Your Subscription Fee is{' '}
          <span className="text-[#00a1e1]">RM69</span> / Month
        </h2>
        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest italic">*Subject to 6% SST</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y-2 border-zinc-200 py-12">
        <div className="space-y-6">
          <Section title="Installation Location" value={formData.location || '-'} />
          <Section title="Address" value={`${formData.address.unit || '-'}, FreshTel Building`} />
          <Section title="Preferred Date" value={formData.installationDate || '-'} />
        </div>
        <div className="space-y-6">
          <Section title="Plan Selected" value={formData.plan ? formData.plan.toUpperCase() : '-'} />
          <Section title="Applicant Type" value={formData.applicantType} />
          <Section title="NRIC / Passport" value={formData.nricPassport || '-'} />
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tightest flex items-center gap-4">
           <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs leading-none">🏁</span>
           Order Summary
        </h3>
        
        <div className="bg-white rounded-2xl p-8 border-2 border-zinc-100 shadow-sm">
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
             <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">Monthly Fee</span>
             <span className="font-black text-zinc-900">RM 69.00</span>
           </div>
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
             <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">SST (6%)</span>
             <span className="font-black text-zinc-900">RM 0.00</span>
           </div>
           <div className="flex justify-between items-center pt-4">
             <span className="font-black text-zinc-900 text-lg uppercase tracking-widest">Total</span>
             <span className="font-black text-[#EF4444] text-3xl">RM 69.00</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* Placeholder for reCAPTCHA */}
        <div className="w-full max-w-[300px] h-[78px] bg-white border-2 border-zinc-200 flex items-center justify-center rounded-lg shadow-sm">
          <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">reCAPTCHA Challenge</span>
        </div>

        <div className="flex gap-4 w-full justify-center">
          <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all text-xs tracking-widest">PREV</button>
          <button className="flex-1 max-w-[300px] bg-zinc-900 text-white py-4 rounded-xl font-black shadow-xl hover:scale-[1.02] transition-all text-xs tracking-widest">PROCEED TO COMPLETE</button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, value }: { title: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-lg font-black text-zinc-900 leading-tight">{value}</p>
    </div>
  );
}
