import AboutUs from '@/features/home/About';
import Offers from '@/features/home/offer';
import MarineCube from '@/features/home/Modules';
import Why from '@/features/home/why';
import Blog from '@/features/home/blogs';
import CallToAction from '@/features/home/CTA';
import HomeHero from '@/features/home/Hero';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
          <div className="fixed inset-0 pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#00b0ff]/5 blur-[130px]" />
  <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00b0ff]/7 blur-[120px]" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00b0ff]/10 blur-[150px]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,176,255,0.08)_0%,transparent_70%)]" />
</div>
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
