'use client';

import { Suspense } from 'react';

import TypingText from '@/app/components/TypingText';
import VideoHome from '@/app/components/ui/video-home';

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex font-lato-regular items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-linear-to-br from-blue-950/80 to-black" />}>
          <VideoHome />
        </Suspense>
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(6,8,26,0.88) 0%, rgba(10,13,46,0.75) 40%, rgba(6,8,26,0.55) 100%)',
        }}
      />

      <div className="relative z-20 w-full pt-2 pb-8 md:pb-12 lg:pb-16 xl:pb-20 px-6 md:pl-43.75 md:pr-12">
        <div className="mt-6 pt-3">
          <div className="w-full xl:w-7/12 md:w-7/12 text-center md:text-start mb-8 md:mb-0">
            <h1 className="font-lato-regular text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-light text-white leading-tight pb-2 sm:pb-1">
              Enhance your fleet&apos;s standards with
            </h1>

            <h1 className="font-lato-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-b leading-tight pb-1 sm:pb-2">
              Sofonn Solutions :<br /> Marine <TypingText />
            </h1>

            <h3 className="font-lato-regular text-lg font-light text-white mb-4 leading-relaxed">
              Our innovative, user-friendly technological solution designed for the maritime sector.
            </h3>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3">
              <button className="btn-primary px-8 py-3 text-lg font-medium rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 transition-all duration-300 mb-3 sm:mb-0 sm:mr-3 xl:mr-4">
                Request Demo
              </button>

              <a
                href="#benefits"
                className="group flex items-center gap-2 text-white text-base font-medium mt-0 sm:mt-2 transition-colors hover:text-cyan-400"
              >
                <span className="ml-2">Discover more</span>
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 9l3 3-3 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--bg-base) 80%)',
        }}
      />
    </section>
  );
}
