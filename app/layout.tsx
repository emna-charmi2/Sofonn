import '@/app/globals.css';
import { arimo, inter, mulish, notoSans, nunitoSans, publicSans, poppinsSemiBoldItalic, latoItalic, figtreeItalic } from '@/components/ui/fonts';

export const metadata = {
  title: 'Sofonn',
  description: 'AI-Powered Maritime Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${arimo.variable} ${inter.variable} ${mulish.variable} ${notoSans.variable} ${nunitoSans.variable} ${publicSans.variable} ${poppinsSemiBoldItalic.variable} ${latoItalic.variable} ${figtreeItalic.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
