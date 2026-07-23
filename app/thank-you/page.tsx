'use client';

import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const whatsappUrl = `https://wa.me/923008247823?text=${encodeURIComponent('Hello, I just submitted an inquiry on your website.')}`;

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1.5rem', background: 'var(--light-bg)' }}>
      <div
        className="reveal active"
        style={{
          background: 'white',
          maxWidth: '650px',
          width: '100%',
          borderRadius: '20px',
          padding: '3.5rem 2.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          textAlign: 'center',
          borderTop: '5px solid var(--primary-red)',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#10B981',
            fontSize: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
          }}
        >
          <i className="fas fa-check-circle"></i>
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--dark-bg)', marginBottom: '1rem' }}>
          Thank You!
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', marginBottom: '2rem' }}>
          Your inquiry has been successfully sent to <strong>info@sksglobalassociates.com</strong>. Our international trade specialists will review your requirements and respond within <strong>24 business hours</strong>.
        </p>

        <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '2.5rem', textAlign: 'left' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--dark-bg)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-shield-alt" style={{ color: 'var(--primary-red)' }}></i> What Happens Next?
          </h4>
          <ul style={{ fontSize: '0.88rem', color: '#64748B', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>&bull; Our sourcing team verifies product availability and chemical specifications.</li>
            <li>&bull; You will receive a detailed quotation and commercial terms via email.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            <i className="fas fa-home"></i> Back To Home
          </Link>

        </div>
      </div>
    </div>
  );
}
