"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 120,
      delay: 50,
      mirror: false,
      anchorPlacement: "top-bottom",
      disableMutationObserver: true, // Optimisation pour l'hydratation
    });

    return () => {
      // AOS.refresh() is generally safer than doing nothing
    };
  }, []);

  return null;
}
