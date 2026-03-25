'use client';

import type { ReactNode } from 'react';

type SectionFadeInProps = {
  children: ReactNode;
};

export default function SectionFadeIn({ children }: SectionFadeInProps) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      {children}
    </div>
  );
}
