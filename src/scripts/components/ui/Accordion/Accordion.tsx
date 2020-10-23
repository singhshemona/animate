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
          <p>
            Part of what it is to be scientifically-literate, it&apos;s not simply, &apos;Do you know what DNA is? Or
            what the Big Bang is? That&apos;s an aspect of science literacy. The biggest part of it is do you know how
            to think about information that&apos;s presented in front of you.
          </p>
        </div>
      </div>
      <div className="selection">
        <button onClick={toggleAccordion} className="second">
          Second Title
        </button>
        <div className={'content ' + (whichAccordion === 'second' ? 'second-show' : 'hide')}>
          <p>
            Even with all our technology and the inventions that make modern life so much easier than it once was, it
            takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re
            still at the mercy of nature.
          </p>
        </div>
      </div>
      <div className="selection">
        <button onClick={toggleAccordion} className="third">
          Third Title
        </button>
        <div className={'content ' + (whichAccordion === 'third' ? 'third-show' : 'hide')}>
          <p>
            Keep in mind that if you take a tour through a hospital and look at every machine with on and off switch
            that is brought into the service of diagnosing the human condition, that machine is based on principles of
            physics discovered by a physicist in a machine designed by an engineer.
          </p>
        </div>
      </div>
    </div>
  );
};
