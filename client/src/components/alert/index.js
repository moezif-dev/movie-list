import React from 'react';

const Alert = ({ type, children }) => {
  return (
  <div className={`callout ${type}`}>
    { children }
  </div>
  )
};

export default Alert;