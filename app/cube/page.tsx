'use client'; // nécessaire pour les animations et le style dynamique

import Image from 'next/image';
import { CSSProperties } from 'react';

interface CubeProps {
  size?: number;      // taille du cube en pixels (optionnel)
  speed?: number;     // durée d'un tour en secondes (optionnel)
  images?: string[];  // liste personnalisée des images (optionnel)
}

const DEFAULT_IMAGES = [
'https://lh3.googleusercontent.com/aida-public/AB6AXuCIW_nasz1JDcjzdIblU-OV70nj3ZQiR4BcPVj1a5aR6Bsp9yrWxt-YAOpvYiO9IYjBtigIzZfxV4NYa5nOhOKgU4UGhCIYoMvdOqBHaYuBsLQgJltbBa9PzcBSanaXv9AiMnAOxWkh86jPjnlzQjP7ZNalKfjyPK19me4tMeogMH8gNzRUzgGLfcN2-MR11oy9TTLFpndOTeZR-3AdRUQj3QnaD3JpeKZEaod0r1k-Txth_8FGvBaeyaR0Lo1aZqVuhVV5QhFlUZQ',
'https://lh3.googleusercontent.com/aida-public/AB6AXuCVrnFfPb9OLEeEkuoIaY6RWDgVE3fxEerEEjWvF-WOSnxdISkZZhXIRKGazhgIy7sBVIGuZEb96l5LX7rVd6qd_SLr348TivSJnYsAQhEegFHeMY1xgtZ8OhDGaxEWYcFziy7R15EgZl5LzuIlAX-qLC_XYradP1r2K0bzlRPiJ7vRJ8UYiQ2p39w9DsfUDcVPXSjWUoEQCFtwC-ueJUupsN6JAHEA0ssdreKYENoTRa6t_GTC_LJ_O--gkth1pC3demQ4HYdkOPM',
'https://lh3.googleusercontent.com/aida-public/AB6AXuAQa6w7LBG_sNqTpkFmtzwx0zAAQPXyMokt_GuDXezwp8ngO_QgOGOD9DZ5jjBfT9tEAVA14GZnPo_AhqTIcQJzo8whGA2ymM451nLM17dhD-7hWK0eaKWj_kbjYwC0vvN_WK81bo-x4M7Cllvhh6IiQyr9wGJQQ3nNClYWwj0SVXTlP6Biwv3cKbz1KyBJfHR2LHFgmFRg2S-YenMxMsh1ns1iB7iTE6X-XS-lI5Pmv3uc7kwyAZxctdpRjOqyd55gnYuPHK6OdRQ',
'https://lh3.googleusercontent.com/aida-public/AB6AXuCcYepEQnJ-zQiCK4xnyqT_mltojZWGOx03_rjbEkhSYpOMZWTpIqKCd2uaGtdcn9QHpB3Wtmns5vDGehxizjrLLxZfZiCZtoEeHdGi3VYaxjktPKCIbUEZDzJk6-pvbQhGVo1OxQCc2SzaiII9eky5WSTbpLe3l8SXAfYrPEeD6Fu1uqn4P4rUbqhovmuNKEws7tqyMwipcGXfEOSQcsShqEAUJuSG0eDqTCjF9n4hpBVJE7OWi8ls0j1JQE5dZOoOGrhZVDP4jI0',
];

export default function Cube({
  size = 256,
  speed = 12,
  images = DEFAULT_IMAGES,
}: CubeProps) {
  const half = size / 2;

  // Définition des transformations pour chaque face (uniquement les 4 faces latérales)
  const getFaceTransform = (index: number): string => {
    switch (index) {
      case 0:
        return `rotateY(0deg) translateZ(${half}px)`;
      case 1:
        return `rotateY(90deg) translateZ(${half}px)`;
      case 2:
        return `rotateY(180deg) translateZ(${half}px)`;
      case 3:
        return `rotateY(-90deg) translateZ(${half}px)`;
      default:
        return '';
    }
  };

  const cubeStyle: CSSProperties = {
    width: size,
    height: size,
    position: 'relative',
    transformStyle: 'preserve-3d',
    animation: `spin-cube ${speed}s infinite linear`,
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div style={cubeStyle}>
        {images.slice(0, 4).map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: getFaceTransform(i),
              backfaceVisibility: 'visible',
            }}
          >
            <Image
              src={src}
              alt={`Cube face ${i + 1}`}
              fill
              className="object-cover"
              sizes={`${size}px`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}