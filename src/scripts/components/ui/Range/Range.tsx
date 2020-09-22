import React from 'react';
import './Range.scss';

export const Range = () => {
  return <input type="range" min="1" max="100" defaultValue="20" className="range" />;
};
