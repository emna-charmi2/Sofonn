// app/components/AOSProvider.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    // Initialiser AOS avec des options personnalisées
    AOS.init({
      duration: 800,           // Durée de l'animation
      once: false,             // true = animation une seule fois, false = à chaque fois
      easing: "ease-in-out",   // Type d'animation
      offset: 120,             // Décalage avant le déclenchement
      delay: 50,               // Délai avant l'animation
      mirror: true,            // Animation en remontant aussi
      anchorPlacement: "top-bottom", // Position de déclenchement
    });

    // Nettoyer les animations AOS lors du démontage
    return () => {
      AOS.refresh(); // Optionnel : rafraîchir si nécessaire
    };
  }, []);

  return null;
}