'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu pourras connecter à ton backend ou à un service comme Formspree / Resend
    alert("Message envoyé ! (simulation)");
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

        * { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        .material-icons-round { font-family: 'Material Icons Round'; }
      ` }} />

      <div className="min-h-screen section" style={{ color: 'var(--text-primary)' }}>
        {/* HERO */}
        <section className="relative h-[460px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2000')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/80 via-[var(--bg-base)]/90 to-[var(--bg-base)]" />
          <div className="absolute inset-0 bg-[radial-gradient(at_center,var(--accent)_0%,transparent_70%)] opacity-20" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase">Support disponible</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6" style={{ color: 'var(--text-primary)' }}>
              We're here to help
            </h1>
            <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
              Des questions sur nos solutions ? Besoin d'assistance technique ou commerciale ? 
              Notre équipe est prête à vous répondre rapidement.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 md:px-8 pb-24 -mt-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* ASIDE - Informations de contact */}
            <aside className="lg:col-span-5 space-y-8">
              <div className="glass p-8 rounded-3xl backdrop-blur-xl" style={{ border: '1px solid var(--border-card)', background: 'var(--bg-card)' }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round text-white text-3xl">support_agent</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Get in Touch</h2>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Nous répondons sous 24h</p>
                  </div>
                </div>

                <div className="space-y-7">
                  {[
                    { 
                      icon: 'email', 
                      label: 'Email', 
                      value: 'support@sofonn.com', 
                      href: 'mailto:support@sofonn.com' 
                    },
                    { 
                      icon: 'phone', 
                      label: 'Téléphone', 
                      value: '+33 1 76 36 00 00', 
                      href: 'tel:+33176360000' 
                    },
                    { 
                      icon: 'location_on', 
                      label: 'Adresse', 
                      value: 'Port de Marseille\n13002 Marseille, France' 
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-5">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <span className="material-icons-round text-cyan-400 text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="uppercase text-xs tracking-widest font-semibold text-slate-500 mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-slate-200 hover:text-cyan-400 transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-200 whitespace-pre-line leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horaires */}
              <div className="glass p-8 rounded-3xl backdrop-blur-xl" style={{ border: '1px solid var(--border-card)', background: 'var(--bg-card)' }}>
                <h3 className="font-semibold flex items-center gap-3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  <span className="material-icons-round text-cyan-400">schedule</span>
                  Horaires d'ouverture
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    { day: 'Lundi – Vendredi', hours: '9h00 – 18h00' },
                    { day: 'Samedi', hours: '10h00 – 14h00' },
                    { day: 'Dimanche', hours: 'Fermé' },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-1 border-b border-white/10 last:border-0">
                      <span className="text-slate-400">{item.day}</span>
                      <span className={`font-medium ${item.hours === 'Fermé' ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* FORMULAIRE */}
            <div className="lg:col-span-7">
              <div className="glass p-10 md:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl" style={{ border: '1px solid var(--border-card)', background: 'var(--bg-level-2)' }}>
                <h2 className="text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Envoyez-nous un message</h2>
                <p className="mb-10" style={{ color: 'var(--text-secondary)' }}>Tous les champs sont obligatoires</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Nom complet</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="w-full rounded-2xl px-5 py-4 focus:outline-none transition-all"
                        style={{ background: 'var(--bg-level-1)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Email professionnel</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean@entreprise.com"
                        className="w-full rounded-2xl px-5 py-4 focus:outline-none transition-all"
                        style={{ background: 'var(--bg-level-1)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Votre message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Décrivez votre besoin, votre projet ou votre question..."
                      className="w-full rounded-3xl px-5 py-4 focus:outline-none resize-y transition-all"
                      style={{ background: 'var(--bg-level-1)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.985] shadow-xl"
                    style={{ background: 'linear-gradient(to right, var(--accent-light), var(--accent))', color: 'var(--text-primary)' }}
                  >
                    <span className="material-icons-round">send</span>
                    Envoyer le message
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-4">
                    Nous respectons votre vie privée. Vos données ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}