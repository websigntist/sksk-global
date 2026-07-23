import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Core Values',
  description: 'Discover the core values, principles, integrity, and quality assurance that drive SKS Global Associates.',
  openGraph: {
    title: 'Core Values | SKS Global Associates',
    description: 'Discover the core values, principles, integrity, and quality assurance that drive SKS Global Associates.',
    url: 'https://sksglobalassociates.com/core-values',
  },
};

export default function CoreValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
