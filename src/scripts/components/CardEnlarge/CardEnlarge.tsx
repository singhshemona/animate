import React, { useState } from 'react';
import './CardEnlarge.scss';

type Props = {
  text: string;
};

export const CardEnlarge = ({ text }: Props) => {
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

  return (
    <main className={'card-enlarge ' + (open ? 'card-enlarge-opened' : 'card-enlarge-closed')}>
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
          <article dangerouslySetInnerHTML={{ __html: text }} />
          <button className="expand" onClick={() => isOpened(false)}>
            Collapse
          </button>
        </>
      ) : (
        <>
          <article dangerouslySetInnerHTML={{ __html: shorten(text, 420) + '...' }} />
          <button className="expand" onClick={() => isOpened(true)}>
            Expand for more info
          </button>
        </>
      )}
      <p className="author">
        Last Edited By: <a href="/#">John Doe</a>
      </p>
    </main>
  );
};
