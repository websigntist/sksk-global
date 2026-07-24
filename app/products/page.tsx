'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/context/QuoteModalContext';

export default function ProductsPage() {
  const { openModal } = useQuoteModal();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const productsList = [
    {
      name: 'Diammonium Phosphate Fertilizer (DAP)',
      category: 'fertilizer',
      tag: 'Fertilizer',
      img: '/images/dap.webp',
      desc: 'Premium grade DAP fertilizer high in Nitrogen and Phosphorus for agricultural soil enrichment.',
    },
    {
      name: 'Sulphur',
      category: 'chemical',
      tag: 'Chemical / Mineral',
      img: '/images/granular-sulphur-2.webp',
      desc: 'High purity granular and bright yellow molten sulphur for chemical synthesis and fertilizer plants.',
    },
    {
      name: 'Lake Salt',
      category: 'salt',
      tag: 'Salt Commodity',
      img: '/images/lakesalt.webp',
      desc: 'High purity industrial lake salt ideal for chlor-alkali production, water treatment, and de-icing.',
    },
    {
      name: 'Himalayan Rock Salt',
      category: 'salt',
      tag: 'Salt Commodity',
      img: '/images/salt.webp',
      desc: '100% natural pink rock salt directly mined from Khewra mineral deposits for export globally.',
    },
    {
      name: 'Clinker',
      category: 'cement',
      tag: 'Cement & Building',
      img: '/images/cement.webp',
      desc: 'Grey Portland cement clinker for high grade concrete manufacturing and construction supply.',
    },
    {
      name: 'Ordinary Portland Cement Type 1, 2 and Alkali',
      category: 'cement',
      tag: 'Cement & Building',
      img: '/images/cement1.webp',
      desc: 'Standardized heavy construction Portland cement conforming strictly to ASTM C150 standards.',
    },
    {
      name: 'Sulphuric Acid / Hydrochloric Acid',
      category: 'chemical',
      tag: 'Chemical',
      img: '/images/02.webp',
      desc: 'Concentrated industrial acids supplied in ISO tanks and bulk containers for chemical synthesis.',
    },
    {
      name: 'Rock Phosphate',
      category: 'fertilizer',
      tag: 'Fertilizer',
      img: '/images/phostphat.webp',
      desc: 'High P2O5 grade rock phosphate suitable for SSP, TSP, and phosphoric acid manufacturing.',
    },
    {
      name: 'Local Coal / Imported Coal',
      category: 'energy',
      tag: 'Energy',
      img: '/images/coal.webp',
      desc: 'Thermal and metallurgical coal for power plants and industrial kilns.',
    },
  ];

  const categories = [
    { label: 'All Products', value: 'all' },
    { label: 'Fertilizers', value: 'fertilizer' },
    { label: 'Salt Commodities', value: 'salt' },
    { label: 'Cement & Building', value: 'cement' },
    { label: 'Chemicals', value: 'chemical' },
    { label: 'Energy & Coal', value: 'energy' },
  ];

  const filteredProducts = productsList.filter((product) => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.desc.toLowerCase().includes(q) ||
      product.tag.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* PAGE TITLE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>Our Products</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Our Products</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)', paddingBottom: '6rem' }}>
        <div className="container text-center">
          <div className="section-subtitle">Products We Handle</div>
          <h2 className="section-title">Intentional Trading & Sourcing</h2>
          <p className="section-description">
            Browse our comprehensive portfolio of bulk commodities, raw chemicals, agricultural inputs, and industrial minerals.
          </p>

          {/* Category Filter Tabs */}
          <div className="product-filters">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Live Search Box */}
          <div className="product-search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search products by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Grid of Products */}
          <div className="products-grid">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-img-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.img} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <button className="btn-product-quote" onClick={() => openModal(product.name)}>
                    <i className="fas fa-paper-plane"></i> REQUEST QUOTE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
