import React, { useRef } from 'react';
import './Pagination.scss';

export const Pagination = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const handleShow = (i: number) => {
    switch (i) {
      case 1:
        if (null !== ref1.current) {
          ref1.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        break;
      case 2:
        if (null !== ref2.current) {
          ref2.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        break;
      case 3:
        if (null !== ref3.current) {
          ref3.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        break;
      case 4:
        if (null !== ref4.current) {
          ref4.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        break;
    }
  };

  const cards = [
    {
      ref: ref1,
      title: 'Title',
      subtext: 'some subtext',
    },
    {
      ref: ref2,
      title: 'Second Title',
      subtext: 'another subtext',
    },
    {
      ref: ref3,
      title: 'Third Title',
      subtext: 'yet another subtext',
    },
    {
      ref: ref4,
      title: 'Fourth Title',
      subtext: 'woohoo yet another subtext',
    },
  ];

  const buttons = [1, 2, 3, 4];

  return (
    <div>
      <div className="slides">
        {cards.map((card, i) => (
          // eslint-disable-next-line
          <div key={i++} className={'card ' + 'card' + i} ref={card.ref}>
            <h1>{card.title}</h1>
            <p>{card.subtext}</p>
          </div>
        ))}
      </div>
      <div className="options">
        {buttons.map((buttonNum, i) => (
          <button
            // eslint-disable-next-line
            className={'option ' + 'option' + buttonNum}
            key={i++}
            onClick={() => handleShow(buttonNum)}
            type="button"
          >
            {'Card ' + buttonNum}
          </button>
        ))}
      </div>
    </div>
  );
};
