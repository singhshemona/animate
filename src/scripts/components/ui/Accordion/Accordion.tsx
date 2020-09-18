import React, { useState } from 'react';
import './Accordion.scss';

export const Accordion = () => {
  const [whichAccordion, isWhichAccordion] = useState('first');

  const toggleAccordion = (event: any) => {
    const accordionSelected = event.target.className;
    isWhichAccordion(accordionSelected);
  };

  return (
    <div>
      <div className="accordion">
        <button onClick={toggleAccordion} className="first">
          First Title
        </button>
        {whichAccordion === 'first' && (
          <div className="show-hide">
            <p>This is the content</p>
          </div>
        )}
      </div>
      <div className="accordion">
        <button onClick={toggleAccordion} className="second">
          Second Title
        </button>
        {whichAccordion === 'second' && (
          <div className="show-hide">
            <p>This is more content</p>
          </div>
        )}
      </div>
    </div>
  );
};
