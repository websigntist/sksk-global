'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer-corporate">
      {/* FLOATING CALLOUT BAR */}
      <div className="callout-bar-wrapper">
        <div className="container">
          <div className="callout-bar">
            <div className="callout-item">
              <div className="callout-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="callout-text">
                <label>Office Location</label>
                <p>USA – UAE – Pakistan</p>
              </div>
            </div>
            <div className="callout-item">
              <div className="callout-icon"><i className="fas fa-envelope"></i></div>
              <div className="callout-text">
                <label>Send Email</label>
                <p>info@sksglobalassociates.com</p>
              </div>
            </div>
            <div className="callout-item">
              <div className="callout-icon" style={{ backgroundColor: '#25D366' }}><i className="fab fa-whatsapp"></i></div>
              <div className="callout-text">
                <label>WhatsApp Us</label>
                <a href="https://wa.me/923008247823?text=Hello%2C%20how%20can%20i%20help%20you%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  <p>+92 300 8247823</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h4>About Company</h4>
            <div className="footer-col-content">
              <p>
                Yes you are just at the right place, since you are the best client and we have the best products, all you need is the channel to bridge the global distance.
              </p>
              <div className="top-bar-socials">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className={`footer-col ${openSections['quickLinks'] ? 'is-open' : ''}`}>
            <h4 className="footer-accordion-header" onClick={() => toggleAccordion('quickLinks')}>
              <span>Quick Links</span>
              <i className={`fas fa-chevron-down accordion-arrow ${openSections['quickLinks'] ? 'rotated' : ''}`}></i>
            </h4>
            <div className={`footer-accordion-content ${openSections['quickLinks'] ? 'show' : ''}`}>
              <ul className="footer-links">
                <li><Link href="/"><i className="fas fa-angle-right"></i> Home</Link></li>
                <li><Link href="/about"><i className="fas fa-angle-right"></i> About Us</Link></li>
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Our Products</Link></li>
                <li><Link href="/core-values"><i className="fas fa-angle-right"></i> Core Values</Link></li>
                <li><Link href="/contact"><i className="fas fa-angle-right"></i> Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className={`footer-col ${openSections['products'] ? 'is-open' : ''}`}>
            <h4 className="footer-accordion-header" onClick={() => toggleAccordion('products')}>
              <span>Products</span>
              <i className={`fas fa-chevron-down accordion-arrow ${openSections['products'] ? 'rotated' : ''}`}></i>
            </h4>
            <div className={`footer-accordion-content ${openSections['products'] ? 'show' : ''}`}>
              <ul className="footer-links">
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Sulphur</Link></li>
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Lake Salt</Link></li>
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Sulphuric Acid</Link></li>
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Rock Phosphate</Link></li>
                <li><Link href="/products"><i className="fas fa-angle-right"></i> Himalayan Rock Salt</Link></li>
              </ul>
            </div>
          </div>

          <div className={`footer-col ${openSections['contactDetail'] ? 'is-open' : ''}`}>
            <h4 className="footer-accordion-header" onClick={() => toggleAccordion('contactDetail')}>
              <span>Contact Details </span>
              <i className={`fas fa-chevron-down accordion-arrow ${openSections['contactDetail'] ? 'rotated' : ''}`}></i>
            </h4>
            <div className={`footer-accordion-content ${openSections['contactDetail'] ? 'show' : ''}`}>
              <ul className="footer-contact">
                <li>
                  <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>{' '}
                  <a href="https://wa.me/923008247823?text=Hello%2C%20how%20can%20i%20help%20you%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    +92 300 8247823
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone" style={{ color: 'var(--primary-red)' }}></i>{' '}
                  <a href="tel:+922132567823" style={{ color: 'inherit' }}>
                    +92 21 32567823
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone" style={{ color: 'var(--primary-red)' }}></i>{' '}
                  <a href="tel:+922132564722" style={{ color: 'inherit' }}>
                    +92 21 32564722
                  </a>
                </li>
                <li><i className="fas fa-envelope"></i> info@sksglobalassociates.com</li>
                <li><i className="fas fa-map-marker-alt"></i> USA, Dubai, UAE & Karachi, Pakistan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          Copyright © 2026 - All Right Reserved SKS Global Associates - Designed by <a href="https://websigntist.com/" target="_blank" rel="noopener noreferrer">WebSigntist</a>
        </div>
      </div>
    </footer>
  );
};
