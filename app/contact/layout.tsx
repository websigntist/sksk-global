import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SKS Global Associates. Offices in Dallas TX USA, Dubai UAE, and Karachi Pakistan.',
  openGraph: {
    title: 'Contact Us | SKS Global Associates',
    description: 'Get in touch with SKS Global Associates. Offices in Dallas TX USA, Dubai UAE, and Karachi Pakistan.',
    url: 'https://sksglobalassociates.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
