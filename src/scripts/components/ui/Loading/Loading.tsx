import React, { useState, useEffect } from 'react';
import './Loading.scss';

type Props = {
  outcome: string;
  endingMsg: string;
};

export const Loading = ({ outcome, endingMsg }: Props) => {
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
      // put to see spinner for at least a second
      // can update this or remove line #13, #23, and #25 entirely
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <p className={outcome}>{endingMsg}</p>
      ) : (
        <svg className="spinner" role="alert" aria-live="assertive">
          <circle cx="30" cy="30" r="20" className="circle" />
        </svg>
      )}
    </>
  );
};
