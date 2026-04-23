"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden relative">
      {/* Fond d'arrière-plan global (dégradé + image floutée) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://storage.googleapis.com/banani-generated-images/generated-images/f8ef6304-e298-4800-89f5-632438cbbdd7.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/80" />
      </div>

      {/* Section Formulaire - Gauche (effet glass) */}
      <div className="w-full md:w-5/12 lg:w-2/5 flex items-center justify-center p-6 sm:p-8 md:p-12">
        <div className="w-full max-w-md mx-auto">
          {/* Carte glass pour le formulaire */}
          <div
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            {/* Titre et sous-titre */}
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Bienvenue
              </h1>
              <p className="mt-2 text-white/70 text-[15px]">
                Connectez-vous avec votre email et mot de passe pour continuer.
              </p>
            </div>

            <form  className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Adresse email
                </label>
                <div className="group relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-white/80">
                  Mot de passe
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908l3.42 3.42m-3.42-3.42l-3.42-3.42" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5 16.477 5 20.268 7.943 21.542 12 20.268 16.057 16.477 19 12 19 7.523 19 3.732 16.057 2.458 12z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

           
            </form>

           
          </div>
        </div>
      </div>

      {/* Section Image - Droite (pour desktop) */}
      <div className="hidden md:block md:w-7/12 lg:w-3/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent z-10" />
        <Image
          src="https://storage.googleapis.com/banani-generated-images/generated-images/f8ef6304-e298-4800-89f5-632438cbbdd7.jpg"
          alt="Image de fond - Expérience moderne"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          unoptimized
        />
       
      </div>

      {/* Version mobile de l'image (sous le formulaire) */}
      <div className="md:hidden relative h-64 w-full overflow-hidden">
        <Image
          src="https://storage.googleapis.com/banani-generated-images/generated-images/f8ef6304-e298-4800-89f5-632438cbbdd7.jpg"
          alt="Image de fond"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    </div>
  );
}