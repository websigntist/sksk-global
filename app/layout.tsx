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
  title: "SKS Global Associates | Importer, Exporter & Manufacture's Representative",
  description: "SKS Global Associates - Importer, Exporter and Manufacture's Representative of Chemicals and Commodity. Your Complete Sourcing Solution since 1992.",
  icons: {
    icon: '/favicon.svg',
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
