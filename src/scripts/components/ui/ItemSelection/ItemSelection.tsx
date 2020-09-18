import React, { useState } from 'react';
import './ItemSelection.scss';

export const ItemSelection = () => {
  const [isLift, setIsLifted] = useState(false);

  return (
    <div className="card" onMouseEnter={() => setIsLifted(true)} onMouseLeave={() => setIsLifted(false)}>
      <div className={isLift ? 'lifted' : 'notLifted'}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <h2>Hello</h2>
        <p>
          Exposing new ways to evolve our design language pulling teeth, nor let's schedule a standup during the sprint
          to review our kpis and drop-dead date.
        </p>
        <button>We want this to appear on hover</button>
      </div>
    </div>
  );
};
