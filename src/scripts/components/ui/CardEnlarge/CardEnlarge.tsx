import React, { useState } from 'react';
import './CardEnlarge.scss';

export const CardEnlarge = () => {
  const [open, isOpened] = useState(false);

  const close = (e: any) => {
    e.stopPropagation();
    isOpened(false);
  };

  return (
    <main onClick={() => isOpened(true)} className={'card ' + (open ? 'opened' : 'closed')}>
      <div className="heading">
        <h2>This is the Title</h2>
        {open && (
          <button className="shrink-button" onClick={close}>
            X
          </button>
        )}
      </div>
      <article>
        <p>
          If we find life out there, and it&apos;s not us, we will deem it not intelligent. But what may be equally as
          likely is that we find life that&apos;s vastly more intelligent than we are. If that&apos;s the case, we are
          putty in their hands.
        </p>
        <p>
          &apos;Cosmos&apos; is an occasion to bring everything that I have, all of my capacity to communicate. We may
          go to the edge of the universe, but we&apos;re going to land right on you: in your heart, in your soul, in
          your mind.
        </p>
        <p>My goal is to have people know that they are participants in this great unfolding cosmic story.</p>
        <p>
          Once you have an innovation culture, even those who are not scientists or engineers - poets, actors,
          journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They
          embrace the concept of an innovation culture. They vote in ways that promote it. They don&apos;t fight science
          and they don&apos;t fight technology.
        </p>
        <p>
          Let&apos;s say intelligence is your ability to compose poetry, symphonies, do art, math and science. Chimps
          can&apos;t do any of that, yet we share 99 percent DNA. Everything that we are, that distinguishes us from
          chimps, emerges from that one-percent difference.
        </p>
      </article>
      <aside>
        <p>
          Last Edited By: <a href="/#">John Doe</a>
        </p>
      </aside>
    </main>
  );
};
