import React, { useState } from 'react';
import './Range.scss';

export const Range = () => {
  const [value, isValue] = useState('20');

  return (
    <div>
      <input
        onChange={(event) => isValue(event.target.value)}
        type="range"
        min="1"
        max="100"
        defaultValue="20"
        className="range"
      />
      <p className="value">{value}</p>
    </div>
  );
};
