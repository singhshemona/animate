import React, { useState } from 'react';
import './CardEnlarge.scss';

export const CardEnlarge = () => {
  const [open, isOpened] = useState(false);

  // const close = (e: any) => {
  //   e.stopPropagation();
  //   isOpened(false);
  // };

  const shorten = (str: string, maxLen: number, separator = ' ') => {
    if (str.length <= maxLen) {
      return str;
    } else {
      return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
  };

  const articleContent = `<p>
    If we find life out there, and it's not us, we will deem it not intelligent. But what may be equally as
    likely is that we find life that's vastly more intelligent than we are. If that's the case, we are putty in
    their hands.
  </p>
  <p>
    'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the
    edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind.
  </p>
  <p>My goal is to have people know that they are participants in this great unfolding cosmic story.</p>
  <p>
    Once you have an innovation culture, even those who are not scientists or engineers - poets, actors,
    journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They
    embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science
    and they don't fight technology.
  </p>
  <p>
    Let's say intelligence is your ability to compose poetry, symphonies, do art, math and science. Chimps can't
    do any of that, yet we share 99 percent DNA. Everything that we are, that distinguishes us from chimps,
    emerges from that one-percent difference.
  </p>
      `;

  return (
    <main className={'card ' + (open ? 'opened' : 'closed')}>
      <div className="heading">
        <h2>Let&apos;s Learn More About the Cosmos</h2>
        {open && (
          <button className="shrink-button" onClick={() => isOpened(false)}>
            X
          </button>
        )}
      </div>
      {open ? (
        <>
          <article dangerouslySetInnerHTML={{ __html: articleContent }} />
          <button className="expand" onClick={() => isOpened(false)}>
            Collapse
          </button>
        </>
      ) : (
        <>
          <article dangerouslySetInnerHTML={{ __html: shorten(articleContent, 420) + '...' }} />
          <button className="expand" onClick={() => isOpened(true)}>
            Expand for more info
          </button>
        </>
      )}
      <aside>
        <p>
          Last Edited By: <a href="/#">John Doe</a>
        </p>
      </aside>
    </main>
  );
};
