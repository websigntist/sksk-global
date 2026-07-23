'use client';

import React from 'react';

export const FloatingSocialBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/923008247823?text=${encodeURIComponent('Hello, how can i help you?')}`;

  const socials = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      href: 'https://facebook.com',
      colorClass: 'social-fb',
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      href: 'https://instagram.com',
      colorClass: 'social-ig',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      href: 'https://linkedin.com',
      colorClass: 'social-in',
    },
    {
      name: 'Pinterest',
      icon: 'fab fa-pinterest-p',
      href: 'https://pinterest.com',
      colorClass: 'social-pin',
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      href: whatsappUrl,
      colorClass: 'social-wa',
      target: '_blank',
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      href: 'mailto:info@sksglobalassociates.com',
      colorClass: 'social-mail',
    },
  ];

  return (
    <div className="floating-social-bar">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.target || '_self'}
          rel={item.target ? 'noopener noreferrer' : undefined}
          className={`floating-social-btn ${item.colorClass}`}
          aria-label={item.name}
          title={item.name}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};
