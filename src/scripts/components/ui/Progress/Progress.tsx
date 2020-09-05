import React, { useState, useEffect } from 'react';
import './Progress.scss';

type Props = {
  outcome: string;
  endingMsg: string;
};

export const Progress = ({ outcome, endingMsg }: Props) => {
  const [loading, hasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          // just to see if data request worked
          console.log(json);
          hasLoaded(true);
        });
      // put to see loading bar for at least a second
      // can update this or remove line #13, #23, and #25 entirely
    }, 1050);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={outcome}>
      {loading ? (
        <p className="ending-msg">{endingMsg}</p>
      ) : (
        <svg role="alert" aria-live="assertive">
          <rect className="border" />
          <rect className="filling" />
        </svg>
      )}
    </div>
  );
};
