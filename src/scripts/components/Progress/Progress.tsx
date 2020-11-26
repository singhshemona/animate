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
      // set milliseconds to at least 50ms longer than what the
      // fillBar animation is running for (see Progress.scss)
      // can update this or remove line #13, #23, and #25 entirely
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={'progress ' + 'progress-' + outcome}>
      {loading ? (
        <p className="ending-msg">{endingMsg}</p>
      ) : (
        <svg role="alert" aria-live="assertive">
          <rect x="1" y="1" className="border" rx="15" ry="15" />
          <rect x="1" y="1" className="filling" rx="15" ry="15" />
        </svg>
      )}
    </div>
  );
};
