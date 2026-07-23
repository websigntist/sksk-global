'use client';

import React from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export const FloatingQuoteButton: React.FC = () => {
  const { openModal } = useQuoteModal();

  return (
    <button
      className="floating-quote-btn"
      onClick={() => openModal()}
      aria-label="Get a Quote"
    >
      <i className="fas fa-paper-plane"></i>
      <span>Get a Quote</span>
    </button>
  );
};
