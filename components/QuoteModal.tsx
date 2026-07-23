'use client';

import React, { useState } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export const QuoteModal: React.FC = () => {
  const { isOpen, productName, closeModal } = useQuoteModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inquiry submitted for ${productName || 'product'}! We will contact you soon.`);
    setName('');
    setEmail('');
    setPhone('');
    setDetails('');
    closeModal();
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
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Business Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                required
                placeholder="+1 234 567 890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Required Quantity & Details</label>
              <textarea
                className="form-control"
                required
                placeholder="Specify target quantity (MT), specs, and destination port..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Inquiry <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
