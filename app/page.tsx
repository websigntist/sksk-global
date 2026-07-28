'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { useRouter } from 'next/navigation';
import { FormLoadingOverlay } from '@/components/FormLoadingOverlay';
import ProductImageSlider from '@/components/ProductImageSlider';

export default function HomePage() {
  const router = useRouter();
  const { openModal } = useQuoteModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@sksglobalassociates.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Hero Quick Inquiry - SKS Global',
          _captcha: 'false',
          _template: 'basic',
          Name: heroForm.name,
          Phone: heroForm.phone,
          Email: heroForm.email,
          Message: heroForm.message,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setHeroForm({ name: '', phone: '', email: '', message: '' });
    router.push('/thank-you');
  };

  const handleHomeContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@sksglobalassociates.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Homepage Get In Touch Inquiry - SKS Global',
          _captcha: 'false',
          _template: 'basic',
          Name: homeContact.name,
          Phone: homeContact.phone,
          Email: homeContact.email,
          Message: homeContact.message,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setHomeContact({ name: '', phone: '', email: '', message: '' });
    router.push('/thank-you');
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
      images: [
        '/images/salt.webp',
        '/images/salt-2.webp',
        '/images/salt-3.webp',
        '/images/salt-4.webp',
      ],
      desc: '100% natural pink rock salt directly mined from Khewra mineral deposits for global export.',
    },
    {
      name: 'Clinker',
      category: 'Cement & Building',
      img: '/images/cement.webp',
      desc: 'Grey Portland cement clinker for high grade concrete manufacturing and construction.',
    },
    {
      name: 'Ordinary Portland Cement  Type l/ll LowAlkali',
      category: 'Cement & Building',
      img: '/images/cement1.webp',
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
                Importer, Exporter and <span>Manufacturers</span> Representative of <span>Chemicals</span> and Commodity
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
                  <div className="hero-stat-number">27<span>+</span></div>
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

            {/* Right Side Compact Stylish Hero Section Form */}
            <div className="hero-form-card reveal">
              <div className="hero-form-header">
                <div className="hero-form-tag">
                  <i className="fas fa-bolt"></i> Instant Quote
                </div>
                <h3>Quick Inquiry</h3>
                <p>Get an instant chemical & commodity quote</p>
              </div>
              <form onSubmit={handleHeroSubmit}>
                <div className="hero-input-wrap">
                  <i className="far fa-user input-icon"></i>
                  <input
                    type="text"
                    className="form-control hero-input"
                    placeholder="Full Name"
                    required
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap">
                  <i className="fab fa-whatsapp input-icon"></i>
                  <input
                    type="tel"
                    className="form-control hero-input"
                    placeholder="Phone / WhatsApp Number"
                    required
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap">
                  <i className="far fa-envelope input-icon"></i>
                  <input
                    type="email"
                    className="form-control hero-input"
                    placeholder="Business Email"
                    required
                    value={heroForm.email}
                    onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap textarea-wrap">
                  <i className="far fa-comment-alt input-icon"></i>
                  <textarea
                    className="form-control hero-input"
                    placeholder="Message or Product Specs..."
                    required
                    value={heroForm.message}
                    onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-hero-submit">
                  <span>REQUEST FREE QUOTE</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
                <div className="hero-form-trust">
                  <i className="fas fa-shield-alt"></i> <span>24h Fast Response &bull; 100% Confidential</span>
                </div>
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
                <h3>27+</h3>
                <p>Years of Sourcing Excellence</p>
              </div>
            </div>

            <div className="about-text-content reveal">
              <div className="section-subtitle">About Us</div>
              <h2 className="section-title">SKS Global Associates</h2>
              <p>
                27 years in international trade, connecting manufacturers with buyers across Asia, the Middle East and Africa. We founded Global Associates in 1992 as a manufacturer's representative, and over the decades it has grown into a business covering cement, coal, sulphur, chemicals, salt and fertilizers. We represent cement manufacturers in markets across Vietnam, China, Thailand, Saudi Arabia and Turkey. We also work as a sulphur and coal indenter, sourcing sulphur from Turkmenistan and Uzbekistan and coal from South Africa, Indonesia and the USA, then placing these with buyers in Pakistan, India, Bangladesh, China and Africa. Beyond this, We trade chemicals between Pakistan and China, export lake salt and pink salt from Pakistan, and handle fertilizer and rock phosphate exports. I also manufacture Single Super Phosphate, Nitro phosphate and Zinc Liquid.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Based across Dubai, Dallas and Karachi. Always open to connecting with manufacturers and buyers in these markets.
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
                  {p.images && p.images.length > 1 ? (
                    <ProductImageSlider images={p.images} alt={p.name} interval={3000} />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={p.img} alt={p.name} />
                  )}
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
                <div className="hero-input-wrap">
                  <i className="far fa-user input-icon"></i>
                  <input
                    type="text"
                    className="form-control hero-input"
                    placeholder="Your Full Name"
                    required
                    value={homeContact.name}
                    onChange={(e) => setHomeContact({ ...homeContact, name: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap">
                  <i className="fab fa-whatsapp input-icon"></i>
                  <input
                    type="tel"
                    className="form-control hero-input"
                    placeholder="Phone / WhatsApp Number"
                    required
                    value={homeContact.phone}
                    onChange={(e) => setHomeContact({ ...homeContact, phone: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap">
                  <i className="far fa-envelope input-icon"></i>
                  <input
                    type="email"
                    className="form-control hero-input"
                    placeholder="Business Email Address"
                    required
                    value={homeContact.email}
                    onChange={(e) => setHomeContact({ ...homeContact, email: e.target.value })}
                  />
                </div>
                <div className="hero-input-wrap textarea-wrap">
                  <i className="far fa-comment-alt input-icon"></i>
                  <textarea
                    className="form-control hero-input"
                    placeholder="Write Your Message Here..."
                    required
                    value={homeContact.message}
                    onChange={(e) => setHomeContact({ ...homeContact, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-hero-submit">
                  <span>SEND MESSAGE</span> <i className="fas fa-paper-plane"></i>
                </button>
                <div className="hero-form-trust">
                  <i className="fas fa-shield-alt"></i> <span>24h Fast Response &bull; 100% Confidential</span>
                </div>
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
      <FormLoadingOverlay isLoading={isSubmitting} />
    </>
  );
}
