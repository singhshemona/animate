import React, { useState } from 'react';
import './Accordion.scss';

type Props = {
  icon: symbol;
};

export const Accordion = ({ icon }: Props) => {
  const [whichAccordion, isWhichAccordion] = useState('');

  const toggleAccordion = (event: any) => {
    // find which title was selected
    const accordionSelected = event.target.className;

    // set it as the new selected section
    isWhichAccordion(accordionSelected);

    // if clicking on one that is already open, set the state to empty to close accordion
    if (whichAccordion === event.target.className) {
      isWhichAccordion('');
    }
  };

  const accordions = [
    {
      number: 'first',
      button: 'First Title',
      subtext:
        'Part of what it is to be scientifically-literate, it&apos;s not simply, &apos;Do you know what DNA is? Or what the Big Bang is? That&apos;s an aspect of science literacy. The biggest part of it is do you know how to think about information that&apos;s presented in front of you. Even with all our technology and the inventions that make modern life so much easier than it once was, it takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re still at the mercy of nature.',
    },
    {
      number: 'second',
      button: 'Second Title',
      subtext:
        'Even with all our technology and the inventions that make modern life so much easier than it once was, it takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re still at the mercy of nature.',
    },
    {
      number: 'third',
      button: 'Third Title',
      subtext:
        'Keep in mind that if you take a tour through a hospital and look at every machine with on and off switch that is brought into the service of diagnosing the human condition, that machine is based on principles of physics discovered by a physicist in a machine designed by an engineer. Even with all our technology and the inventions that make modern life so much easier than it once was, it takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re still at the mercy of nature.',
    },
  ];

  return (
    <div className="accordion">
      {accordions.map((accordion, i) => (
        <div key={i++} className="selection">
          <button onClick={toggleAccordion} className={accordion.number}>
            {icon}
            {accordion.button}
          </button>
          <div
            tabIndex={0}
            className={'content ' + (whichAccordion === accordion.number ? accordion.number + '-show' : 'hide')}
          >
            <p tabIndex={0}>{accordion.subtext.substring(0, 150)}</p>
            <p tabIndex={0}>{accordion.subtext.substring(150, 450)}</p>
          </div>
        </div>
      ))}

      {/* <div className="selection">
        <button onClick={toggleAccordion} className="first">
          {icon}
          First Title
        </button>
        <div tabIndex={0} className={'content ' + (whichAccordion === 'first' ? 'first-show' : 'hide')}>
          <p tabIndex={0}>
            Part of what it is to be scientifically-literate, it&apos;s not simply, &apos;Do you know what DNA is? Or
            what the Big Bang is? That&apos;s an aspect of science literacy. The biggest part of it is do you know how
            to think about information that&apos;s presented in front of you.
          </p>
          <p tabIndex={0}>
            Even with all our technology and the inventions that make modern life so much easier than it once was, it
            takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re
            still at the mercy of nature.
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
          <p>
            Part of what it is to be scientifically-literate, it&apos;s not simply, &apos;Do you know what DNA is? Or
            what the Big Bang is? That&apos;s an aspect of science literacy. The biggest part of it is do you know how
            to think about information that&apos;s presented in front of you.
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
          <p>
            Even with all our technology and the inventions that make modern life so much easier than it once was, it
            takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we&apos;re
            still at the mercy of nature.
          </p>
        </div>
      </div> */}
    </div>
  );
};
