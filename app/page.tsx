'use client';
import '@/app/globals.css';

import AboutUs from './features/home/About';
import Offers from './features/home/offer';
import MarineCube from './features/home/modules';
import Why from './features/home/why';
import Blog from './features/home/blogs';
import CallToAction from './features/home/CTA';
import HomeHero from './features/home/Hero';
import SectionFadeIn from './components/layouts/SectionFadeIn';

export default function Home() {
  const sectionDivider = <div className="section-divider" />;
  const renderFadeSection = (key: string, content: React.ReactNode) => (
    <SectionFadeIn key={key}>{content}</SectionFadeIn>
  );

  return (
    <>
      <HomeHero />
      {sectionDivider}
      {renderFadeSection('about', <AboutUs />)}
      {renderFadeSection('modules-empty', null)}
      {renderFadeSection('marine-cube', <MarineCube />)}
      {sectionDivider}
      {renderFadeSection('offers', <Offers />)}
      {sectionDivider}
      {renderFadeSection('why', <Why />)}
      {sectionDivider}
      {sectionDivider}
      {sectionDivider}
      {renderFadeSection('blog', <Blog />)}
      {sectionDivider}
      {sectionDivider}
      {renderFadeSection('cta', <CallToAction />)}
    </>
  );
}