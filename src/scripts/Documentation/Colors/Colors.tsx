import React from 'react';
import './Colors.scss';

export const Colors = () => {
  return (
    <div className="palette">
      <div>
        <p>Primary</p>
        <p className="hex">#3D405B</p>
        <div className="color primary"></div>
      </div>
      <div>
        <p>Secondary</p>
        <p className="hex">#F4F1DE</p>
        <div className="color secondary"></div>
      </div>
      <div>
        <p>Green (Success)</p>
        <p className="hex">#46725E</p>
        <div className="color green"></div>
      </div>
      <div>
        <p>Red (Failure)</p>
        <p className="hex">#8F2D19</p>
        <div className="color red"></div>
      </div>
    </div>
  );
};
