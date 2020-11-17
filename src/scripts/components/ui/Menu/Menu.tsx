import React, { useState } from 'react';
import './Menu.scss';

export const Menu = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const menuInfo = {
    levelOne: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
    },
    levelTwo: {
      home: ['Current Projects', 'Upcoming Visions', 'Quarter 4 Goals'],
      about: ['How', 'Can I Make', 'These Words Different'],
      contact: ['How', 'Can I Make', 'These Words Different'],
    },
    levelThree: {
      home: ['Sprint Planning', 'Mission Statement', 'More Words'],
      about: ['How', 'Can I Make', 'These Words Different'],
    },
  };

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
        <li onMouseEnter={() => setThird(true)} onMouseLeave={() => setThird(false)}>
          <span className={'heading ' + (third && 'selected')}>Contact</span>
          {third && (
            <ul className={'sub-items ' + (third && 'on')}>
              <li>Current Projects</li>
              <li>Upcoming Visions</li>
              <li>Quarter 4 Goals</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
