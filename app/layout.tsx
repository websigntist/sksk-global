import type { Metadata } from 'next';
import './globals.css';
import { QuoteModalProvider } from '@/context/QuoteModalContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FloatingSocialBar } from '@/components/FloatingSocialBar';
import { FloatingQuoteButton } from '@/components/FloatingQuoteButton';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://sksglobalassociates.com'),
  title: {
    default: "SKS Global Associates | Importer, Exporter & Manufacture's Representative",
    template: "%s | SKS Global Associates",
  },
  description: "Importer, Exporter and Manufacture's Representative of Chemicals and Commodity. Your Complete Sourcing Solution since 1992.",
  keywords: [
    "SKS Global Associates",
    "Chemical Importer",
    "Chemical Exporter",
    "Sulphur Importer",
    "Fertilizer Exporter",
    "Himalayan Rock Salt",
    "Lake Salt",
    "Sulphuric Acid",
    "Portland Cement Clinker",
    "Global Commodity Sourcing",
    "Pakistan Chemical Sourcing",
    "Dubai Trade Representative",
  ],
  authors: [{ name: "SKS Global Associates", url: "https://sksglobalassociates.com" }],
  creator: "SKS Global Associates",
  publisher: "SKS Global Associates",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sksglobalassociates.com',
    siteName: 'SKS Global Associates',
    title: "SKS Global Associates | Importer, Exporter & Manufacture's Representative",
    description: "Importer, Exporter and Manufacture's Representative of Chemicals and Commodity. Your Complete Sourcing Solution since 1992.",
    images: [
      {
        url: '/images/hero_banner.webp',
        width: 1200,
        height: 630,
        alt: 'SKS Global Associates - Chemical & Commodity Sourcing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SKS Global Associates | Importer, Exporter & Manufacture's Representative",
    description: "Importer, Exporter and Manufacture's Representative of Chemicals and Commodity. Your Complete Sourcing Solution since 1992.",
    images: ['/images/hero_banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <QuoteModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <QuoteModal />
          <FloatingSocialBar />
          <FloatingQuoteButton />
          <WhatsAppButton />
          <BackToTop />
          <ScrollReveal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
