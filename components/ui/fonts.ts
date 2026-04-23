// app/components/ui/fonts.ts
import localFont from 'next/font/local';

export const arimo = localFont({
  src: './fonts/Arimo-VariableFont_wght.woff2',
  variable: '--font-arimo-next',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

export const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.woff2',
  variable: '--font-inter-next',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

export const mulish = localFont({
  src: './fonts/Mulish-VariableFont_wght.woff2',
  variable: '--font-mulish-next',
  weight: '200 1000',
  style: 'normal',
  display: 'swap',
});

export const notoSans = localFont({
  src: './fonts/NotoSans-VariableFont_wdth,wght.woff2',
  variable: '--font-noto-sans-next',
  weight: '200 900',
  style: 'normal',
  display: 'swap',
});

export const nunitoSans = localFont({
  src: './fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.woff2',
  variable: '--font-nunito-sans-next',
  weight: '200 1000',
  style: 'normal',
  display: 'swap',
});

export const publicSans = localFont({
  src: './fonts/PublicSans-VariableFont_wght.woff2',
  variable: '--font-public-sans-next',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
});

export const poppinsSemiBoldItalic = localFont({
  src: './fonts/Poppins-SemiBold.woff2',
  variable: '--font-poppins-semibold-next',
  weight: '600',
  style: 'normal',
  display: 'swap',
});

export const latoItalic = localFont({
  src: './fonts/Lato-Regular.woff2',
  variable: '--font-lato-next',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const figtreeItalic = localFont({
  src: './fonts/Figtree-VariableFont_wght.woff2',
  variable: '--font-figtree-next',   // ← nom distinct, pas de boucle
  weight: '300 900',
  style: 'normal',
  display: 'swap',
});