import React, { useState } from 'react';
import './Menu.scss';

export const Menu = () => {
  const [first, setFirst] = useState(false);

  return (
    <nav>
      <img src="placeholder" alt="logo" />
      <ul className="menu">
        <li onMouseEnter={() => setFirst(true)} onMouseLeave={() => setFirst(false)}>
          First Item
        </li>
        {first && (
          <ul className={'subitemList ' + (first ? 'on' : null)}>
            <li>1a Subitem</li>
            <li>1b Subitem</li>
            <li>1c Subitem</li>
          </ul>
        )}
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Fourth Item</li>
      </ul>
    </nav>
  );
};
