import React, { useState } from 'react';
import './Menu.scss';

export const Menu = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

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
        <li onMouseEnter={() => setSecond(true)} onMouseLeave={() => setSecond(false)}>
          <span className={'heading ' + (second && 'selected')}>About Us</span>
          {second && (
            <ul className={'sub-items ' + (second && 'on')}>
              <li>Current Projects</li>
              <li>Upcoming Visions</li>
              <li>Quarter 4 Goals</li>
            </ul>
          )}
        </li>
        <li>Contact</li>
        <li>Job Openings</li>
      </ul>
    </nav>
  );
};
