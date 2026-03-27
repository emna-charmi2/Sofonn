'use client';
import '@/app/globals.css';

import AboutUs from './features/home/About';
import Offers from './features/home/offer';
import MarineCube from './features/home/Modules';
import Why from './features/home/why';
import Blog from './features/home/blogs';
import CallToAction from './features/home/CTA';
import HomeHero from './features/home/Hero';
import SectionFadeIn from './components/layouts/SectionFadeIn';

export default function Home() {

  return (
    <>
      <HomeHero />
      <AboutUs />
      <MarineCube />
      <Offers />
      <Why />
      <Blog />
      <CallToAction />
    </>
  );
}
