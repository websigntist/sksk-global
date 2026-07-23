'use client';

import React from 'react';

interface FormLoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export const FormLoadingOverlay: React.FC<FormLoadingOverlayProps> = ({
  isLoading,
  message = 'Transmitting inquiry to info@sksglobalassociates.com...',
}) => {
  if (!isLoading) return null;

  return (
    <div className="form-loading-overlay">
      <div className="form-loading-card">
        <div className="form-spinner-wrap">
          <div className="form-spinner-ring"></div>
          <div className="form-spinner-icon">
            <i className="fas fa-paper-plane"></i>
          </div>
        </div>
        <h3 className="form-loading-title">Submitting Inquiry</h3>
        <p className="form-loading-desc">{message}</p>
        <div className="form-loading-progress-bar">
          <div className="form-loading-progress-fill"></div>
        </div>
      </div>
    </div>
  );
};
