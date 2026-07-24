'use client';

import React, { useState, useEffect } from 'react';

interface ProductImageSliderProps {
  images: string[];
  alt: string;
  interval?: number;
}

export default function ProductImageSlider({ images, alt, interval = 3000 }: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="product-slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          src={src}
          alt={`${alt} slide ${index + 1}`}
          className={`product-slider-img ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            className="product-slider-arrow prev"
            onClick={handlePrev}
            aria-label="Previous slide"
            type="button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="product-slider-arrow next"
            onClick={handleNext}
            aria-label="Next slide"
            type="button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="product-slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`product-slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
