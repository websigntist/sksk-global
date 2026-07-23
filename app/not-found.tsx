import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/* PAGE TITLE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>404 - Page Not Found</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>404 Error</span>
          </div>
        </div>
      </section>

      {/* 404 CONTENT SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div
            style={{
              background: '#FFFFFF',
              maxWidth: '700px',
              margin: '0 auto',
              borderRadius: '20px',
              padding: '4rem 2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 30px rgba(227, 27, 35, 0.08)',
              textAlign: 'center',
              borderTop: '5px solid var(--primary-red)',
            }}
          >
            {/* 404 Glowing Number */}
            <div
              style={{
                fontSize: '6rem',
                fontWeight: '900',
                lineHeight: '1',
                background: 'linear-gradient(135deg, #E31B23 0%, #0F172A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem',
                letterSpacing: '-0.04em',
              }}
            >
              404
            </div>

            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(227, 27, 35, 0.08)',
                color: 'var(--primary-red)',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                border: '1px solid rgba(227, 27, 35, 0.2)',
              }}
            >
              <i className="fas fa-compass"></i>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--dark-bg)', marginBottom: '0.75rem' }}>
              Oops! Page Not Found
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem auto' }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track!
            </p>

            {/* ACTION BUTTONS */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary">
                <i className="fas fa-home"></i> Back To Home
              </Link>
              <Link href="/products" className="btn btn-hero-outline" style={{ borderColor: 'var(--dark-bg)', color: 'var(--dark-bg)' }}>
                <i className="fas fa-boxes"></i> View Products
              </Link>
              <Link href="/contact" className="btn btn-hero-outline" style={{ borderColor: 'var(--primary-red)', color: 'var(--primary-red)' }}>
                <i className="fas fa-envelope"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
