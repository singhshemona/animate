import React, { useState } from 'react';
import './Menu.scss';

export const Menu = () => {
  const [first, setFirst] = useState(false);

  return (
    <nav>
      <ul className="menu-items">
        <li onMouseEnter={() => setFirst(true)} onMouseLeave={() => setFirst(false)}>
          <span className={'heading ' + (first && 'selected')}>Home</span>
          {first && (
            <ul className={'sub-items ' + (first && 'on')}>
              <li>Current Projects</li>
              <li>Upcoming Visions</li>
              <li>Quarter 4 Goals</li>
            </ul>
          )}
        </li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Job Openings</li>
      </ul>
    </nav>
  );
};
