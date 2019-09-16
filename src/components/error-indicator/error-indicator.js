import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({error}) => {
  return <div>{String(error)}</div>;
}

export default ErrorIndicator;
