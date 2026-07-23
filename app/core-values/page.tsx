import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Core Values | SKS Global Associates',
  description: 'Discover the five core values of SKS Global Associates: Integrity, Harmony, Competency, Challenge, and Global.',
};

export default function CoreValuesPage() {
  const detailedValues = [
    {
      title: 'INTEGRITY',
      icon: 'fa-heart',
      img: '/images/road.webp',
      alt: 'Integrity in Logistics',
      desc: "Global Associates is the renowned importers, exporters and manufacture's representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture's rep and has evolved into an organization with decades of experience in different products sales and marketing.",
    },
    {
      title: 'HARMONY',
      icon: 'fa-handshake',
      img: '/images/experience.webp',
      alt: 'Harmony and Mutual Trust',
      desc: "Global Associates is the renowned importers, exporters and manufacture's representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture's rep and has evolved into an organization with decades of experience in different products sales and marketing.",
    },
    {
      title: 'COMPETENCY',
      icon: 'fa-award',
      img: '/images/custom.webp',
      alt: 'Professional Competency',
      desc: "Global Associates is the renowned importers, exporters and manufacture's representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture's rep and has evolved into an organization with decades of experience in different products sales and marketing.",
    },
    {
      title: 'CHALLENGE',
      icon: 'fa-bullseye',
      img: '/images/safe.webp',
      alt: 'Accepting Challenge',
      desc: "Global Associates is the renowned importers, exporters and manufacture's representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture's rep and has evolved into an organization with decades of experience in different products sales and marketing.",
    },
    {
      title: 'GLOBAL',
      icon: 'fa-globe-americas',
      img: '/images/freight.webp',
      alt: 'Global Network',
      desc: "Global Associates is the renowned importers, exporters and manufacture's representative in Pakistan catering different industries from more than a decade. Global Associates buys and sells product to and from major producers, traders and distributors, the company also has products toll produced on their behalf. Global Associates was started in 1992 as a manufacture's rep and has evolved into an organization with decades of experience in different products sales and marketing.",
    },
  ];

  return (
    <>
      {/* PAGE TITLE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>Core Values</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Core Values</span>
          </div>
        </div>
      </section>

      {/* DETAILED CORE VALUES SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div className="section-subtitle">Guiding Principles</div>
            <h2 className="section-title">Five Core Values</h2>
            <p className="section-description">
              Our core values are the bedrock of our organizational identity, driving transparent trade, client satisfaction, and operational excellence across global markets.
            </p>
          </div>

          <div className="detailed-values-list">
            {detailedValues.map((val, idx) => (
              <div key={idx} className="detailed-value-item reveal">
                <div className="value-img-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={val.img} alt={val.alt} />
                </div>
                <div className="value-content-box">
                  <h3>
                    <i className={`fas ${val.icon} text-red`}></i> {val.title}
                  </h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
