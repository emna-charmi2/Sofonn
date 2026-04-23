import Header from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import AOSProvider from '@/components/AOSProvider';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AOSProvider />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
