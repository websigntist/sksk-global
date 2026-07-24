'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Core Values', href: '/core-values' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const closeMenu = () => setMobileActive(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-info">
            <div className="top-bar-item">
              <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
              <a href="https://wa.me/923008247823?text=Hello%2C%20how%20can%20i%20help%20you%3F" target="_blank" rel="noopener noreferrer">
                +92 300 8247823
              </a>
            </div>
            <div className="top-bar-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@sksglobalassociates.com">info@sksglobalassociates.com</a>
            </div>
            <div className="top-bar-item top-bar-address">
              <i className="fas fa-map-marker-alt"></i>
              <span>Dallas-Tx, USA – Dubai, UAE – Karachi, Pakistan.</span>
            </div>
          </div>
          <div className="top-bar-socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className={`header-main ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link href="/" className="brand-logo" onClick={closeMenu}>
            <div className="logo-badge">SKS</div>
            <div>
              <span>GLOBAL</span> <span className="red">ASSOCIATES</span>
            </div>
          </Link>

          <nav className={`nav-menu ${mobileActive ? 'active' : ''}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
              Get In Touch
            </Link>
            <button
              className="mobile-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMobileActive(!mobileActive)}
            >
              <i className={mobileActive ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
