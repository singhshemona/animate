import React, { useRef, useState } from 'react';
import './Pagination.scss';

type Props = {
  numberOfItems: number;
};

export const Pagination = ({ numberOfItems }: Props) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState(1);

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
      case 5:
        if (null !== ref5.current) {
          ref5.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        break;
      case 6:
        if (null !== ref6.current) {
          ref6.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
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
    {
      ref: ref5,
      title: 'Fifth Title',
      subtext:
        "I'm perennially intrigued how people who lead largely evidence-based lives can, in a belief-based part of their mind, be certain that an invisible, divine entity created an entire universe just for us, or that the government is stockpiling space aliens in a secret desert location.",
    },
    {
      ref: ref6,
      title: 'Sixth Title',
      subtext:
        'If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.',
    },
  ];

  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="slides">
        {cards.slice(0, numberOfItems).map((card, i) => (
          // eslint-disable-next-line
          <div key={i++} className='card' ref={card.ref}>
            <h1>{card.title}</h1>
            <p>{card.subtext}</p>
          </div>
        ))}
      </div>
      <div className="options">
        {buttons.slice(0, numberOfItems).map((buttonNum, i) => (
          <button
            // eslint-disable-next-line
            className={'option ' + (activeButton === buttonNum && 'active')}
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
