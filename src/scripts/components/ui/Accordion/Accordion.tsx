import React, { useState } from 'react';
import './Accordion.scss';

export const Accordion = () => {
  const [whichAccordion, isWhichAccordion] = useState('');

  const toggleAccordion = (event: any) => {
    const accordionSelected = event.target.className;
    isWhichAccordion(accordionSelected);
    if (whichAccordion === event.target.className) {
      isWhichAccordion('');
    }
  };

  return (
    <div className="accordion">
      <div className="selection">
        <button onClick={toggleAccordion} className="first">
          First Title
        </button>
        <div className={'content ' + (whichAccordion === 'first' ? 'first-show' : 'hide')}>
          <p>This is the content</p>
        </div>
      </div>
      <div className="selection">
        <button onClick={toggleAccordion} className="second">
          Second Title
        </button>
        <div className={'content ' + (whichAccordion === 'second' ? 'second-show' : 'hide')}>
          <p>This is more content</p>
        </div>
      </div>
      <div className="selection">
        <button onClick={toggleAccordion} className="third">
          Third Title
        </button>
        <div className={'content ' + (whichAccordion === 'third' ? 'third-show' : 'hide')}>
          <p>This is another content</p>
        </div>
      </div>
    </div>
  );
};
