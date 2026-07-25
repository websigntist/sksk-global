import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SKS Global Associates',
  description: "Learn about SKS Global Associates - Premier Importers, Exporters and Manufacturer's Representatives in Pakistan, USA, and UAE.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE TITLE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT STORY */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-collage reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/aboutimg.webp" alt="Cargo Handling" className="-about-img-sub" />
              <div className="about-experience-badge">
                <h3>27+</h3>
                <p>Years Industry Exposure</p>
              </div>
            </div>

            <div className="about-text-content reveal">
              <div className="section-subtitle">About Us</div>
              <h2 className="section-title">SKS Global Associates</h2>
              <p>
                27 years in international trade, connecting manufacturers with buyers across Asia, the Middle East and Africa.
                I founded Global Associates in 1992 as a manufacturer's representative, and over the decades it has grown into a business covering cement, coal, sulphur, chemicals, salt and fertilizers. I represent cement manufacturers, including DG Cement, Attock Cement and Power Cement, in markets across Vietnam, China, Thailand, Saudi Arabia and Turkey. I also work as a sulphur and coal indenter, sourcing sulphur from Turkmenistan and Uzbekistan and coal from South Africa, Indonesia and the USA, then placing these with buyers in Pakistan, India, Bangladesh, China and Africa.
                Beyond this, I trade chemicals between Pakistan and China, export lake salt and pink salt from Pakistan, and handle fertilizer and rock phosphate exports. I also manufacture Single Super Phosphate, Nitro phosphate and Zinc Liquid.
              </p>
              <p>
                Based across Dubai, Dallas and Karachi. Always open to connecting with manufacturers and buyers in these markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPLE, MISSION, CUSTOMER FOCUSED */}
      <section className="section-padding mission-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div className="section-subtitle" style={{ color: 'var(--primary-red)' }}>Our Pillars</div>
            <h2 className="section-title" style={{ color: 'white' }}>Our Corporate Foundation</h2>
          </div>

          <div className="mission-grid reveal">
            {/* Principle */}
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Principle</h3>
              <p>
                Perseverance integrity and honesty have been the objective in our road to success and God willingly shall continue.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Mission</h3>
              <p>
                It shall be our continuous endeavor to earn our customer&apos;s loyalty, by providing the highest level of excellence in out products, and services. As a team we shall stretch our limits by accepting challenge, encourage growth, and serve the path for fulfillment of goals of the organization, and its members.
              </p>
            </div>

            {/* Customer Focused */}
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>Customer Focused</h3>
              <p>
                Global Associates has always specialized in procuring hard-to-get and obscure products. The company is a lean organization that relies on quick decision making and always putting the customer&apos;s needs first. This customer driven approach keeps Global Associates constantly looking for new partners to do business with. At Global Associates, we are constantly updating our product line and service standards to better provide for customer needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FIVE CORE VALUES PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', paddingBottom: '6rem' }}>
        <div className="container text-center">
          <div className="section-subtitle">Our Values</div>
          <h2 className="section-title">Five Core Values</h2>
          <p className="section-description">
            Rooted in excellence, trust, and global market innovation.
          </p>

          <div className="values-grid reveal">
            <div className="value-card-preview">
              <div className="value-icon"><i className="fas fa-heart"></i></div>
              <h4>Integrity</h4>
              <p>Honesty at heart and passionate dedication at work.</p>
            </div>
            <div className="value-card-preview">
              <div className="value-icon"><i className="fas fa-handshake"></i></div>
              <h4>Harmony</h4>
              <p>We interact with one another in mutual trust.</p>
            </div>
            <div className="value-card-preview">
              <div className="value-icon"><i className="fas fa-award"></i></div>
              <h4>Competency</h4>
              <p>Continuous professional excellence in global operations.</p>
            </div>
            <div className="value-card-preview">
              <div className="value-icon"><i className="fas fa-bullseye"></i></div>
              <h4>Challenge</h4>
              <p>Driven by the spirit of challenge, we commit to innovation.</p>
            </div>
            <div className="value-card-preview">
              <div className="value-icon"><i className="fas fa-globe-americas"></i></div>
              <h4>Global</h4>
              <p>We preempt opportunity by attaining competitive edge.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
