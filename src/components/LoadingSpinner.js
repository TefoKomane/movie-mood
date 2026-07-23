import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Finding your perfect movie...</p>
    </div>
  );
}

export default LoadingSpinner;
