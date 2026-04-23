"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Button from "@/components/ui/Button";

function FeatureCard({
  icon,
  title,
  desc,
  aosDelay = 0,
  compact = false,
}: {
  icon: string;
  title: string;
  desc: string;
  aosDelay?: number;
  compact?: boolean;
}) {
  return (
    <div
      className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 relative overflow-hidden flex flex-col h-full"
      style={{ padding: compact ? "1rem" : "1.5rem" }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="600"
    >
      <div className="absolute w-12 h-12 bg-blue-500/10 rounded-full blur-[20px] -top-2 -left-2" />
      <div className="relative z-10 flex flex-col flex-1">
        <div
          className="rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-3 shrink-0"
          style={{
            width: compact ? "2.25rem" : "2.75rem",
            height: compact ? "2.25rem" : "2.75rem",
          }}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
const LOCATIONS = [
  {
    city: "San Francisco, CA",
    address: "Pier 26, Suite 200\nSan Francisco, CA 94105",
    phone: "+1 (415) 555-0123",
    image: "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    city: "Mesa, AZ",
    address: "Innovation Square\nMesa, AZ 85201",
    phone: "+1 (480) 555-0198",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
];

const HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 10:00 PM", open: true },
  { day: "Saturday – Sunday", hours: "9:00 AM – 8:00 PM", open: true },
  { day: "Holidays", hours: "Closed", open: false },
];

const CONTACTS = [
  { icon: "mail", label: "Email", value: "support@sofonn.com", href: "mailto:support@sofonn.com" },
  { icon: "call", label: "Phone", value: "+216 22 749 850", href: "tel:+21622749850" },
  { icon: "location_on", label: "Address", value: "445 Bayshore Blvd,\nSan Francisco, CA 94124" },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });

    const linkIcons = document.createElement("link");
    linkIcons.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
    linkIcons.rel = "stylesheet";
    document.head.appendChild(linkIcons);
    return () => {
      document.head.removeChild(linkIcons);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We will respond within 24 hours.");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className=" min-h-screen font-['Segoe_UI',system-ui,sans-serif]">
      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
     
        
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-[90%] max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Texte Hero */}
            <div className="space-y-7" data-aos="fade-right">
              <h1
                className="font-extrabold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "#ffffff" }}
              >
                L'excellence<br />
                au-delà de <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  l'horizon.
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-md text-slate-300">
                Accédez à votre tableau de bord maritime et gérez vos flux logistiques avec la sérénité d'un port sûr.
              </p>
              <div className="flex gap-10 pt-2">
                <div>
                  <p className="text-2xl font-black text-blue-400 leading-none">24/7</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Support Expert</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-400 leading-none">100%</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Sécurisé</p>
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div
              className="rounded-3xl p-8 md:p-10 transition-all duration-300 border border-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
              }}
              data-aos="fade-left"
            >
              <h2 className="text-2xl font-bold text-white mb-1">Contactez-nous</h2>
              <p className="text-sm text-white/40 mb-7">Tous les champs sont requis</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nom Complet" name="fullName" type="text" placeholder="Jean Dupont" value={formData.fullName} onChange={handleChange} />
                  <Field label="Email" name="email" type="email" placeholder="jean@entreprise.com" value={formData.email} onChange={handleChange} />
                </div>
                <Field label="Sujet" name="subject" type="text" placeholder="Objet de votre demande..." value={formData.subject} onChange={handleChange} />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    text="Envoyer le message" 
                    backgroundColor="#3b82f6"
                    showArrow={true}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Hours Section */}
      <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8 transition-all duration-200 border border-2 border-blue-500/25 hover:bg-blue-500/5"
              style={{ background: "rgba(255,255,255,0.03)" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className=" font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-xl">support_agent</span>
                Get in Touch
              </h3>
              <div className="space-y-6">
                {CONTACTS.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-blue-400" style={{ fontSize: "1.1rem" }}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/35 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="t transition-colors font-medium text-sm whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <span className="">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8 transition-all duration-200 border border-2 border-blue-500/25 hover:bg-blue-500/5"
              style={{ background: "rgba(255,255,255,0.03)" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-xl">schedule</span>
                Opening Hours
              </h3>
              <div className="space-y-1">
                {HOURS.map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center py-3.5 border-b border-white/[0.06] last:border-0">
                    <span className=" text-sm">{day}</span>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        open
                          ? "text-blue-300 bg-blue-500/10 border border-blue-500/20"
                          : "text-red-400 bg-red-500/10 border border-red-500/20"
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 pt-4 border-t border-white/[0.06]">
                <span className="material-symbols-outlined text-blue-400 text-xl shrink-0">info</span>
                <span className="text-white/35 text-xs leading-relaxed">
                  Our expert support team is available during opening hours.
                  For maritime emergencies, contact our 24/7 emergency line.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Locations Section */}
      <section className="py-24 px-4 ">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-3">Nos Bureaux aux États-Unis</h2>
            <p className="text-white/40">Points stratégiques pour une coordination logistique mondiale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {LOCATIONS.map(({ city, address, phone, image }, idx) => (
              <div
                key={city}
                className="group rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-blue-500/30 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image} 
                    alt={city} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{city}</h3>
                  </div>
                </div>
                
                <div className="p-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-400">location_on</span>
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-blue-400">call</span>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
                      {phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <span className="material-symbols-outlined text-blue-400 text-sm">check_circle</span>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Opérationnel</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
      />
    </div>
  );
}
