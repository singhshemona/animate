import React, { useRef, useState } from 'react';
import './Pagination.scss';

export const Pagination = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState(0);

  const handleShow = (i: number) => {
    setActiveButton(i);
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
      subtext:
        "Where there's water on Earth, you find life as we know it. So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.",
    },
    {
      ref: ref2,
      title: 'Second Title',
      subtext:
        "Typically, when you look for role models, you want someone who has your interests and came from the same background. Well, look how restricting that is. What people should do is take role models a la carte. If there's someone whose character you appreciated, you respect that trait.",
    },
    {
      ref: ref3,
      title: 'Third Title',
      subtext:
        "In the animal kingdom, one of the keys to survival is to outwit your enemies. And when you're surrounded by carnivores, one of the best strategies is to fade into the background and disappear.",
    },
    {
      ref: ref4,
      title: 'Fourth Title',
      subtext:
        "Half of my library are old books because I like seeing how people thought about their world at their time. So that I don't get bigheaded about something we just discovered and I can be humble about where we might go next. Because you can see who got stuff right and most of the people who got stuff wrong.",
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
            className={'option ' + 'option' + buttonNum + " " + (activeButton === buttonNum && 'active')}
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
