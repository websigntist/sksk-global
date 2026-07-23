'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [activeMap, setActiveMap] = useState<'dallas' | 'dubai' | 'karachi'>('dallas');
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone || !formState.email || !formState.message) {
      setFeedback({ msg: 'Please fill out all required fields.', type: 'error' });
      return;
    }

    setSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@sksglobalassociates.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Contact Us Page Inquiry - SKS Global',
          Name: formState.name,
          Phone: formState.phone,
          Email: formState.email,
          Message: formState.message,
          _template: 'table',
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setFormState({ name: '', phone: '', email: '', message: '' });
    setSubmitting(false);
    router.push('/thank-you');
  };

  return (
    <>
      {/* PAGE TITLE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: CONTACT INFORMATION CARDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div className="section-subtitle">Get In Touch</div>
            <h2 className="section-title">Our Contact Information</h2>
            <p className="section-description">
              We operate across major global hubs to provide uninterrupted support and sourcing solutions.
            </p>
          </div>

          <div className="contact-info-cards reveal">
            {/* Card 1: Our Address */}
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Address</h3>
              <p>
                Dallas-TX, USA,<br />
                Dubai, UAE and<br />
                Karachi, Pakistan.
              </p>
            </div>

            {/* Card 2: Email Address */}
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>
                <a href="mailto:info@sksglobalassociates.com" style={{ color: 'inherit' }}>
                  info@sksglobalassociates.com
                </a>
                <br />
                <a href="mailto:order@sksglobalassociates.com" style={{ color: 'inherit' }}>
                  order@sksglobalassociates.com
                </a>
              </p>
            </div>

            {/* Card 3: Phone & WhatsApp */}
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
              </div>
              <h3>Phone & WhatsApp</h3>
              <p>
                <a href="https://wa.me/923008247823?text=Hello%2C%20how%20can%20i%20help%20you%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i> +92 300 8247823
                </a>
                <br />
                <a href="tel:+922132567823" style={{ color: 'inherit' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--primary-red)', marginRight: '6px' }}></i> +92 21 32567823
                </a>
              </p>
            </div>
          </div>

          {/* SECTION 2: INTERACTIVE MAPS SWITCHER */}
          <div className="maps-container reveal">
            <div className="maps-tabs">
              <button
                className={`map-tab ${activeMap === 'dallas' ? 'active' : ''}`}
                onClick={() => setActiveMap('dallas')}
              >
                <i className="fas fa-city"></i> Dallas (USA)
              </button>
              <button
                className={`map-tab ${activeMap === 'dubai' ? 'active' : ''}`}
                onClick={() => setActiveMap('dubai')}
              >
                <i className="fas fa-building"></i> Dubai (UAE)
              </button>
              <button
                className={`map-tab ${activeMap === 'karachi' ? 'active' : ''}`}
                onClick={() => setActiveMap('karachi')}
              >
                <i className="fas fa-globe-asia"></i> Karachi (Pakistan)
              </button>
            </div>

            {/* Dallas Map */}
            <iframe
              id="map-dallas"
              className={`map-frame ${activeMap === 'dallas' ? 'active' : ''}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107335.79469502213!2d-96.8716248386121!3d32.77815525547463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e983d1223521e%3A0x2607137f61c31210!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Dubai Map */}
            <iframe
              id="map-dubai"
              className={`map-frame ${activeMap === 'dubai' ? 'active' : ''}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28873.30397554907!2d55.26388421882836!3d25.19719698544991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Karachi Map */}
            <iframe
              id="map-karachi"
              className={`map-frame ${activeMap === 'karachi' ? 'active' : ''}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.67566735515!2d66.9749114631316!3d24.860734288079636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* SECTION 3: CONTACT FORM */}
          <div className="contact-form-wrapper reveal" style={{ maxWidth: '750px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--dark-bg)', marginBottom: '0.5rem' }}>Leave Us Your Info</h3>
              <p style={{ color: 'var(--text-muted)' }}>And We Will Get Back To You.</p>
            </div>

            {feedback && (
              <div
                style={{
                  display: 'block',
                  padding: '0.9rem',
                  borderRadius: '6px',
                  marginBottom: '1.5rem',
                  backgroundColor: feedback.type === 'error' ? '#FEE2E2' : '#DCFCE7',
                  color: feedback.type === 'error' ? '#991B1B' : '#166534',
                  border: feedback.type === 'error' ? '1px solid #FCA5A5' : '1px solid #86EFAC',
                }}
              >
                {feedback.msg}
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="hero-input-wrap">
                <i className="far fa-user input-icon"></i>
                <input
                  type="text"
                  id="formName"
                  className="form-control hero-input"
                  placeholder="Full Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="hero-input-wrap">
                <i className="fab fa-whatsapp input-icon"></i>
                <input
                  type="tel"
                  id="formPhone"
                  className="form-control hero-input"
                  placeholder="Phone / WhatsApp Number"
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <div className="hero-input-wrap">
                <i className="far fa-envelope input-icon"></i>
                <input
                  type="email"
                  id="formEmail"
                  className="form-control hero-input"
                  placeholder="Business Email Address"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="hero-input-wrap textarea-wrap">
                <i className="far fa-comment-alt input-icon"></i>
                <textarea
                  id="formMessage"
                  className="form-control hero-input"
                  placeholder="Write your inquiry or commodity requirements..."
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-hero-submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Submitting...
                  </>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span> <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
              <div className="hero-form-trust">
                <i className="fas fa-shield-alt"></i> <span>24h Fast Response &bull; 100% Confidential</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
