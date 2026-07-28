import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SKS Global Associates - over 27 years of excellence as Importers, Exporters, and Manufacturers Representatives in Chemicals and Commodities.',
  openGraph: {
    title: 'About Us | SKS Global Associates',
    description: 'Learn about SKS Global Associates - over 27 years of excellence as Importers, Exporters, and Manufacturers Representatives in Chemicals and Commodities.',
    url: 'https://sksglobalassociates.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
