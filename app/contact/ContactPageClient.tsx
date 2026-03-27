"use client";

import { useState } from "react";

import Heading from "@/app/components/ui/Heading";
import TextBlock from "@/app/components/ui/TextBlock";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! (simulation)");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

        * { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        .material-icons-round { font-family: 'Material Icons Round'; }
      `,
        }}
      />

      <div className="ds-page">
        <section className="relative h-[460px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2000')",
            }}
          />
          <div className="absolute inset-0 ds-contact-hero-scrim" />
          <div className="absolute inset-0 ds-radial-accent opacity-20" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 ds-glass rounded-full mb-6">
              <div className="w-2 h-2 rounded-full animate-pulse bg-[var(--text-accent)]" />
              <span className="text-xs font-medium tracking-widest uppercase ds-text-primary">
                Support disponible
              </span>
            </div>

            <Heading as="h1" className="mb-6">
              We&apos;re here to help
            </Heading>
            <TextBlock as="p" className="max-w-xl mx-auto">
              Des questions sur nos solutions ? Besoin d&apos;assistance technique ou commerciale ?
              Notre équipe est prête à vous répondre rapidement.
            </TextBlock>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 md:px-8 pb-24 -mt-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-5 space-y-8">
              <div className="glass p-8 rounded-3xl backdrop-blur-xl ds-glass">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 ds-gradient-icon-box rounded-2xl flex items-center justify-center">
                    <span className="material-icons-round text-3xl">support_agent</span>
                  </div>
                  <div>
                    <Heading as="h2">
                      Get in Touch
                    </Heading>
                    <TextBlock as="p">
                      Nous répondons sous 24h
                    </TextBlock>
                  </div>
                </div>

                <div className="space-y-7">
                  {[
                    {
                      icon: "email",
                      label: "Email",
                      value: "support@sofonn.com",
                      href: "mailto:support@sofonn.com",
                    },
                    {
                      icon: "phone",
                      label: "Téléphone",
                      value: "+33 1 76 36 00 00",
                      href: "tel:+33176360000",
                    },
                    {
                      icon: "location_on",
                      label: "Adresse",
                      value: "Port de Marseille\n13002 Marseille, France",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-5">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ds-icon-btn-wrap">
                        <span className="material-icons-round ds-text-accent text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <span className="mb-1 block uppercase tracking-widest ds-text-muted">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a href={item.href} className="ds-interactive-link font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl backdrop-blur-xl ds-glass">
                <Heading as="h3" className="flex items-center gap-3 mb-6">
                  <span className="material-icons-round ds-text-accent">schedule</span>
                  Horaires d&apos;ouverture
                </Heading>
                <div className="space-y-4 text-sm">
                  {[
                    { day: "Lundi – Vendredi", hours: "9h00 – 18h00" },
                    { day: "Samedi", hours: "10h00 – 14h00" },
                    { day: "Dimanche", hours: "Fermé" },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-1 border-b ds-row-divider last:border-0"
                    >
                      <span className="ds-text-secondary">{item.day}</span>
                      <span
                        className={`font-medium ${item.hours === "Fermé" ? "ds-status-closed" : "ds-status-open"}`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="glass p-10 md:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl ds-surface-raised">
                <Heading as="h2" className="mb-2">
                  Envoyez-nous un message
                </Heading>
                <TextBlock as="p" className="mb-10">
                  Tous les champs sont obligatoires
                </TextBlock>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium ds-text-secondary mb-2">Nom complet</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="ds-input rounded-2xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium ds-text-secondary mb-2">
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean@entreprise.com"
                        className="ds-input rounded-2xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium ds-text-secondary mb-2">Votre message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Décrivez votre besoin, votre projet ou votre question..."
                      className="ds-input rounded-3xl resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 ds-btn-accent-gradient text-lg flex items-center justify-center gap-3 active:scale-[0.985] shadow-xl"
                  >
                    <span className="material-icons-round">send</span>
                    Envoyer le message
                  </button>

                  <TextBlock as="p" className="text-center mt-4">
                    Nous respectons votre vie privée. Vos données ne seront jamais partagées.
                  </TextBlock>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
