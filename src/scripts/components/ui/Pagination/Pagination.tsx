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
          ref1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 2:
        if (null !== ref2.current) {
          ref2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 3:
        if (null !== ref3.current) {
          ref3.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 4:
        if (null !== ref4.current) {
          ref4.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
    }
  };

  const cards = [
    {
      id: 1,
      ref: ref1,
      title: 'Title',
      subtext: 'some subtext',
    },
    {
      id: 2,
      ref: ref2,
      title: 'Second Title',
      subtext: 'another subtext',
    },
    {
      id: 3,
      ref: ref3,
      title: 'Third Title',
      subtext: 'yet another subtext',
    },
    {
      id: 3,
      ref: ref4,
      title: 'Fourth Title',
      subtext: 'woohoo yet another subtext',
    },
  ];

  return (
    <div>
      <div className="slides">
        {cards.map((card) => (
          <div key={card.id} className="card" ref={card.ref}>
            <h1>{card.title}</h1>
            <p>{card.subtext}</p>
          </div>
        ))}
      </div>
      <div className="counter">
        <button onClick={() => handleShow(1)} type="button">
          Card 1
        </button>
        <button onClick={() => handleShow(2)} type="button">
          Card 2
        </button>
        <button onClick={() => handleShow(3)} type="button">
          Card 3
        </button>
        <button onClick={() => handleShow(4)} type="button">
          Card 4
        </button>
      </div>
    </div>
  );
};
