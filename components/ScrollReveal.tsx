'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollReveal: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);

  return null;
};
