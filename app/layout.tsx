import '@/app/globals.css';
import Header from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import AOSProvider from './components/AOSProvider';
import { arimo, inter, mulish, notoSans,nunitoSans,publicSans,poppinsSemiBoldItalic,latoItalic, figtreeItalic } from './components/ui/fonts';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${arimo.variable} ${inter.variable} ${mulish.variable} ${notoSans.variable} ${nunitoSans.variable} ${publicSans.variable} ${poppinsSemiBoldItalic.variable} ${latoItalic.variable} ${figtreeItalic.variable}`}>
      <body>
        <AOSProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}