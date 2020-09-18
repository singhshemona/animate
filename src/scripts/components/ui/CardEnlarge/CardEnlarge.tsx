import React, { useState } from 'react';
import './CardEnlarge.scss';

export const CardEnlarge = () => {
  const [open, isOpened] = useState(false);

  const close = (e: any) => {
    e.stopPropagation();
    isOpened(false);
  };

  return (
    <main onClick={() => isOpened(true)} className={(open ? 'yes' : 'no') + ' card'}>
      <div className="heading">
        <h2>This is the Title</h2>
        {open && (
          <button className="close" onClick={close}>
            X
          </button>
        )}
        {/* {
          open &&
          setTimeout(() => {
            <button onClick={close}>X</button>
          }, 1000)
        } */}
      </div>
      <article>
        <p>
          If we find life out there, and it's not us, we will deem it not intelligent. But what may be equally as likely
          is that we find life that's vastly more intelligent than we are. If that's the case, we are putty in their
          hands.
        </p>
        <p>
          'Cosmos' is an occasion to bring everything that I have, all of my capacity to communicate. We may go to the
          edge of the universe, but we're going to land right on you: in your heart, in your soul, in your mind.
        </p>
        <p>My goal is to have people know that they are participants in this great unfolding cosmic story.</p>
        <p>
          Once you have an innovation culture, even those who are not scientists or engineers - poets, actors,
          journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They
          embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and
          they don't fight technology.
        </p>
        <p>
          Let's say intelligence is your ability to compose poetry, symphonies, do art, math and science. Chimps can't
          do any of that, yet we share 99 percent DNA. Everything that we are, that distinguishes us from chimps,
          emerges from that one-percent difference.
        </p>
      </article>
      <aside>
        <p>
          Last Edited By: <a href="/#">John Doe</a>
        </p>
      </aside>
    </main>

    // Also works
    // <div>
    //   {
    //     open &&
    //     <button onClick={() => isOpened(false)}>X</button>
    //   }
    //   <div onClick={() => isOpened(true)} className={ open ? 'yes' : 'no' }>
    //     <h2>Some Text</h2>
    //     <p>Lorem Ipsum Hello</p>
    //   </div>
    // </div>
  );
};
