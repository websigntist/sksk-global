'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/context/QuoteModalContext';

export default function HomePage() {
  const { openModal } = useQuoteModal();
  const [heroForm, setHeroForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [homeContact, setHomeContact] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your quick inquiry has been submitted. Our sales team will get back to you shortly.');
    setHeroForm({ name: '', phone: '', email: '', message: '' });
  };

  const handleHomeContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to SKS Global Associates! We have received your request.');
    setHomeContact({ name: '', phone: '', email: '', message: '' });
  };

  const previewProducts = [
    {
      name: 'Diammonium Phosphate Fertilizer (DAP)',
      category: 'Fertilizers',
      img: '/images/dap.webp',
      desc: 'Premium agricultural fertilizer with high P2O5 and Nitrogen content for maximum yield.',
    },
    {
      name: 'Sulphur',
      category: 'Chemical / Mineral',
      img: '/images/granular-sulphur-2.webp',
      desc: 'High purity granular and bright yellow molten sulphur for industrial chemical synthesis.',
    },
    {
      name: 'Lake Salt',
      category: 'Salt Commodity',
      img: '/images/lakesalt.webp',
      desc: 'Industrial lake salt ideal for chlor-alkali production, water treatment, and de-icing.',
    },
    {
      name: 'Himalayan Rock Salt',
      category: 'Salt Commodity',
      img: '/images/salt.webp',
      desc: '100% natural pink rock salt directly mined from Khewra mineral deposits for global export.',
    },
    {
      name: 'Clinker',
      category: 'Cement & Building',
      img: '/images/cement1.webp',
      desc: 'Grey Portland cement clinker for high grade concrete manufacturing and construction.',
    },
    {
      name: 'Ordinary Portland Cement Type 1 & 2',
      category: 'Cement & Building',
      img: '/images/cement.webp',
      desc: 'Standardized heavy construction Portland cement conforming strictly to ASTM C150 standards.',
    },
  ];

  return (
    <>
      {/* HERO SECTION WITH COMPACT STYLISH HERO FORM */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Hero Content */}
            <div className="hero-content reveal">
              <div className="hero-badge">
                <i className="fas fa-globe"></i> Welcome To SKS Global Associates
              </div>
              <h1 className="hero-title">
                Importer, Exporter and <span>Manufacture&apos;s</span> Representative of <span>Chemicals</span> and Commodity
              </h1>
              <p className="hero-subtitle">
                YOUR COMPLETE SOURCING SOLUTION
              </p>
              <div className="hero-btns">
                <Link href="/products" className="btn btn-primary">
                  Explore Products <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/about" className="btn btn-hero-outline">
                  Find Out More
                </Link>
              </div>

              {/* STATS COUNTER GRID */}
              <div className="hero-stats-grid">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">32<span>+</span></div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">500<span>+</span></div>
                  <div className="hero-stat-label">Global Shipments</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">15<span>+</span></div>
                  <div className="hero-stat-label">Countries Network</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">100<span>%</span></div>
                  <div className="hero-stat-label">Quality Assurance</div>
                </div>
              </div>
            </div>

            {/* Right Side Compact Stylish Hero Form */}
            <div className="hero-form-card reveal">
              <div className="hero-form-header">
                <h3>Quick Inquiry</h3>
                <p>Get an instant chemical & commodity quote</p>
              </div>
              <form onSubmit={handleHeroSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Business Email"
                    required
                    value={heroForm.email}
                    onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message or Product Specs..."
                    required
                    value={heroForm.message}
                    onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Query <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT US PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-collage reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/aboutimg.webp" alt="Cargo Handling" className="-about-img-sub" />
              <div className="about-experience-badge">
                <h3>30+</h3>
                <p>Years of Sourcing Excellence</p>
              </div>
            </div>

            <div className="about-text-content reveal">
              <div className="section-subtitle">About Us</div>
              <h2 className="section-title">SKS Global Associates</h2>
              <p>
                Yes you are just at the right place, since you are the best client and we have the best products, all you need is the channel to ridge the global distance at thought speed, we are that channel... Global Associates.
              </p>
              <p>
                Global Associates is the renowned importers, exporters and manufacture&apos;s representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture&apos;s rep and has evolved into an organization with decades of experience in different products sales and marketing.
              </p>
              <p>
                With an era rich in international market exposure, global sourcing, complete product knowledge, in-depth quality assurance, and perfection @ thought, the management of Global Associates is the A-Z of serving local and international clients.
              </p>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCTS WE HANDLE PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container text-center">
          <div className="section-subtitle">Products We Handle</div>
          <h2 className="section-title">Intentional Trading & Global Sourcing</h2>
          <p className="section-description">
            We specialize in sourcing high-grade industrial chemicals, agricultural fertilizers, minerals, and bulk construction commodities for global clients.
          </p>

          <div className="products-grid reveal">
            {previewProducts.map((p, idx) => (
              <div key={idx} className="product-card">
                <div className="product-img-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                  <span className="product-tag">{p.category}</span>
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <button className="btn-product-quote" onClick={() => openModal(p.name)}>
                    <i className="fas fa-paper-plane"></i> REQUEST QUOTE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/products" className="btn btn-outline">
              View All 9 Products <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: FIVE CORE VALUES PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
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

          <div style={{ marginTop: '3rem' }}>
            <Link href="/core-values" className="btn btn-primary">
              Learn More About Our Values <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSPORT & SHIPPING LOGISTICS */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0F172A, #070A10)', color: 'white' }}>
        <div className="container text-center">
          <div className="section-subtitle" style={{ color: 'var(--primary-red)' }}>Transport & Logistics</div>
          <h2 className="section-title" style={{ color: 'white' }}>We Offers Cost Efficient Transport Shipping</h2>
          <p className="section-description" style={{ color: '#94A3B8' }}>
            Seamless end-to-end supply chain logistics for bulk commodities, minerals, and chemicals.
          </p>

          <div className="shipping-grid reveal">
            {/* 01 Smart Warehousing */}
            <div className="shipping-card">
              <div className="shipping-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/01-1-1.webp" alt="Smart Warehousing" />
                <span className="shipping-number">01</span>
              </div>
              <div className="shipping-card-content">
                <h3>Smart Warehousing</h3>
                <p>Toll manufacture product storage & warehousing logistics across global ports.</p>
              </div>
            </div>

            {/* 02 Land Transport */}
            <div className="shipping-card">
              <div className="shipping-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/road.webp" alt="Land Transport" />
                <span className="shipping-number">02</span>
              </div>
              <div className="shipping-card-content">
                <h3>Land Transport</h3>
                <p>High-capacity road transport for dry bulk and chemical goods across regional networks.</p>
              </div>
            </div>

            {/* 03 Air Freight */}
            <div className="shipping-card">
              <div className="shipping-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/freight.webp" alt="Air Freight" />
                <span className="shipping-number">03</span>
              </div>
              <div className="shipping-card-content">
                <h3>Air Freight</h3>
                <p>Fast delivery for urgency-critical industrial chemicals and sample consignments.</p>
              </div>
            </div>

            {/* 04 Ocean Freight */}
            <div className="shipping-card">
              <div className="shipping-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/custom.webp" alt="Ocean Freight" />
                <span className="shipping-number">04</span>
              </div>
              <div className="shipping-card-content">
                <h3>Ocean Freight</h3>
                <p>Bulk ocean shipping for global commodities, minerals, and agricultural fertilizers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GET IN TOUCH */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="about-grid">
            <div className="contact-form-wrapper reveal">
              <h3 style={{ fontSize: '1.75rem', color: 'var(--dark-bg)', marginBottom: '1.5rem' }}>Get In Touch!</h3>
              <form onSubmit={handleHomeContactSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={homeContact.name}
                    onChange={(e) => setHomeContact({ ...homeContact, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    value={homeContact.phone}
                    onChange={(e) => setHomeContact({ ...homeContact, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    value={homeContact.email}
                    onChange={(e) => setHomeContact({ ...homeContact, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Write Your Message Here..."
                    required
                    value={homeContact.message}
                    onChange={(e) => setHomeContact({ ...homeContact, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Request <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            <div className="about-text-content reveal" style={{ paddingLeft: '2rem' }}>
              <div className="section-subtitle">Get In Touch</div>
              <h2 className="section-title">Building With Passion Ensuring Satisfactions</h2>
              <p>
                Whether you need chemical raw materials, bulk agricultural fertilizers, or custom toll manufacturing solutions, our experienced international trade team is ready to consult and deliver.
              </p>
              <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '1.5rem', borderLeft: '4px solid #25D366', boxShadow: 'var(--shadow-md)', marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700', display: 'block' }}>WhatsApp Us Directly</span>
                  <a href="https://wa.me/923008247823?text=Hello%2C%20how%20can%20i%20help%20you%3F" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--dark-bg)' }}>+92 300 8247823</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
