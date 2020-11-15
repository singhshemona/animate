import React, { useState } from 'react';
import './ItemSelection.scss';

export const ItemSelection = () => {
  const [isLift, setIsLifted] = useState(false);

  return (
    <div className="card " onMouseEnter={() => setIsLifted(true)} onMouseLeave={() => setIsLifted(false)}>
      <div className={isLift ? 'lifted' : 'notLifted'}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <h2>Hello</h2>
        <p>
          Exposing new ways to evolve our design language pulling teeth, nor let&apos;s schedule a standup during the
          sprint to review our kpis and drop-dead date. It&apos;s not hard guys gain traction prepare yourself to swim
          with the sharks drink from the firehose
        </p>
        {isLift && (
          // content in here only shows up on hover
          <div className="toggleContent">
            <button className="select">We want this to appear on hover</button>
            <p className="disclaimer">Disclaimer: clicking on this will deliver a flower to your door</p>
          </div>
        )}
      </div>
    </div>
  );
};
