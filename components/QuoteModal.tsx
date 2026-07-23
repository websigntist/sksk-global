'use client';

import React, { useState } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { useRouter } from 'next/navigation';

export const QuoteModal: React.FC = () => {
  const router = useRouter();
  const { isOpen, productName, closeModal } = useQuoteModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/ajax/info@sksglobalassociates.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Quote Inquiry for ${productName || 'General Product'} - SKS Global`,
          Name: name,
          Email: email,
          Phone: phone,
          Product: productName || 'General Product Quote',
          Message: details,
          _template: 'table',
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setName('');
    setEmail('');
    setPhone('');
    setDetails('');
    closeModal();
    router.push('/thank-you');
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>
            {productName ? `Inquire about ${productName}` : 'Request A Product Quote'}
          </h3>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input type="hidden" value={productName} />
            <div className="hero-input-wrap">
              <i className="far fa-user input-icon"></i>
              <input
                type="text"
                className="form-control hero-input"
                required
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="hero-input-wrap">
              <i className="far fa-envelope input-icon"></i>
              <input
                type="email"
                className="form-control hero-input"
                required
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="hero-input-wrap">
              <i className="fab fa-whatsapp input-icon"></i>
              <input
                type="tel"
                className="form-control hero-input"
                required
                placeholder="Phone / WhatsApp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="hero-input-wrap textarea-wrap">
              <i className="far fa-comment-alt input-icon"></i>
              <textarea
                className="form-control hero-input"
                required
                placeholder="Specify target quantity (MT), specs, and destination port..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
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
  );
};
