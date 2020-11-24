import React, { useState } from 'react';
import './Range.scss';

type Props = {
  showValue: boolean;
};

export const Range = ({ showValue }: Props) => {
  const [value, isValue] = useState('20');

  return (
    <div className="range">
      <label>
        Slider Label
        <input
          onChange={(event) => isValue(event.target.value)}
          type="range"
          min="0"
          max="100"
          defaultValue="20"
          className="range-input"
        />
      </label>
      {showValue && <p className="value">{value}</p>}
    </div>
  );
};
