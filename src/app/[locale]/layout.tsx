import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://kaunos-vip-transfer.vercel.app'),
  title: "Dalaman VIP Transfer | Private Chauffeur from Dalaman Airport",
  description:
    "Luxury VIP transfer services from Dalaman Airport to anywhere in Turkey. 24/7 chauffeur service with premium vehicles.",
  openGraph: {
    title: "Dalaman VIP Transfer",
    description:
      "Luxury VIP Transfers from Dalaman Airport to your destination in comfort.",
    url: "https://kaunos-vip-transfer.vercel.app",
    siteName: "Dalaman VIP Transfer",
    images: [{ url: "/images/hero-poster.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ru' }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let messages: Record<string, unknown> | undefined;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar currentLocale={locale} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}