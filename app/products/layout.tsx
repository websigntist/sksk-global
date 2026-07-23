import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our catalog of Industrial Sulphur, Sulphuric Acid, Lake Salt, Himalayan Rock Salt, DAP Fertilizer, and Ordinary Portland Cement Clinker.',
  openGraph: {
    title: 'Our Products | SKS Global Associates',
    description: 'Explore our catalog of Industrial Sulphur, Sulphuric Acid, Lake Salt, Himalayan Rock Salt, DAP Fertilizer, and Ordinary Portland Cement Clinker.',
    url: 'https://sksglobalassociates.com/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
