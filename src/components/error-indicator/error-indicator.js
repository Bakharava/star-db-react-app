import React from 'react';

import './error-indicator.css';
import icon from './RS.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="boom" />
      <span className="boom">Boom!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it</span>
    </div>
  );
};

export default ErrorIndicator;
