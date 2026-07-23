'use client';

import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '923008247823';
  const defaultMessage = encodeURIComponent('Hello, how can i help you?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with Us</span>
    </a>
  );
};
