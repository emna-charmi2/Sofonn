'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
          * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; }
          .material-icons-round { font-family: 'Material Icons Round'; font-weight: normal; font-style: normal; line-height: 1; display: inline-flex; align-items: center; }
          
          .glass-card {
            background: rgba(30,41,59,0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.05);
          }
          .glow-border:focus {
            box-shadow: 0 0 0 2px rgba(14,165,233,0.2);
            border-color: #0EA5E9 !important;
            outline: none;
          }
          input, select, textarea {
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          @keyframes pulse-map { 0%,100%{opacity:1} 50%{opacity:0.5} }
          .pulse-map { animation: pulse-map 2s infinite; }
        `}</style>

        {/* ── NAV ── */}

        <main className=" mx-auto px-4  lg:px-8 py-8 space-y-8 bg-[#07090f]">
           <section className="py-24 bg-white" data-purpose="why-choose-us">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">Built for the Realities <br/>of the Open Sea</h2>
                    <div className="space-y-8">
                    <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor"><path d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.828a5 5 0 117.07 0M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Real-Time Data Streams</h4>
                    <p className="text-slate-600">Low-latency satellite integration keeps onshore managers and offshore vessels perfectly synchronized.</p>
                    </div>
                    </div>
                    <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Offline Accessibility</h4>
                    <p className="text-slate-600">Our edge-computing core allows seafarers to work flawlessly without internet, syncing automatically when connectivity returns.</p>
                    </div>
                    </div>
                    <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" ><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Advanced AI Analytics</h4>
                    <p className="text-slate-600">Sophisticated algorithms turn raw sensor data into actionable insights for cost reduction and safety.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="relative">
                    <div className="absolute -inset-4 bg-accent/20 rounded-custom blur-3xl opacity-30"></div>
                    <img alt="Technology in Action" className="relative z-10 rounded-custom shadow-2xl border border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNP7iEVfddo8EnO9Ofqjeh18rXZZiEmDKUcIOuWHAV3XjQVUrfKPV92gWX_cpieg1z3tCw_0BQwJypuQe3cQAtgP6ITzFHm3cm5KVG_5Q98XtaMDlKJZubT-4r0qtWktXWUBgyrdFEJSHNhkBjuQXeD6Pk3qzjA00ifym_SidoPVnrLpzen1ZZnbBwBGJ-LVYaK1U5DKr3HM-cmKjF7YEb2TI39RcONFKI5HW46FV0R8PTOyl_SUynQdVGOVxqeIkEZyDBk5QxkX6l"/>
                    </div>
                    </div>
                    </div>
                  </section>
          {/* ── HERO ── */}
          <section
            className="relative h-110 rounded-3xl overflow-hidden shadow-2xl "
            style={{
              background: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 "
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(2,6,23,0.8) 100%)' }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">We're here to help</h1>
              <p className="text-slate-300 max-w-xl text-lg leading-relaxed">
                Have questions or feedback? Reach out to our team and we'll get back to you as soon as possible. Our experts are ready to assist you.
              </p>
            </div>
          </section>

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── ASIDE ── */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-icons-round text-[#0EA5E9]">info</span>
                <h2 className="text-xl font-bold dark:text-white">Get in Touch</h2>
              </div>

              {/* Contact items */}
              <div className="space-y-4">
                {[
                  { icon: 'email', label: 'Email Us', value: 'support@sofonn.com', href: 'mailto:support@sofonn.com', isLink: true },
                  { icon: 'call', label: 'Call Us', value: '+1 (555) 123-4567', href: 'tel:+15551234567', isLink: true },
                  { icon: 'location_on', label: 'Visit Us', value: '123 Tech Avenue, Silicon Valley\nCA 94025, USA', isLink: false },
                ].map(({ icon, label, value, href, isLink }) => (
                  <div key={label} className="flex items-start gap-4 p-1">
                    <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 flex-shrink-0">
                      <span className="material-icons-round text-[#0EA5E9]">{icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">{label}</p>
                      {isLink ? (
                        <a href={href} className="text-slate-700 dark:text-slate-200 font-medium hover:text-[#0EA5E9] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-slate-100 dark:bg-[#1E293B] rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="material-icons-round text-[#0EA5E9] text-sm">schedule</span>
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Mon - Fri:', hours: '9:00 AM - 6:00 PM', closed: false },
                    { day: 'Saturday:', hours: '10:00 AM - 4:00 PM', closed: false },
                    { day: 'Sunday:', hours: 'Closed', closed: true },
                  ].map(({ day, hours, closed }) => (
                    <div key={day} className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{day}</span>
                      <span className={closed ? 'text-[#0EA5E9] font-medium' : 'text-slate-900 dark:text-white font-medium'}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                {/* Stylized map background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a182e] via-[#0d2040] to-[#020617]" />
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0EA5E9" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                </svg>
                <div className="absolute inset-0 bg-[#020617]/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#0EA5E9]/20 p-4 rounded-full pulse-map">
                    <span className="material-icons-round text-[#0EA5E9] text-3xl">place</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* ── FORM ── */}
            <div className="lg:col-span-8">
              <div className="glass-card dark:bg-[#1E293B] rounded-3xl p-8 md:p-10 shadow-xl">
                <h2 className="text-2xl font-bold mb-8 dark:text-white">Send us a Message</h2>

                <div className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="glow-border w-full bg-white dark:bg-[#0F172A]/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="glow-border w-full bg-white dark:bg-[#0F172A]/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

        

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1 block">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you today?"
                      className="glow-border w-full bg-white dark:bg-[#0F172A]/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white resize-none"
                    />
                  </div>

                  
                    {/* 
                  <div className="flex items-center gap-3 cursor-pointer">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-5 w-5 border-2 border-slate-300 dark:border-slate-700 rounded bg-transparent text-[#0EA5E9] cursor-pointer accent-[#0EA5E9]"
                    />
                    <label htmlFor="terms" className="text-sm text-slate-500 dark:text-slate-400 cursor-pointer select-none">
                      I agree to the{' '}
                      <a href="#" className="text-[#0EA5E9] hover:underline">privacy policy</a>
                      {' '}and data processing terms.
                    </label>
                  </div>*/}

                  {/* Submit */}
                  <button
                    type="button"
                    className="w-full md:w-auto px-8 py-4 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
                    style={{
                      background: 'linear-gradient(to right, #0EA5E9, #2563EB)',
                      boxShadow: '0 8px 20px rgba(14,165,233,0.2)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(to right, #38bdf8, #3b82f6)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(to right, #0EA5E9, #2563EB)')}
                  >
                    <span className="material-icons-round text-xl">send</span>
                    Send Message
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>

     

      </div>
    </div>
  );
}